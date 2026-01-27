import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { LeadForm } from '@/app/components/LeadForm';

export function SubmitRequirementPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit Your Requirement</h1>
            <p className="text-xl text-indigo-100">
              Tell us what you're looking for and we'll help you find the perfect DDJAY project
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold mb-6">How We Help You</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Personalized Recommendations</h3>
                      <p className="text-gray-600 text-sm">
                        Based on your budget, location preference, and purpose, we'll suggest the most 
                        suitable DDJAY projects for you
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Expert Consultation</h3>
                      <p className="text-gray-600 text-sm">
                        Our property experts will call you within 24 hours to understand your needs 
                        and provide professional guidance
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Site Visit Arrangement</h3>
                      <p className="text-gray-600 text-sm">
                        We'll arrange free site visits to shortlisted projects at your convenience
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Documentation Support</h3>
                      <p className="text-gray-600 text-sm">
                        Complete assistance with paperwork, bank loans, and legal documentation
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Best Price Negotiation</h3>
                      <p className="text-gray-600 text-sm">
                        We'll help you get the best possible price and payment plans from developers
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-yellow-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">100% Free Service</h3>
                      <p className="text-gray-600 text-sm">
                        All our advisory and support services are completely free for buyers
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h3 className="font-bold mb-4">Why Trust Us?</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      6+ years of experience in real estate
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      5000+ satisfied customers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Only verified and approved projects
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      No hidden charges or commissions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Post-purchase support and assistance
                    </li>
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div>
                <LeadForm
                  sourcePage="submit-requirement"
                  title="Share Your Requirement"
                  description="Fill in your details and we'll get back to you within 24 hours"
                  showBudget
                  showRequirement
                />

                {/* Privacy Note */}
                <div className="mt-6 bg-gray-100 rounded-lg p-4">
                  <p className="text-xs text-gray-600">
                    <strong>Privacy Note:</strong> Your information is completely safe with us. 
                    We will only use it to provide you with relevant project recommendations. 
                    We do not share your data with any third parties without your consent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Submit Form</h3>
                <p className="text-sm text-gray-600">
                  Fill and submit your requirement form
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Expert Call</h3>
                <p className="text-sm text-gray-600">
                  Our expert calls you within 24 hours
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Site Visit</h3>
                <p className="text-sm text-gray-600">
                  Free site visit to shortlisted projects
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Book & Close</h3>
                <p className="text-sm text-gray-600">
                  Complete paperwork and own your plot
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}