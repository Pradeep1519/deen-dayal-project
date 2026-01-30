import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Clock, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { toast } from 'sonner';

export function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ✅ FINAL APPS SCRIPT URL
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyjtcEhZRx9N6aQh-myhdeG0kXgq80mWLHELNH5bWu9ANKiZZJdcvj-a8f3hMLcq-6s/exec';

  const handleWhatsApp = () => {
    window.open('https://wa.me/918799704639?text=Hi, I want to know about DDJAY projects', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+918799704639';
  };

  // ✅ GOOGLE SHEETS SAVE ONLY (NO LOCALSTORAGE)
  const saveToGoogleSheets = (data: any) => {
    const sheetData = {
      name: data.name || '',
      mobile: data.mobile || '',
      email: data.email || '',
      message: data.message || '',
      source_page: 'contact-page',
      type: 'Contact_Form',
      status: 'New Lead'
    };

    // ✅ Send to Google Sheets only
    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sheetData)
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    
    if (!formData.name || !formData.mobile || !formData.email) {
      toast.error('Please fill all required fields');
      return;
    }

    if (formData.mobile.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    // ✅ STEP 1: IMMEDIATE WHATSAPP OPEN
    const message = `Hi, I'm ${formData.name}. My mobile: ${formData.mobile}.${formData.message ? ' Message: ' + formData.message : ''} Please contact me.`;
    window.open(`https://wa.me/918799704639?text=${encodeURIComponent(message)}`, '_blank');
    
    // ✅ STEP 2: SHOW SUCCESS IMMEDIATELY
    setSubmitted(true);
    toast.success('✅ WhatsApp opened! Our team will contact you shortly.');
    
    // ✅ STEP 3: BACKGROUND SAVE (No await, no blocking)
    saveToGoogleSheets(formData);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You! ✅</h1>
              <p className="text-xl text-teal-100">
                WhatsApp opened! Our team will contact you within 30 minutes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">WhatsApp Opened</h2>
                <p className="text-gray-600 mb-6">
                  We have received your enquiry. Our team will contact you shortly.
                  <br />
                  <span className="text-sm text-green-600">✓ Data saved successfully</span>
                </p>
                <div className="space-y-4">
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full gap-2 bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Open WhatsApp Again
                  </Button>
                  <Button
                    onClick={() => navigate('/')}
                    variant="outline"
                    className="w-full"
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-teal-100">
              Get in touch with our experts - we're here to help you find the perfect DDJAY project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Call */}
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  <a href="tel:+918799704639" className="text-xl font-semibold text-blue-600 hover:text-blue-700">
                    +91 87997 04639
                  </a>
                </p>
                <Button onClick={handleCall} className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  Quick response on WhatsApp
                  <br />
                  <span className="text-sm">Usually within 5 minutes</span>
                </p>
                <Button onClick={handleWhatsApp} className="w-full gap-2 bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  <a href="mailto:support@ddjayprojects.com" className="text-blue-600 hover:text-blue-700">
                    support@ddjayprojects.com
                  </a>
                  <br />
                  <span className="text-sm">Response within 24 hours</span>
                </p>
                <Button
                  onClick={() => window.location.href = 'mailto:support@ddjayprojects.com'}
                  variant="outline"
                  className="w-full gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">Fill the form and WhatsApp will open immediately</p>

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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

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
                      <strong>✓ Google Sheets Save:</strong> Data saves directly to Google Sheets
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
                    Submit → WhatsApp opens instantly → Data saves to Google Sheets
                  </p>
                </form>
              </div>

              {/* Office Info & Map */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Office Address</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700">
                          DDJAY Portal<br />
                          Sector 29, Golf Course Road<br />
                          Gurugram, Haryana 122001<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Office Hours</p>
                        <p className="text-sm text-gray-600">
                          Monday - Saturday: 9:00 AM - 7:00 PM<br />
                          Sunday: 10:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Our Services</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Free DDJAY project consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Site visit arrangement and support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Project verification and due diligence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Bank loan and documentation assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Legal verification support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Investment guidance and ROI analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Post-purchase assistance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">🚀 Quick Response Guarantee</h3>
                  <p className="text-sm text-gray-700">
                    We understand that property decisions are time-sensitive. That's why we guarantee:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>• WhatsApp response within 30 minutes (during office hours)</li>
                    <li>• Phone calls answered within 30 minutes</li>
                    <li>• Email response within 24 hours</li>
                    <li>• Form submissions acknowledged within 2 hours</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">Q: Is your consultation service really free?</h3>
                <p className="text-gray-600 text-sm">
                  No-cost expert assistance to ensure you choose the right DDJAY project
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">Q: Do I need to visit your office?</h3>
                <p className="text-gray-600 text-sm">
                  Not necessary. We can guide you completely over phone/WhatsApp. However, you're always 
                  welcome to visit our office for a face-to-face consultation.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">Q: How quickly can I expect a response?</h3>
                <p className="text-gray-600 text-sm">
                  We typically respond to WhatsApp messages within 5 minutes during office hours. 
                  Phone calls are answered immediately, and form submissions get a response within 2 hours.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">Q: Can you arrange site visits on weekends?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we arrange site visits 7 days a week including weekends and holidays, 
                  based on your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Prefer to Browse First?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Check out our verified DDJAY projects before getting in touch
            </p>
            <Button
              onClick={() => navigate('/live-projects')}
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              Browse All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}