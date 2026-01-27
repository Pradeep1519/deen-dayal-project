import { Button } from '@/app/components/ui/button';
import { MapPin, CheckCircle, FileText, MessageSquare, Phone, ArrowLeft } from 'lucide-react';

export const PlotProjectLayout = ({ project, navigate, getBackPage, handleWhatsApp }: any) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* PLOT SPECIFIC HEADER */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-6">
        <div className="container mx-auto px-4">
          <Button onClick={() => navigate(getBackPage())} variant="ghost" className="mb-4 text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-green-500 rounded-full text-xs font-bold">🏡 PLOT PROJECT</span>
                <span className="px-3 py-1 bg-yellow-500 rounded-full text-xs font-bold">RERA: {project.rera_number}</span>
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

      {/* PLOT SPECIFIC CONTENT */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Highlights */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Plot Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights?.map((highlight: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-center">Plot Booking</h3>
            <div className="space-y-3">
              <Button onClick={() => navigate('/submit-requirement')} className="w-full py-4 text-lg bg-white text-green-700 hover:bg-gray-100">
                📋 Book Plot Now
              </Button>
              <Button onClick={handleWhatsApp} className="w-full py-4 bg-green-600 hover:bg-green-700 text-white">
                <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp for Plot Details
              </Button>
              <Button onClick={() => window.open(`tel:+918799704639`)} className="w-full py-4 border border-white/30 text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" /> Call for Site Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};