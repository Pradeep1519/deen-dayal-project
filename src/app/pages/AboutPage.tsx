import { AlertCircle, Building2, Users, Shield, Target, Heart, Award } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Disclaimer Banner */}
      <section className="bg-yellow-50 border-y-2 border-yellow-400 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-yellow-900 mb-2">Important Notice</h3>
                <p className="text-yellow-800">
                  <strong>This is an independent real estate information and lead generation platform.</strong> 
                  We are NOT a government website or affiliated with any government authority, department, 
                  or agency. DDJAY (Deen Dayal Jan Awas Yojana) is a government housing scheme, and this 
                  platform provides information about projects developed under this scheme by private developers 
                  and colonizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DDJAY Portal</h1>
            <p className="text-xl text-slate-200">
              Your trusted independent platform for comprehensive DDJAY project information
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To create a transparent, comprehensive, and user-friendly platform that empowers buyers 
                  and investors with verified information about DDJAY projects. We aim to simplify the 
                  property search process and connect genuine buyers with legitimate DDJAY developments 
                  across North India.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <Heart className="w-12 h-12 text-red-600 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To become India's most trusted and comprehensive DDJAY project information platform, 
                  helping thousands of families achieve their dream of affordable homeownership through 
                  verified projects, expert guidance, and complete transparency in the property buying process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-3">Project Aggregation</h3>
                <p className="text-gray-600 text-sm">
                  We aggregate and verify DDJAY projects from across North India, providing a centralized 
                  platform for buyers to discover and compare available options
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-3">Verification & Due Diligence</h3>
                <p className="text-gray-600 text-sm">
                  Every project listed on our platform undergoes thorough verification for RERA registration, 
                  DTCP/HUDA approvals, and legal documentation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-3">Expert Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Our team of real estate experts provides free consultation, site visit support, and 
                  guidance throughout your property buying journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">🎯 Unbiased Information</h3>
                <p className="text-gray-600 text-sm">
                  We provide objective information about all projects without bias. Our goal is to help 
                  you make informed decisions based on facts.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">✅ 100% Verified Projects</h3>
                <p className="text-gray-600 text-sm">
                  Every project on our platform is verified for legal compliance, approvals, and 
                  authenticity before being listed.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">💰 No Hidden Charges</h3>
                <p className="text-gray-600 text-sm">
                  Our services are completely free for buyers. We don't charge any fees for information, 
                  consultation, or site visits.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">🤝 Post-Purchase Support</h3>
                <p className="text-gray-600 text-sm">
                  We continue to support you even after purchase with documentation assistance and 
                  any queries you may have.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">📊 Comprehensive Comparison</h3>
                <p className="text-gray-600 text-sm">
                  Compare multiple projects side-by-side to understand differences in pricing, location, 
                  amenities, and ROI potential.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">🔒 Privacy Protected</h3>
                <p className="text-gray-600 text-sm">
                  Your personal information is safe with us. We never share your data with third parties 
                  without your explicit consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Transparency</h3>
                  <p className="text-gray-600">
                    We believe in complete transparency in all our dealings. Every piece of information 
                    we provide is accurate and verified.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Customer First</h3>
                  <p className="text-gray-600">
                    Your interests always come first. We guide you towards what's best for you, not what 
                    earns us the highest commission.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in everything we do - from project verification to customer 
                    service and post-purchase support.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Community</h3>
                  <p className="text-gray-600">
                    We're building a community of informed buyers and investors who help each other make 
                    better property decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Legal Disclaimer</h2>
            
            <div className="bg-white rounded-lg p-8 shadow-sm space-y-4 text-sm text-gray-700">
              <p>
                <strong>1. Independent Platform:</strong> DDJAY Portal is an independent real estate 
                information and lead generation platform. We are not affiliated with, endorsed by, or 
                connected to any government authority, department, or agency.
              </p>
              
              <p>
                <strong>2. Information Accuracy:</strong> While we strive to provide accurate and 
                up-to-date information, we recommend buyers to independently verify all project details, 
                approvals, and legal documentation before making any purchase decisions.
              </p>
              
              <p>
                <strong>3. No Liability:</strong> We act as an information platform and lead connector. 
                We are not responsible for any disputes, issues, or disagreements between buyers and 
                developers/sellers.
              </p>
              
              <p>
                <strong>4. Third-Party Projects:</strong> All projects listed on our platform are 
                developed by independent private developers and colonizers. We do not develop, own, 
                or sell any properties ourselves.
              </p>
              
              <p>
                <strong>5. Investment Risk:</strong> Real estate investment carries inherent risks. 
                Past performance of projects does not guarantee future returns. Buyers should conduct 
                their own due diligence and consult with legal and financial advisors.
              </p>
              
              <p>
                <strong>6. RERA Compliance:</strong> All buyers are advised to verify RERA registration 
                and other approvals directly with relevant authorities before making any investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream DDJAY Project?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Browse verified projects or submit your requirement for personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('live-projects')}
                size="lg"
                variant="secondary"
              >
                Browse Projects
              </Button>
              <Button
                onClick={() => onNavigate('submit-requirement')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Submit Requirement
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
