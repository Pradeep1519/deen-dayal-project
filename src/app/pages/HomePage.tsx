import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // ✅ NEW: Import Helmet
import { Search, MapPin, TrendingUp, BadgeCheck, CheckCircle, ArrowRight, Shield, Users, Clock, Award, AlertCircle, Building2, IndianRupee, Maximize2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { LeadForm } from '@/app/components/LeadForm';
import { getProjectsByStatus, getProjectsStats } from '../../data/projects';

export function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showLeadForm, setShowLeadForm] = useState(false);

  const liveProjects = getProjectsByStatus('live').slice(0, 3);
  const upcomingProjects = getProjectsByStatus('upcoming').slice(0, 3);
  const closedProjects = getProjectsByStatus('closed').slice(0, 3);
  const stats = getProjectsStats();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/live-projects?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/project-details?id=${projectId}`);
  };

  return (
    <div className="min-h-screen">
      {/* ✅ SEO HEADER - Ye sabse pehle add karo */}
      <Helmet>
        <title>DDJAY Projects | Deen Dayal Jan Awas Yojana | Haryana Affordable Housing</title>
        <meta name="description" content="Verified DDJAY projects under Deen Dayal Jan Awas Yojana. Book plots in Gurugram, Sohna, Pataudi, Faridabad. Government approved affordable housing scheme." />
        <meta name="keywords" content="DDJAY, Deen Dayal Jan Awas Yojana, ddjay projects, haryana plots, affordable housing, gurugram plots, sohna ddjay, pataudi plots, faridabad plots, real estate" />
        
        {/* Open Graph tags for Facebook/WhatsApp sharing */}
        <meta property="og:title" content="DDJAY Projects | Deen Dayal Jan Awas Yojana" />
        <meta property="og:description" content="Verified affordable housing projects under DDJAY scheme. Book your plot now!" />
        <meta property="og:image" content="https://www.ddjayprojects.org/assets/logo/ddlogo.png" />
        <meta property="og:url" content="https://www.ddjayprojects.org" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DDJAY Projects | Deen Dayal Jan Awas Yojana" />
        <meta name="twitter:description" content="Book affordable plots in Haryana under DDJAY scheme" />
        
        {/* ✅ IMPORTANT: JSON-LD Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "DDJAY Portal",
            "description": "Verified DDJAY Projects under Deen Dayal Jan Awas Yojana - Government approved affordable housing scheme in Haryana",
            "url": "https://www.ddjayprojects.org",
            "telephone": "+91-8799704639",
            "email": "support@ddjayprojects.org",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.4595",
              "longitude": "77.0266"
            },
            "openingHours": "Mo-Sa 09:00-19:00",
            "priceRange": "₹10L - ₹50L",
            "areaServed": ["Gurugram", "Sohna", "Pataudi", "Faridabad", "Manesar"]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-gray-100 text-gray-900 py-16 md:py-24 overflow-hidden">
        
        {/* Deen Dayal Photo - HERO SECTION BACKGROUND */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto">
            <img
              src="./assets/logo/deen-dayal-logo.jpg"
              alt="Deen Dayal Jan Awas Yojana"
              className="w-full h-auto max-h-96 object-contain opacity-20"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-10">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                DDJAY PORTAL
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-8">
                All Verified Projects Under Deen Dayal Jan Awas Yojana
              </p>
              <div className="h-1 w-32 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-white rounded-xl p-2 flex gap-2 max-w-2xl mx-auto shadow-lg mb-12 border border-gray-300">
              <Input
                type="text"
                placeholder="Search by location (e.g., Sohna, Gurugram, Pataudi)..."
                className="border-0 focus-visible:ring-0 text-gray-900 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button onClick={handleSearch} className="gap-2 flex-shrink-0 bg-blue-600 hover:bg-blue-700 px-6">
                <Search className="w-5 h-5" />
                Search
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{stats.live}+</div>
                <div className="text-gray-700 font-medium">Live Projects</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{stats.upcoming}+</div>
                <div className="text-gray-700 font-medium">Upcoming</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{stats.closed}+</div>
                <div className="text-gray-700 font-medium">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Verification Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">100% Verified Projects</h2>
            <p className="text-gray-600 text-lg">
              Every project listed undergoes strict verification process
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <BadgeCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">TCP Approved</h3>
              <p className="text-sm text-gray-500">Govt. approved layouts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">RERA Registered</h3>
              <p className="text-sm text-gray-500">Legal & transparent</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <CheckCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Title Clear</h3>
              <p className="text-sm text-gray-500">Clean ownership</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Bank Loan</h3>
              <p className="text-sm text-gray-500">Easily available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Live Projects - Booking Open</h2>
              <p className="text-gray-600">Active DDJAY projects accepting bookings now</p>
            </div>
            <Button
              onClick={() => navigate('/live-projects')}
              variant="outline"
              className="gap-2 hidden md:flex"
            >
              View All Live ({stats.live})
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveProjects.map(project => {
              const isGreenValley = project.id === 'green-valley-phase-2';
              
              return (
                <div 
                  key={project.id} 
                  className={`bg-white rounded-xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                    isGreenValley ? 'border-green-300 ring-2 ring-green-200' : 'border-gray-200'
                  }`}
                >
                  <div 
                    className="h-48 relative overflow-hidden cursor-pointer" 
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <img
                      src={project.images[0]}
                      alt={project.project_name}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === 'live' 
                        ? 'bg-green-600 text-white animate-pulse' 
                        : project.status === 'upcoming'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-600 text-white'
                    }`}>
                      {project.status === 'live' ? 'BOOKING OPEN' : 
                       project.status === 'upcoming' ? 'COMING SOON' : 'SOLD OUT'}
                    </div>
                    
                    {isGreenValley && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-500 text-white text-center py-2 px-4 text-sm font-bold animate-pulse">
                        🚨 Last Date: 15th Feb 2026
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <h3 
                      className="font-bold text-xl mb-2 text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-1"
                      onClick={() => handleProjectClick(project.id)}
                    >
                      {project.project_name}
                    </h3>
                    
                    <div className="flex items-start gap-2 text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                      <span className="text-sm line-clamp-2">{project.location}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <IndianRupee className="w-4 h-4 text-green-600" />
                        <span className="font-bold text-lg text-gray-900">{project.price_range}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-600">{project.plot_sizes.join(', ')}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-600 text-sm line-clamp-1">{project.approval.split(',')[0]}</span>
                      </div>
                    </div>
                    
                    {isGreenValley && project.highlights.slice(0, 2).map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2 mb-1">
                        <AlertCircle className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-xs text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                    
                    <div className="mt-4">
                      <Button
                        onClick={() => handleProjectClick(project.id)}
                        className="w-full font-semibold py-3 bg-blue-600 hover:bg-blue-700"
                        size="lg"
                      >
                        View Complete Details
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button onClick={() => navigate('/live-projects')} className="gap-2">
              View All Live Projects ({stats.live})
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Upcoming Projects</h2>
              <p className="text-gray-600">Pre-launch offers & early bird discounts available</p>
            </div>
            <Button
              onClick={() => navigate('/upcoming-projects')}
              variant="outline"
              className="gap-2 hidden md:flex"
            >
              View All Upcoming ({stats.upcoming})
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map(project => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div 
                  className="h-48 relative overflow-hidden cursor-pointer" 
                  onClick={() => handleProjectClick(project.id)}
                >
                  <img
                    src={project.images[0]}
                    alt={project.project_name}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    COMING SOON
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 
                    className="font-bold text-xl mb-2 text-gray-900 hover:text-blue-600 cursor-pointer"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    {project.project_name}
                  </h3>
                  
                  <div className="flex items-start gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-green-600" />
                      <span className="font-bold text-lg text-gray-900">{project.price_range}</span>
                    </div>
                    
                    <div className="bg-yellow-500 text-white text-center py-1.5 px-3 rounded-lg animate-pulse font-bold text-sm">
                      🚀 Pre-Launch Offer Open Soon
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-600">{project.plot_sizes.join(', ')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button
                      onClick={() => handleProjectClick(project.id)}
                      className="w-full font-semibold py-3 bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button onClick={() => navigate('/upcoming-projects')} className="gap-2">
              View All Upcoming Projects ({stats.upcoming})
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
              <p className="text-gray-600">Delivered projects with proven track record</p>
            </div>
            <Button
              onClick={() => navigate('/closed-projects')}
              variant="outline"
              className="gap-2 hidden md:flex"
            >
              View All Success Stories ({stats.closed})
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {closedProjects.map(project => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div 
                  className="h-48 relative overflow-hidden cursor-pointer" 
                  onClick={() => handleProjectClick(project.id)}
                >
                  <img
                    src={project.images[0]}
                    alt={project.project_name}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    SOLD OUT
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 
                    className="font-bold text-xl mb-2 text-gray-900 hover:text-blue-600 cursor-pointer"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    {project.project_name}
                  </h3>
                  
                  <div className="flex items-start gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="font-bold text-lg text-gray-900">{project.price_range}</span>
                      <span className="text-xs text-green-600 font-bold">(Appreciated)</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-600">{project.plot_sizes.join(', ')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button
                      onClick={() => handleProjectClick(project.id)}
                      className="w-full font-semibold py-3 bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Invest in Your Dream Plot?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get expert guidance, site visit, and complete documentation support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => setShowLeadForm(true)}
            >
              Get Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('tel:+918799704639')}
            >
              Call Now: +91 87997 04639
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Direct Builder Prices</h3>
              <p className="text-gray-600">No brokerage or hidden charges. Get plots at builder prices with complete transparency.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">End-to-End Support</h3>
              <p className="text-gray-600">From site visit to registration, we provide complete support throughout your buying journey.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Best Return Potential</h3>
              <p className="text-gray-600">Carefully curated projects in high-growth areas with excellent appreciation potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Button 
              variant="outline" 
              className="h-auto py-6 flex flex-col gap-3"
              onClick={() => navigate('/live-projects')}
            >
              <MapPin className="w-8 h-8" />
              <span className="font-semibold">Browse All Projects</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-6 flex flex-col gap-3"
              onClick={() => navigate('/upcoming-projects')}
            >
              <Clock className="w-8 h-8" />
              <span className="font-semibold">Upcoming Projects</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-6 flex flex-col gap-3"
              onClick={() => setShowLeadForm(true)}
            >
              <Users className="w-8 h-8" />
              <span className="font-semibold">Book Site Visit</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-6 flex flex-col gap-3"
              onClick={() => window.open('https://maps.google.com', '_blank')}
            >
              <MapPin className="w-8 h-8" />
              <span className="font-semibold">View on Map</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <LeadForm 
              sourcePage="home-page"
              title="Get Free Consultation"
              description="Our expert will call you within 30 minutes"
              showBudget
              showRequirement
            />
          </div>
        </div>
      )}
    </div>
  );
}