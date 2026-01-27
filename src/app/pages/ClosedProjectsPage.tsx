import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Award, TrendingUp, MapPin, IndianRupee, Maximize2,
  MessageSquare, CheckCircle
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Project } from '@/types';
import { getProjectsByStatus } from '@/data/projects';

export function ClosedProjectsPage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(getProjectsByStatus('closed'));
  }, []);

  const handleWhatsApp = (project: Project) => {
    const message = `Hi, I saw your completed project ${project.project_name}. I'm interested in similar available projects.`;
    window.open(`https://wa.me/918799704639?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/project-details?id=${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
            <p className="text-xl text-purple-100">
              {projects.length} successfully delivered DDJAY projects
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Proven Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">350+</div>
              <p className="text-gray-600">Happy Families</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">50%+</div>
              <p className="text-gray-600">Average ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - CARD VIEW */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {projects.length > 0 ? (
            <>
              <div className="mb-8 text-center max-w-2xl mx-auto">
                <p className="text-gray-600">
                  These projects have been successfully completed and delivered to buyers. 
                  They serve as proof of our commitment to quality and timely delivery.
                </p>
              </div>

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
                      <div className="absolute top-3 right-3 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        SOLD OUT
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-gray-100 text-gray-800 border-gray-300">
                          DELIVERED
                        </Badge>
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          {project.delivered_date}
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
                          <span className="text-xs text-green-600 font-bold">(Appreciated)</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Maximize2 className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-600">{project.plot_sizes.join(', ')}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-purple-600" />
                          <span className="text-sm text-purple-600 font-bold">
                            Price Increased 50%+
                          </span>
                        </div>
                      </div>
                      
                      {/* Highlights Preview */}
                      {project.highlights.slice(0, 2).map((highlight, index) => (
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
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2">No Closed Projects Yet</h3>
              <p className="text-gray-600 mb-6">
                Check out our live projects for current opportunities
              </p>
              <Button onClick={() => navigate('/live-projects')}>
                View Live Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of satisfied investors and homeowners who trusted us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/live-projects')}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                View Live Projects
              </Button>
              <Button
                onClick={() => navigate('/submit-requirement')}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Submit Requirements
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}