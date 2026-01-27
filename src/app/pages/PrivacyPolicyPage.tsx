'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { 
  Shield, Lock, Eye, FileText, UserCheck, Database,
  ArrowLeft, Mail, Phone, Calendar, CheckCircle
} from 'lucide-react';

export function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: <Shield className="w-5 h-5" /> },
    { id: 'data-collection', title: 'Data We Collect', icon: <Database className="w-5 h-5" /> },
    { id: 'data-usage', title: 'How We Use Data', icon: <Eye className="w-5 h-5" /> },
    { id: 'data-protection', title: 'Data Protection', icon: <Lock className="w-5 h-5" /> },
    { id: 'cookies', title: 'Cookies Policy', icon: <FileText className="w-5 h-5" /> },
    { id: 'rights', title: 'Your Rights', icon: <UserCheck className="w-5 h-5" /> },
    { id: 'contact', title: 'Contact Us', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
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
                    <Shield className="w-6 h-6" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
                </div>
                <p className="text-blue-100 text-lg">
                  Last Updated: January 1, 2024
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Data Secure</div>
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
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {section.icon}
                      <span className="font-medium">{section.title}</span>
                    </button>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Last Updated: Jan 1, 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>RERA Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-8">
                {/* Overview Section */}
                <section id="overview" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Overview</h2>
                  </div>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 mb-4">
                      At <strong>DDJAY Real Estate Portal</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                    <p className="text-gray-700">
                      We comply with applicable data protection laws including the Real Estate (Regulation and Development) Act, 2016 (RERA) and the Information Technology Act, 2000.
                    </p>
                  </div>
                </section>

                {/* Data We Collect Section */}
                <section id="data-collection" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Information We Collect</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <h3 className="font-bold text-lg mb-3">Personal Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span><strong>Name & Contact Details:</strong> Your full name, email address, phone number</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span><strong>Demographic Information:</strong> Age, gender, occupation, income details</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span><strong>Property Preferences:</strong> Budget, location preferences, property type</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span><strong>KYC Documents:</strong> For RERA compliance when booking properties</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg">
                      <h3 className="font-bold text-lg mb-3">Automatically Collected Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span><strong>Device Information:</strong> IP address, browser type, operating system</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span><strong>Usage Data:</strong> Pages visited, time spent, navigation patterns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span><strong>Location Data:</strong> General location for property recommendations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Use Data Section */}
                <section id="data-usage" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <Eye className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h3 className="font-bold mb-3 text-lg">Service Delivery</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Process property inquiries and bookings</li>
                        <li>• Schedule site visits</li>
                        <li>• Send property documents</li>
                        <li>• Provide customer support</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h3 className="font-bold mb-3 text-lg">Communication</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Send project updates</li>
                        <li>• Share new property listings</li>
                        <li>• Provide booking confirmations</li>
                        <li>• Send legal/RERA updates</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h3 className="font-bold mb-3 text-lg">Legal Compliance</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• RERA registration requirements</li>
                        <li>• Property transaction records</li>
                        <li>• Tax and regulatory compliance</li>
                        <li>• Fraud prevention</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h3 className="font-bold mb-3 text-lg">Improvement</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Website optimization</li>
                        <li>• Service enhancement</li>
                        <li>• Customer experience improvement</li>
                        <li>• Market research</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Data Protection Section */}
                <section id="data-protection" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Data Security Measures</h2>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-lg mb-4">Technical Security</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="font-bold">SSL</span>
                            </div>
                            <span>256-bit SSL Encryption</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="font-bold">🔒</span>
                            </div>
                            <span>Secure Data Storage</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                              <span className="font-bold">🛡️</span>
                            </div>
                            <span>Firewall Protection</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-4">Organizational Security</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="font-bold">👥</span>
                            </div>
                            <span>Limited Access Control</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                              <span className="font-bold">📋</span>
                            </div>
                            <span>Employee Training</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                              <span className="font-bold">🔍</span>
                            </div>
                            <span>Regular Security Audits</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cookies Section */}
                <section id="cookies" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Cookies Policy</h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p>We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings.</p>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-bold mb-2">Types of Cookies We Use:</h4>
                      <ul className="space-y-2">
                        <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand user behavior</li>
                        <li><strong>Preference Cookies:</strong> Remember your settings</li>
                        <li><strong>Marketing Cookies:</strong> Show relevant property suggestions</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Your Rights Section */}
                <section id="rights" className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <UserCheck className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Your Data Protection Rights</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-bold text-lg mb-2">Right to Access</h3>
                      <p className="text-gray-700">Request copies of your personal data</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h3 className="font-bold text-lg mb-2">Right to Rectification</h3>
                      <p className="text-gray-700">Request correction of inaccurate data</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4">
                      <h3 className="font-bold text-lg mb-2">Right to Erasure</h3>
                      <p className="text-gray-700">Request deletion of your personal data</p>
                    </div>
                    <div className="border-l-4 border-yellow-600 pl-4">
                      <h3 className="font-bold text-lg mb-2">Right to Object</h3>
                      <p className="text-gray-700">Object to our processing of your data</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-4">
                      <h3 className="font-bold text-lg mb-2">Right to Portability</h3>
                      <p className="text-gray-700">Request transfer of data to another organization</p>
                    </div>
                    <div className="border-l-4 border-teal-600 pl-4">
                      <h3 className="font-bold text-lg mb-2">Right to Withdraw</h3>
                      <p className="text-gray-700">Withdraw consent at any time</p>
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Contact Us</h2>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                    <p className="text-gray-700 mb-6">
                      For any questions regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-5">
                        <div className="flex items-center gap-3 mb-4">
                          <Mail className="w-5 h-5 text-blue-600" />
                          <h3 className="font-bold text-lg">Email</h3>
                        </div>
                        <p className="text-gray-700">privacy@ddjayportal.com</p>
                        <p className="text-sm text-gray-500 mt-2">Response within 24-48 hours</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-5">
                        <div className="flex items-center gap-3 mb-4">
                          <Phone className="w-5 h-5 text-blue-600" />
                          <h3 className="font-bold text-lg">Phone</h3>
                        </div>
                        <p className="text-gray-700">+91 87997 04639</p>
                        <p className="text-sm text-gray-500 mt-2">Mon-Sat, 10AM-7PM</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-white rounded-lg p-5">
                      <h3 className="font-bold text-lg mb-3">Data Protection Officer</h3>
                      <p className="text-gray-700">
                        <strong>Address:</strong> DDJAY Real Estate Portal, Gurugram, Haryana
                      </p>
                    </div>
                  </div>
                </section>

                {/* Update Notice */}
                <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-lg mb-3">Policy Updates</h3>
                  <p className="text-gray-700 mb-3">
                    We may update this Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-700">
                    <Calendar className="w-4 h-4" />
                    <span><strong>Next Review:</strong> January 1, 2025</span>
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