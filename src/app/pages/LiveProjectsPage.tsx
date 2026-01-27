import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, SlidersHorizontal, X, MapPin, Video, FileText, Download, 
  Calendar, CheckCircle, Phone, MessageSquare, User, ExternalLink,
  IndianRupee, Maximize2, Building2, ChevronRight
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Project } from '@/types';
import { getProjectsByStatus } from '@/data/projects';

export function LiveProjectsPage() {
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
    
    setProjects(getProjectsByStatus('live'));
    setFilteredProjects(getProjectsByStatus('live'));
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
    navigate('/live-projects');
  };

  const handleWhatsApp = (project: Project) => {
    const message = `Hi, I'm interested in ${project.project_name} at ${project.location}. Please share more details.`;
    window.open(`https://wa.me/918799704639?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/project-details?id=${projectId}`);
  };

  const hasActiveFilters = search || filters.location || filters.minPrice || filters.maxPrice || filters.plotSize;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Live DDJAY Projects</h1>
            <p className="text-xl text-green-100 mb-6">
              {filteredProjects.length} active projects accepting bookings now
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
              <Button onClick={() => applyFilters()} className="gap-2 flex-shrink-0">
                <Search className="w-4 h-4" />
                Search
              </Button>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="gap-2 flex-shrink-0 bg-white"
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

      {/* Projects Section - CARD VIEW */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <>
              <div className="mb-6 text-gray-600">
                Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                {hasActiveFilters && (
                  <Button onClick={clearFilters} variant="link" className="ml-4">
                    Clear filters
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => {
                  const isGreenValley = project.id === 'green-valley-phase-2';

                  return (
                    <div 
                      key={project.id} 
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Project Image */}
                      <div className="h-48 relative overflow-hidden">
                        <img
                          src={project.images[0]}
                          alt={project.project_name}
                          className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = '';
                          }}
                        />
                        
                        {/* Status Badge */}
                        <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          BOOKING OPEN
                        </div>
                        
                        {/* Special Alert for Green Valley */}
                        {isGreenValley && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-500 text-white text-center py-2 px-4 text-sm font-bold">
                            🚨 Last Date: 15th Feb 2026
                          </div>
                        )}
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-green-100 text-green-800 border-green-300">
                            {isGreenValley ? 'DDJAY FLOORS' : 'RESIDENTIAL'}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
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
                        
                        {/* Highlights Preview */}
                        {isGreenValley && project.highlights.slice(0, 2).map((highlight, index) => (
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
                          >
                            View Details
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
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No Projects Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {filteredProjects.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-gray-600 mb-6">
                Submit your requirement and our experts will help you find the perfect DDJAY project
              </p>
              <Button 
                onClick={() => navigate('/submit-requirement')} 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Submit Your Requirement
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}