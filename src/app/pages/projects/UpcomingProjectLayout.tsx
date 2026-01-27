import { Button } from '@/app/components/ui/button';
import { MapPin, Calendar, CheckCircle, MessageSquare, Phone, ArrowLeft } from 'lucide-react';

export const UpcomingProjectLayout = ({ project, navigate, getBackPage, handleWhatsApp }: any) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* UPCOMING SPECIFIC HEADER */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-6">
        <div className="container mx-auto px-4">
          <Button onClick={() => navigate(getBackPage())} variant="ghost" className="mb-4 text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-blue-500 rounded-full text-xs font-bold">🚧 UPCOMING PROJECT</span>
                <span className="px-3 py-1 bg-yellow-500 rounded-full text-xs font-bold">PRE-LAUNCH</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{project.project_name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{project.location}</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold text-yellow-300">{project.price_range}</div>
              <div className="text-white/80">{project.plot_sizes?.join(', ')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* UPCOMING SPECIFIC CONTENT */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Pre-launch Announcement */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Pre-launch Announcement</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600" />
                <div>
                  <h3 className="font-bold">Expected Launch</h3>
                  <p className="text-lg font-bold text-purple-700">{project.expected_launch}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                  <h3 className="font-bold mb-2 text-green-700">Pre-launch Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Early Bird Discount</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Priority Allotment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pre-registration CTA */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg p-8 mb-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Be the First to Know!</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/submit-requirement')} className="px-8 py-3 text-lg bg-white text-purple-700 hover:bg-gray-100">
                📝 Pre-register Now
              </Button>
              <Button onClick={handleWhatsApp} className="px-8 py-3 text-lg border-2 border-white text-white hover:bg-white/20">
                📱 WhatsApp Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};