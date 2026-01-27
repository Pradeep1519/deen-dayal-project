import { useNavigate } from 'react-router-dom';
import { CheckCircle, Users, Home, TrendingUp, FileCheck, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

export function WhatIsDDJAYPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What is Deen Dayal Jan Awas Yojana (DDJAY)?
            </h1>
            <p className="text-xl text-blue-100">
              A comprehensive guide to understanding DDJAY housing scheme, benefits, and investment opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Scheme Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Scheme Overview</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                <strong>Deen Dayal Jan Awas Yojana (DDJAY)</strong> is a government-backed affordable housing initiative 
                aimed at providing quality residential plots and housing to economically weaker sections (EWS) and 
                lower-income groups (LIG) of society.
              </p>
              
              <p className="text-gray-700 mb-4">
                The scheme encourages licensed colonizers and developers to create affordable plotted developments 
                with proper infrastructure, amenities, and government approvals. These projects are regulated and 
                must meet specific criteria to qualify under the DDJAY framework.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h3 className="font-bold text-lg mb-2">Key Objective</h3>
                <p className="text-gray-700 mb-0">
                  To make homeownership accessible and affordable for middle and lower-income families through 
                  government-regulated plotted developments with modern amenities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Benefits of DDJAY Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Government Approved</h3>
                <p className="text-gray-600 text-sm">
                  All DDJAY projects are approved by state authorities (DTCP/HUDA/RERA) ensuring legal compliance 
                  and protection for buyers
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Affordable Pricing</h3>
                <p className="text-gray-600 text-sm">
                  Plots are priced competitively, typically 20-30% lower than similar non-DDJAY developments 
                  in the same area
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Easy Bank Loans</h3>
                <p className="text-gray-600 text-sm">
                  Banks readily provide loans for DDJAY plots (up to 80-85% financing) with lower interest rates 
                  and flexible repayment options
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Clear Documentation</h3>
                <p className="text-gray-600 text-sm">
                  All plots come with clear land titles, proper registry, and complete legal documentation 
                  without any encumbrances
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Quality Infrastructure</h3>
                <p className="text-gray-600 text-sm">
                  Mandatory amenities include wide roads, parks, street lights, underground electricity, 
                  water supply, and drainage systems
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <HeadphonesIcon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">High ROI Potential</h3>
                <p className="text-gray-600 text-sm">
                  Due to strategic locations and government backing, DDJAY plots typically appreciate 
                  40-60% within 2-3 years
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment vs End-User */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">DDJAY for Investors vs End-Users</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* For Investors */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">For Investors</h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Capital Appreciation:</strong> Expect 40-60% returns in 2-3 years
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Low Entry Cost:</strong> Plots starting from ₹15-20 lakh
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Easy Exit:</strong> High demand makes resale quick and profitable
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Rental Option:</strong> Can build and rent for passive income
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Portfolio Diversification:</strong> Add real estate to investment mix
                    </span>
                  </li>
                </ul>
              </div>

              {/* For End-Users */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">For End-Users</h3>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Affordable Ownership:</strong> Own land at government-backed prices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Build Your Dream Home:</strong> Design and construct as per your needs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Gated Communities:</strong> Live in planned colonies with amenities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Better than Rent:</strong> EMI similar to rent, but you own the asset
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Family Security:</strong> Permanent asset for your family's future
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="hover:no-underline">
                  What is the difference between DDJAY and regular plots?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  DDJAY plots are government-approved affordable housing projects with regulated pricing, 
                  mandatory amenities, and clear legal documentation. Regular plots may not have these 
                  government-backed benefits and can be more expensive.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="hover:no-underline">
                  Can I get a bank loan for DDJAY plots?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, all major banks provide loans for DDJAY approved plots. You can typically get 
                  80-85% financing with competitive interest rates. The approval process is faster due 
                  to government backing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="hover:no-underline">
                  Who can buy DDJAY plots?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Anyone can buy DDJAY plots - there are no income restrictions. While the scheme was 
                  designed for EWS/LIG, plots are open to all categories of buyers including investors.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="hover:no-underline">
                  What approvals should a DDJAY project have?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A genuine DDJAY project must have: DTCP/HUDA approval, RERA registration, clear land 
                  title, environmental clearance (if required), and layout plan approval from local authorities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="hover:no-underline">
                  Can I resell my DDJAY plot?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, you can resell your DDJAY plot anytime after purchase. There are no lock-in periods 
                  or resale restrictions. DDJAY plots have high demand and appreciate well, making resale easy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="hover:no-underline">
                  What amenities are mandatory in DDJAY projects?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Mandatory amenities include: wide internal roads (minimum 30ft), street lighting, 
                  underground electricity, water supply connections, drainage system, parks/green spaces, 
                  community hall, and boundary walls.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="hover:no-underline">
                  How long does registry take for DDJAY plots?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Registry process typically takes 30-60 days after full payment. The developer handles 
                  all paperwork. You'll receive registered sale deed in your name with clear title.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="hover:no-underline">
                  Is DDJAY a good investment for NRIs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, NRIs can invest in DDJAY plots. The government-backed nature, clear documentation, 
                  and high ROI make it attractive for NRIs looking to invest in Indian real estate. 
                  Property management services are also available.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore DDJAY Projects?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Browse verified DDJAY projects or talk to our experts for personalized guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/live-projects')}
                size="lg"
                variant="secondary"
                className="gap-2"
              >
                View Live Projects
              </Button>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="gap-2 bg-white text-blue-600 hover:bg-gray-100"
              >
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}