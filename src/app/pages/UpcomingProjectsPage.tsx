import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Clock, MapPin, IndianRupee, Maximize2, Building2,
  MessageSquare, CheckCircle
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Project } from '@/types';
import { getProjectsByStatus } from '@/data/projects';

export function UpcomingProjectsPage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(getProjectsByStatus('upcoming'));
  }, []);

  const handleWhatsApp = (project: Project) => {
    const message = `Hi, I'm interested in pre-registering for ${project.project_name} (Upcoming Project). Please share details.`;
    window.open(`https://wa.me/918799704639?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/project-details?id=${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming DDJAY Projects</h1>
            <p className="text-xl text-blue-100">
              {projects.length} projects launching soon with pre-launch offers
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Pre-booking */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Why Pre-Register?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold mb-2">Early Bird Discounts</h3>
              <p className="text-sm text-gray-600">Save up to 15% with pre-launch offers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">First Choice</h3>
              <p className="text-sm text-gray-600">Pick the best plots before public launch</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-bold mb-2">Maximum Appreciation</h3>
              <p className="text-sm text-gray-600">Buy at launch price for best ROI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔔</div>
              <h3 className="font-bold mb-2">Priority Notification</h3>
              <p className="text-sm text-gray-600">Get notified first when bookings open</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - CARD VIEW */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
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
                    />
                    <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      COMING SOON
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                        UPCOMING
                      </Badge>
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                        PRE-LAUNCH
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
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
                      
                      {/* ✅ ADDED: BLINKING PRE-LAUNCH OFFER LINE */}
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-1.5 px-3 rounded-lg animate-pulse font-bold text-sm">
                        🚀 Pre-Launch Offer 
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-600">{project.plot_sizes.join(', ')}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>Launch: {project.expected_launch}</span>
                      </div>
                    </div>
                    
                    {/* Highlights Preview */}
                    {project.highlights && project.highlights.slice(0, 2).map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2 mb-1">
                        <CheckCircle className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
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
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">No Upcoming Projects Yet</h3>
              <p className="text-gray-600 mb-6">
                Check back soon for new project launches, or browse our live projects
              </p>
              <Button onClick={() => navigate('/live-projects')}>
                View Live Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {projects.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Don't Miss Out on Pre-Launch Offers</h2>
              <p className="text-xl text-blue-100 mb-8">
                Register your interest now and be the first to know when bookings open
              </p>
              <Button
                onClick={() => navigate('/submit-requirement')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Register Interest Now
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}