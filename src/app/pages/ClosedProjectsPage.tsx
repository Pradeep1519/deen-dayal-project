import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // ✅ NEW: Import Helmet
import { 
  Search, SlidersHorizontal, X, MapPin, TrendingUp, CheckCircle, 
  MessageSquare, Calendar, Award, IndianRupee, Maximize2, Building2,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Project } from '@/types';
import { getProjectsByStatus } from '@/data/projects';

export function ClosedProjectsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    plotSize: '',
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search') || '';
    setSearch(searchQuery);
    
    setProjects(getProjectsByStatus('closed'));
    setFilteredProjects(getProjectsByStatus('closed'));
  }, [location]);

  useEffect(() => {
    applyFilters();
  }, [search, filters, projects]);

  const applyFilters = () => {
    let filtered = [...projects];

    if (search) {
      filtered = filtered.filter(p =>
        p.project_name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filters.location) {
      filtered = filtered.filter(p =>
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.minPrice || filters.maxPrice) {
      filtered = filtered.filter(p => {
        const priceStr = p.price_range.replace(/[^0-9-]/g, '');
        const prices = priceStr.split('-').map(Number);
        const minProjectPrice = Math.min(...prices);
        const maxProjectPrice = Math.max(...prices);

        const minFilter = filters.minPrice ? Number(filters.minPrice) : 0;
        const maxFilter = filters.maxPrice ? Number(filters.maxPrice) : Infinity;

        return maxProjectPrice >= minFilter && minProjectPrice <= maxFilter;
      });
    }

    if (filters.plotSize) {
      filtered = filtered.filter(p =>
        p.plot_sizes.some(size => size.includes(filters.plotSize))
      );
    }

    setFilteredProjects(filtered);
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      minPrice: '',
      maxPrice: '',
      plotSize: '',
    });
    setSearch('');
    navigate('/closed-projects');
  };

  const handleWhatsApp = (project: Project) => {
    const message = `Hi, I'm interested in similar projects like ${project.project_name}. Please suggest available options.`;
    window.open(`https://wa.me/918799704639?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/project-details?id=${projectId}`);
  };

  const hasActiveFilters = search || filters.location || filters.minPrice || filters.maxPrice || filters.plotSize;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ PAGE-SPECIFIC SEO HEADER */}
      <Helmet>
        <title>Closed DDJAY Projects | Success Stories | Deen Dayal Jan Awas Yojana</title>
        <meta name="description" content="View completed DDJAY projects success stories. See delivered projects with proven track record in Gurugram, Sohna, Pataudi under Deen Dayal Jan Awas Yojana." />
        <meta name="keywords" content="closed ddjay projects, delivered ddjay projects, success stories ddjay, completed projects ddjay, sold out ddjay, ddjay project completion" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Closed DDJAY Projects | Success Stories" />
        <meta property="og:description" content="Completed DDJAY projects with proven success track record." />
        <meta property="og:url" content="https://www.ddjayprojects.org/closed-projects" />
        <meta property="og:type" content="website" />
        
        {/* ✅ IMPORTANT: Page-specific Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Closed DDJAY Projects - Success Stories",
            "description": "List of completed DDJAY projects with delivery history",
            "url": "https://www.ddjayprojects.org/closed-projects",
            "numberOfItems": filteredProjects.length,
            "itemListElement": filteredProjects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "RealEstateListing",
                "name": project.project_name,
                "description": "Successfully delivered DDJAY project",
                "url": `https://www.ddjayprojects.org/project-details?id=${project.id}`,
                "priceRange": project.price_range,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": project.location,
                  "addressRegion": "Haryana"
                },
                "availability": "https://schema.org/SoldOut",
                "deliveryDate": project.delivered_date
              }
            }))
          })}
        </script>
        
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ddjayprojects.org"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Closed Projects",
                "item": "https://www.ddjayprojects.org/closed-projects"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Closed DDJAY Projects</h1>
            <p className="text-xl text-gray-200 mb-6">
              {filteredProjects.length} successfully delivered projects with proven track record
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg p-2 flex gap-2">
              <Input
                type="text"
                placeholder="Search by project name or location..."
                className="border-0 focus-visible:ring-0 text-gray-900"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={() => applyFilters()} className="gap-2 flex-shrink-0 bg-gray-800 hover:bg-gray-900">
                <Search className="w-4 h-4" />
                Search
              </Button>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="gap-2 flex-shrink-0 bg-white text-gray-800"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Panel */}
      {showFilters && (
        <section className="bg-white py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Filter Projects</h3>
                <div className="flex gap-2">
                  <Button onClick={clearFilters} variant="outline" size="sm">
                    Clear All
                  </Button>
                  <Button onClick={() => setShowFilters(false)} variant="ghost" size="sm">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Location</label>
                  <Input
                    placeholder="e.g., Sohna, Gurugram"
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Min Price (₹)</label>
                  <Input
                    placeholder="e.g. 500000"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Max Price (₹)</label>
                  <Input
                    placeholder="e.g. 2000000"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Plot Size</label>
                  <Input
                    placeholder="e.g. 125 sq yd"
                    value={filters.plotSize}
                    onChange={(e) => setFilters({...filters, plotSize: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Why View Closed Projects?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Track Record</h3>
                <p className="text-gray-600 text-sm">See completed projects with proven delivery history</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Market Trends</h3>
                <p className="text-gray-600 text-sm">Understand price appreciation in DDJAY areas</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <CheckCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Builder Credibility</h3>
                <p className="text-gray-600 text-sm">Check builder's past performance and delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <>
              <div className="mb-6 text-gray-600">
                <div className="flex justify-between items-center">
                  <div>
                    Showing {filteredProjects.length} successfully delivered {filteredProjects.length === 1 ? 'project' : 'projects'}
                    {hasActiveFilters && (
                      <Button onClick={clearFilters} variant="link" className="ml-4">
                        Clear filters
                      </Button>
                    )}
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    {filteredProjects.length} Success Stories
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <div 
                    key={project.id} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                    itemScope
                    itemType="https://schema.org/RealEstateListing"
                  >
                    {/* Project Image */}
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={`${project.project_name} - Completed Project`}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = '';
                        }}
                        itemProp="image"
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute top-3 right-3 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        SUCCESS STORY
                      </div>
                      
                      {/* Delivery Date */}
                      {project.delivered_date && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-green-600 to-green-800 text-white text-center py-2 px-4 text-sm font-bold">
                          ✅ Delivered: {project.delivered_date}
                        </div>
                      )}
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-gray-100 text-gray-800 border-gray-300">
                          COMPLETED
                        </Badge>
                        {project.rera_number && project.rera_number !== 'XXXXXXXXXXXX' && (
                          <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                            RERA: {project.rera_number}
                          </Badge>
                        )}
                      </div>
                      
                      <h3 
                        className="text-xl font-bold text-gray-900 mb-2"
                        itemProp="name"
                      >
                        {project.project_name}
                      </h3>
                      
                      <div className="flex items-start gap-2 text-gray-600 mb-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                        <span className="text-sm line-clamp-2" itemProp="addressLocality">{project.location}</span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <IndianRupee className="w-4 h-4 text-green-600" />
                          <span className="font-bold text-lg text-gray-900" itemProp="priceRange">{project.price_range}</span>
                          <span className="text-xs text-green-600 font-bold">(Appreciated)</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Maximize2 className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-600" itemProp="floorSize">{project.plot_sizes.join(', ')}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-600 text-sm line-clamp-1">{project.approval.split(',')[0]}</span>
                        </div>
                        
                        {project.delivered_date && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-green-600" />
                            <span className="text-gray-600 text-sm">Delivered: {project.delivered_date}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Highlights Preview */}
                      {project.highlights && project.highlights.slice(0, 2).map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2 mb-1">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-xs text-gray-700 font-medium">{highlight}</span>
                        </div>
                      ))}
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-4">
                        <Button
                          onClick={() => handleProjectClick(project.id)}
                          className="flex-1"
                          itemProp="url"
                        >
                          View Success Story
                        </Button>
                        
                        <Button
                          onClick={() => handleWhatsApp(project)}
                          variant="outline"
                          className="flex-shrink-0"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2">No Closed Projects Found</h3>
              <p className="text-gray-600 mb-6">
                All current DDJAY projects are active. Check Live Projects for available options.
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => navigate('/live-projects')} variant="outline">
                  View Live Projects
                </Button>
                <Button onClick={clearFilters} variant="default">
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Looking for Available Projects?</h2>
            <p className="text-gray-300 mb-6">
              View our live and upcoming DDJAY projects with booking open
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/live-projects')} 
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                View Live Projects
              </Button>
              <Button 
                onClick={() => navigate('/upcoming-projects')} 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Upcoming Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Key Insights from Closed Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-3">📈 Average Appreciation</h3>
                <p className="text-gray-600">
                  Closed DDJAY projects have shown an average appreciation of <strong>25-40%</strong> within 2-3 years of delivery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-3">🏗️ Builder Credibility</h3>
                <p className="text-gray-600">
                  Completed projects demonstrate builder's ability to deliver on time with quality infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}