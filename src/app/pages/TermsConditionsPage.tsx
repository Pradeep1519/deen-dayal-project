'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { 
  FileText, Scale, Building2, IndianRupee, Shield, 
  AlertCircle, BookOpen, Calendar, CheckCircle, XCircle,
  ArrowLeft, Phone, Mail, MapPin, User, ExternalLink, FileCheck
} from 'lucide-react';

export function TermsConditionsPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: <FileText className="w-5 h-5" /> },
    { id: 'definitions', title: 'Definitions', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'property-booking', title: 'Property Booking', icon: <Building2 className="w-5 h-5" /> },
    { id: 'payment-terms', title: 'Payment Terms', icon: <IndianRupee className="w-5 h-5" /> },
    { id: 'rera-compliance', title: 'RERA Compliance', icon: <Scale className="w-5 h-5" /> },
    { id: 'cancellation', title: 'Cancellation & Refund', icon: <XCircle className="w-5 h-5" /> },
    { id: 'liability', title: 'Liability', icon: <Shield className="w-5 h-5" /> },
    { id: 'contact', title: 'Contact Information', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-6 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
                    <p className="text-purple-100 mt-2">
                      Legal Agreement for DDJAY Real Estate Portal
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">RERA</div>
                  <div className="text-sm">Compliant Terms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <h3 className="text-lg font-bold mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full text-left flex items-center gap-3 p-3 rounded-lg transition-all ${
                        activeSection === section.id
                          ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {section.icon}
                      <span className="font-medium">{section.title}</span>
                    </button>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">Effective: Jan 1, 2024</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <AlertCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-600">Please read carefully</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-8">
                {/* Important Notice */}
                <div className="mb-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Important Legal Notice</h3>
                      <p className="text-gray-700">
                        By accessing or using the DDJAY Real Estate Portal, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Introduction Section */}
                <section id="introduction" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold">1. Introduction</h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Welcome to <strong>DDJAY Real Estate Portal</strong> ("Website", "We", "Us", "Our"). These Terms and Conditions govern your use of our website and services related to Deen Dayal Jan Awas Yojna (DDJAY) approved real estate projects.
                    </p>
                    <p>
                      Our platform provides information about DDJAY approved residential plots and floors in Gurugram and surrounding areas. We act as an information portal and facilitator between buyers and RERA registered developers.
                    </p>
                  </div>
                </section>

                {/* Definitions Section */}
                <section id="definitions" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold">2. Definitions</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2 text-purple-700">Buyer/Investor</h3>
                        <p className="text-sm text-gray-600">Any person interested in purchasing DDJAY approved property through our portal</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2 text-purple-700">Developer/Builder</h3>
                        <p className="text-sm text-gray-600">RERA registered entity developing DDJAY approved projects</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2 text-purple-700">DDJAY</h3>
                        <p className="text-sm text-gray-600">Deen Dayal Jan Awas Yojna - Affordable housing scheme by Haryana Government</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold mb-2 text-purple-700">RERA</h3>
                        <p className="text-sm text-gray-600">Real Estate (Regulation and Development) Act, 2016</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Property Booking Section */}
                <section id="property-booking" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold">3. Property Booking Process</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-5 rounded-lg">
                      <h3 className="font-bold text-lg mb-3">Booking Procedure</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center font-bold">1</div>
                          <div>
                            <h4 className="font-bold">Expression of Interest</h4>
                            <p className="text-gray-700 text-sm">Submit inquiry through website/WhatsApp/phone</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center font-bold">2</div>
                          <div>
                            <h4 className="font-bold">Site Visit</h4>
                            <p className="text-gray-700 text-sm">Schedule physical visit to project site</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center font-bold">3</div>
                          <div>
                            <h4 className="font-bold">Document Verification</h4>
                            <p className="text-gray-700 text-sm">Verify RERA, TCP approvals and legal documents</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center font-bold">4</div>
                          <div>
                            <h4 className="font-bold">Booking Amount</h4>
                            <p className="text-gray-700 text-sm">Pay booking amount to developer's account</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center font-bold">5</div>
                          <div>
                            <h4 className="font-bold">Agreement Execution</h4>
                            <p className="text-gray-700 text-sm">Sign builder-buyer agreement as per RERA format</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-lg">
                      <h3 className="font-bold text-lg mb-3">Eligibility Criteria</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Indian citizen or NRI</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Minimum 18 years of age</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Valid identity proof (Aadhar/PAN/Passport)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Address proof as per KYC requirements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Payment Terms Section */}
                <section id="payment-terms" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <IndianRupee className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold">4. Payment Terms</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h3 className="font-bold text-lg mb-3">Payment Schedule</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b pb-2">
                          <span>Booking Amount</span>
                          <span className="font-bold">₹50,000 - ₹1,00,000</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                          <span>Within 30 days of booking</span>
                          <span className="font-bold">20% of total price</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                          <span>On floor completion</span>
                          <span className="font-bold">40% of total price</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>On possession</span>
                          <span className="font-bold">Balance 40%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg">
                      <h3 className="font-bold text-lg mb-3">Important Payment Notes</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>All payments to be made in favor of RERA registered developer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>70% of payments must be deposited in RERA designated escrow account</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Bank loans available from approved financial institutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>GST and other statutory taxes applicable as per government norms</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* RERA Compliance Section */}
                <section id="rera-compliance" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <Scale className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold">5. RERA Compliance</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-5 rounded-lg">
                      <h3 className="font-bold text-lg mb-3">Mandatory RERA Provisions</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <FileCheck className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                          <span>All projects advertised are RERA registered</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileCheck className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                          <span>Project details as per RERA website to be verified by buyer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileCheck className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                          <span>Builder-buyer agreement as per RERA prescribed format</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileCheck className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                          <span>Escrow account maintenance for 70% of project funds</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <h3 className="font-bold text-lg mb-3">Buyer's Rights Under RERA</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="font-bold">✓</span>
                          </div>
                          <div>
                            <h4 className="font-bold">Right to Accurate Information</h4>
                            <p className="text-gray-700 text-sm">Access to all project documents and approvals</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="font-bold">✓</span>
                          </div>
                          <div>
                            <h4 className="font-bold">Right to Timely Possession</h4>
                            <p className="text-gray-700 text-sm">Compensation for delay in project completion</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="font-bold">✓</span>
                          </div>
                          <div>
                            <h4 className="font-bold">Right to Quality</h4>
                            <p className="text-gray-700 text-sm">Construction as per approved plans and specifications</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cancellation & Refund Section */}
                <section id="cancellation" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold">6. Cancellation & Refund Policy</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h3 className="font-bold text-lg mb-3">Cancellation by Buyer</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b pb-2">
                          <span>Cancellation within 15 days of booking</span>
                          <span className="font-bold text-green-600">Full refund</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                          <span>Cancellation after 15 days but within 30 days</span>
                          <span className="font-bold text-yellow-600">90% refund</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                          <span>Cancellation after 30 days</span>
                          <span className="font-bold text-orange-600">As per RERA guidelines</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Cancellation after agreement signing</span>
                          <span className="font-bold text-red-600">No refund (except as per RERA)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-5 rounded-lg">
                      <h3 className="font-bold text-lg mb-3">Cancellation by Developer</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                          <span>Developer to refund amount with interest as per RERA</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                          <span>Compensation for damages as per RERA Act</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                          <span>Legal recourse available to buyer through RERA authority</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Liability Section */}
                <section id="liability" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-bold text-lg mb-3">Disclaimer of Warranties</h3>
                      <p className="text-gray-700 mb-3">
                        The information provided on this portal is for general informational purposes only. While we strive to keep information accurate and up-to-date, we make no representations or warranties of any kind.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• We are not government affiliated</li>
                        <li>• Information should be verified independently</li>
                        <li>• Prices and availability subject to change</li>
                        <li>• Legal documents should be reviewed by legal experts</li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-5">
                      <h3 className="font-bold text-lg mb-3">Limitation of Damages</h3>
                      <p className="text-gray-700 mb-3">
                        DDJAY Real Estate Portal shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Use or inability to use our services</li>
                        <li>• Unauthorized access to your information</li>
                        <li>• Statements or conduct of any third party</li>
                        <li>• Any other matter relating to our services</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <Phone className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold">8. Contact Information</h2>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6">
                    <p className="text-gray-700 mb-6">
                      For any questions or concerns regarding these Terms & Conditions, please contact us:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-5">
                        <div className="flex items-center gap-3 mb-4">
                          <Mail className="w-5 h-5 text-purple-600" />
                          <h3 className="font-bold text-lg">Email</h3>
                        </div>
                        <p className="text-gray-700">legal@ddjayportal.com</p>
                        <p className="text-sm text-gray-500 mt-2">For legal queries</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-5">
                        <div className="flex items-center gap-3 mb-4">
                          <Phone className="w-5 h-5 text-purple-600" />
                          <h3 className="font-bold text-lg">Phone</h3>
                        </div>
                        <p className="text-gray-700">+91 87997 04639</p>
                        <p className="text-sm text-gray-500 mt-2">Mon-Sat, 10AM-7PM</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-white rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-5 h-5 text-purple-600" />
                        <h3 className="font-bold text-lg">Address</h3>
                      </div>
                      <p className="text-gray-700">
                        DDJAY Real Estate Portal<br />
                        Gurugram, Haryana<br />
                        India - 122001
                      </p>
                    </div>

                    <div className="mt-6 bg-blue-50 rounded-lg p-5">
                      <h3 className="font-bold text-lg mb-3">Grievance Officer</h3>
                      <p className="text-gray-700 mb-2">
                        As per Information Technology Act, 2000
                      </p>
                      <p className="text-gray-700">
                        <strong>Email:</strong> grievance@ddjayportal.com<br />
                        <strong>Response Time:</strong> Within 30 days
                      </p>
                    </div>
                  </div>
                </section>

                {/* Agreement Section */}
                <div className="mt-12 p-6 bg-purple-50 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-lg mb-3">Agreement to Terms</h3>
                  <p className="text-gray-700 mb-4">
                    By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-purple-700">
                    <Calendar className="w-4 h-4" />
                    <span><strong>Effective Date:</strong> January 1, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}