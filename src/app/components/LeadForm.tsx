import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { MessageCircle, CheckCircle, Mail, IndianRupee, MapPin } from 'lucide-react';
import { toast } from 'sonner';

interface LeadFormProps {
  projectId?: string;
  projectName?: string;
  sourcePage: string;
  title?: string;
  description?: string;
  showBudget?: boolean;
  showRequirement?: boolean;
}

export function LeadForm({
  projectId,
  projectName,
  sourcePage,
  title = 'Get Project Details',
  description = 'Fill the form and our team will contact you within 24 hours',
  showBudget = false,
  showRequirement = false,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    budget: '',
    requirement: '',
    purpose: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [projectInfo, setProjectInfo] = useState<any>(null);

  // ✅ FINAL APPS SCRIPT URL
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxSHrMLB2hYTOSBFP1xbdme2lzDM0_6KeILg31qcRPwL3k2IK2fVPCM_WjeWbfI-Ypu/exec';

  // Get current page URL for tracking
  useEffect(() => {
    // Try to get project info from URL or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const urlProjectId = urlParams.get('id');
    
    if (urlProjectId && projectId) {
      // You can fetch project details here if needed
      setProjectInfo({
        id: projectId,
        name: projectName,
        url: window.location.href
      });
    }
  }, [projectId, projectName]);

  // ✅ GOOGLE SHEETS SAVE WITH PROJECT DETAILS
  const saveToGoogleSheets = (leadData: any) => {
    const sheetData = {
      // TIMESTAMP
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('en-IN'),
      time: new Date().toLocaleTimeString('en-IN'),
      
      // USER DETAILS
      name: leadData.name || '',
      mobile: leadData.mobile || '',
      email: leadData.email || '',
      budget: leadData.budget || '',
      requirement: leadData.requirement || '',
      purpose: leadData.purpose || '',
      
      // PROJECT DETAILS
      project_id: projectId || '',
      project_name: projectName || leadData.project_name || '',
      project_location: '', // You can pass this if available
      project_price: '', // You can pass this if available
      
      // FORM DETAILS
      source_page: sourcePage,
      form_type: 'Project_Specific_Enquiry',
      form_title: title,
      
      // SYSTEM DETAILS
      page_url: window.location.href,
      status: 'New Lead',
      priority: 'High',
      
      // ADDITIONAL FIELDS FOR BETTER TRACKING
      enquiry_type: showRequirement ? 'Detailed Enquiry' : 'Basic Enquiry',
      follow_up_status: 'Pending',
      assigned_to: 'Sales Team'
    };

    // ✅ Send to Google Sheets (no-cors mode)
    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sheetData)
    }).then(() => {
      console.log('✅ Data sent to Google Sheets');
    }).catch(error => {
      console.error('❌ Error sending to Google Sheets:', error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    
    if (!formData.name || !formData.mobile) {
      toast.error('Please fill all required fields');
      return;
    }

    if (formData.mobile.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    // ✅ IMMEDIATE WHATSAPP OPEN WITH PROJECT DETAILS
    const whatsappMessage = `Hi, I'm ${formData.name}. 
I'm interested in ${projectName || 'DDJAY Project'}. 
My mobile: ${formData.mobile}
${formData.email ? `Email: ${formData.email}` : ''}
${formData.requirement ? `Requirement: ${formData.requirement}` : ''}
${formData.budget ? `Budget: ${formData.budget}` : ''}
Please share complete details and arrange site visit.`;

    window.open(`https://wa.me/918799704639?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // ✅ SHOW SUCCESS IMMEDIATELY
    setSubmitted(true);
    toast.success('✅ WhatsApp opened! Our team will contact you within 30 minutes.');
    
    // ✅ BACKGROUND SAVE TO GOOGLE SHEETS WITH PROJECT DETAILS
    const leadData = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      budget: formData.budget,
      requirement: formData.requirement,
      purpose: formData.purpose,
      project_name: projectName,
      source_page: sourcePage,
    };
    
    saveToGoogleSheets(leadData);
    
    // Optional: Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        mobile: '',
        email: '',
        budget: '',
        requirement: '',
        purpose: '',
      });
      setAgreeTerms(false);
    }, 5000);
  };

  // ✅ PROJECT INFO BANNER
  const ProjectInfoBanner = () => {
    if (!projectName) return null;
    
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-blue-800 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Enquiring About:
            </h4>
            <p className="text-blue-900 font-semibold text-lg">{projectName}</p>
            {projectId && (
              <p className="text-blue-600 text-sm">Project ID: {projectId}</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-sm text-blue-700">Form will save project details automatically</p>
          </div>
        </div>
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg border shadow-sm p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-bold text-xl mb-2">Thank You! ✅</h3>
        <p className="text-gray-600 mb-4">
          WhatsApp opened! Our team will contact you within 30 minutes.
          <br />
          <span className="text-sm text-green-600">✓ Project enquiry saved successfully</span>
        </p>
        
        {projectName && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-green-800">
              <strong>Project:</strong> {projectName}
            </p>
            <p className="text-xs text-green-700">
              Your enquiry has been recorded for this project
            </p>
          </div>
        )}
        
        <div className="space-y-3">
          <Button
            onClick={() => {
              const message = `Hi, I'm ${formData.name}. I'm interested in ${projectName || 'DDJAY projects'}. My mobile: ${formData.mobile}. Please share details.`;
              window.open(`https://wa.me/918799704639?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="w-full gap-2 bg-green-600 hover:bg-green-700"
          >
            <MessageCircle className="w-4 h-4" />
            Open WhatsApp Again
          </Button>
          
          <Button
            onClick={() => window.location.href = 'mailto:support@ddjayprojects.org'}
            variant="outline"
            className="w-full gap-2"
          >
            <Mail className="w-4 h-4" />
            Or Send Email
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      {/* PROJECT INFO BANNER */}
      {ProjectInfoBanner()}
      
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="mobile">Mobile Number *</Label>
          <Input
            id="mobile"
            type="tel"
            placeholder="10-digit mobile number"
            value={formData.mobile}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 10);
              setFormData({ ...formData, mobile: value });
            }}
            required
          />
          <p className="text-xs text-gray-500 mt-1">We'll call/WhatsApp on this number</p>
        </div>

        <div>
          <Label htmlFor="email">Email Address (Optional)</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {showBudget && (
          <div>
            <Label htmlFor="budget">Budget Range</Label>
            <Input
              id="budget"
              type="text"
              placeholder="e.g., 15-25 Lakh"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            />
          </div>
        )}

        {showRequirement && (
          <>
            <div>
              <Label htmlFor="purpose">Purpose</Label>
              <select
                id="purpose"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              >
                <option value="">Select purpose</option>
                <option value="investment">Investment</option>
                <option value="residential">Residential (Own Use)</option>
                <option value="both">Both Investment & Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <div>
              <Label htmlFor="requirement">Your Requirement</Label>
              <Textarea
                id="requirement"
                placeholder="Tell us about your requirement (e.g., 2BHK, Plot size, location preference)"
                value={formData.requirement}
                onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                rows={3}
              />
            </div>
          </>
        )}

        {/* Terms & Conditions Checkbox */}
        <div className="pt-4 border-t">
          <div className="flex items-start gap-3">
            <div className="flex items-center h-5 mt-1">
              <input
                id="terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                required
              />
            </div>
            <div className="text-sm">
              <label htmlFor="terms" className="font-medium text-gray-900 cursor-pointer">
                I agree and authorise to call/ send SMS/ WhatsApp/ RCS/ Promotional/ Informational messages/notifications.
              </label>
              <p className="text-gray-600 mt-1">
                This will override the registry with DNC/NDNC.
              </p>
            </div>
          </div>
        </div>

        {/* INFO BANNER */}
        <div className="bg-blue-50 p-3 rounded-md">
          <p className="text-xs text-blue-800">
            <strong>⚡ Instant WhatsApp:</strong> Opens immediately after submit
          </p>
          <p className="text-xs text-blue-800 mt-1">
            <strong>✓ Google Sheets Save:</strong> Project enquiry data saves directly to Google Sheets
          </p>
          {projectName && (
            <p className="text-xs text-blue-800 mt-1">
              <strong>📌 Project Linked:</strong> Your enquiry will be linked to "{projectName}"
            </p>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" 
          disabled={!agreeTerms}
        >
          Submit & Open WhatsApp
        </Button>

        <p className="text-xs text-center text-gray-500">
          Submit → WhatsApp opens instantly → Project enquiry saved to Google Sheets
        </p>
      </form>
    </div>
  );
}