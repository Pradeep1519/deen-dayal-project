import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { MessageCircle, CheckCircle, Mail } from 'lucide-react';
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

  // ✅ DIRECT APPS SCRIPT URL (Remove Render backend)
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbywaSBxfHRtElku76F4TTqX1xchenjPDrE8OZSg6O6Hk3Jyuu1wcfq7M1krKoeGfKAA/exec';

  // ✅ BACKGROUND SAVE TO GOOGLE SHEETS (No await)
  const saveToGoogleSheets = (leadData: any) => {
    try {
      const sheetData = {
        name: leadData.name,
        mobile: leadData.mobile,
        email: leadData.email || '',
        budget: leadData.budget || '',
        requirement: leadData.requirement || '',
        purpose: leadData.purpose || '',
        project: leadData.project_name || '',
        source_page: leadData.source_page,
        type: 'Lead_Form',
        status: 'New Lead'
      };

      // ✅ BACKGROUND FETCH (No await, no waiting)
      fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sheetData)
      })
      .then(response => response.json())
      .then(result => {
        console.log('✅ Background save success:', result);
      })
      .catch(error => {
        console.log('⚠️ Background save failed, using localStorage:', error);
        saveToLocalStorage(sheetData);
      });

    } catch (error) {
      saveToLocalStorage(leadData);
    }
  };

  // ✅ LOCAL STORAGE BACKUP
  const saveToLocalStorage = (leadData: any) => {
    try {
      const leads = JSON.parse(localStorage.getItem('ddjay_leads') || '[]');
      leads.push({
        ...leadData,
        id: Date.now().toString(),
        created_at: new Date().toISOString()
      });
      localStorage.setItem('ddjay_leads', JSON.stringify(leads));
    } catch (error) {
      console.error('LocalStorage error:', error);
    }
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

    // ✅ STEP 1: IMMEDIATE WHATSAPP OPEN (No delay)
    const message = `Hi, I'm ${formData.name}. I'm interested in ${projectName || 'DDJAY projects'}. My mobile: ${formData.mobile}. Please share details.`;
    window.open(`https://wa.me/918799704639?text=${encodeURIComponent(message)}`, '_blank');
    
    // ✅ STEP 2: SHOW SUCCESS IMMEDIATELY
    setSubmitted(true);
    toast.success('✅ WhatsApp opened! Data saving in background...');
    
    // ✅ STEP 3: BACKGROUND SAVE (No await, no blocking)
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
          <span className="text-sm text-green-600">✓ Data saved in background</span>
        </p>
        
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
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
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

        <div className="bg-blue-50 p-3 rounded-md">
          <p className="text-xs text-blue-800">
            <strong>⚡ Instant WhatsApp:</strong> Opens immediately after submit
          </p>
          <p className="text-xs text-blue-800 mt-1">
            <strong>✓ Background Save:</strong> Data saves automatically in background
          </p>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={!agreeTerms}
        >
          Submit & Open WhatsApp
        </Button>

        <p className="text-xs text-center text-gray-500">
          Submit → WhatsApp opens instantly → Data saves in background
        </p>
      </form>
    </div>
  );
}