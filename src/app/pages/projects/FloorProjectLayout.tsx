import { Button } from '@/app/components/ui/button';
import { MapPin, CheckCircle, FileText, Download, MessageSquare, Phone, Home, IndianRupee, ExternalLink, ArrowLeft } from 'lucide-react';

export const FloorProjectLayout = ({ project, navigate, getBackPage, handleWhatsApp }: any) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* FLOOR SPECIFIC HEADER */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
        <div className="container mx-auto px-4">
          <Button onClick={() => navigate(getBackPage())} variant="ghost" className="mb-4 text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-green-500 rounded-full text-xs font-bold">🏢 FLOOR PROJECT</span>
                <span className="px-3 py-1 bg-yellow-500 rounded-full text-xs font-bold">RERA: {project.rera_number}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{project.project_name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{project.location}</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold text-green-300">{project.price_range}</div>
              <div className="text-white/80">{project.plot_sizes?.join(', ')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* FLOOR SPECIFIC CONTENT */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Images */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Floor Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.images?.slice(0, 3).map((img: string, index: number) => (
                  <img key={index} src={img} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
                ))}
              </div>
            </div>

            {/* Floor Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Floor Specifications</h2>
              {project.customConfig?.customSections?.map((section: any) => (
                <div key={section.id} className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.content.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Action Buttons */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-center">Floor Booking</h3>
              <div className="space-y-3">
                <Button onClick={() => navigate('/submit-requirement')} className="w-full py-4 text-lg bg-white text-blue-700 hover:bg-gray-100">
                  📋 Book Floor Now
                </Button>
                <Button onClick={handleWhatsApp} className="w-full py-4 bg-green-600 hover:bg-green-700 text-white">
                  <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp for Floor Plan
                </Button>
                <Button onClick={() => window.open(`tel:+918799704639`)} className="w-full py-4 border border-white/30 text-white hover:bg-white/10">
                  <Phone className="w-5 h-5 mr-2" /> Call for Site Visit
                </Button>
              </div>
            </div>

            {/* Documents */}
            {project.documents && Object.keys(project.documents).length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Floor Documents</h3>
                <div className="space-y-3">
                  {Object.entries(project.documents).map(([key, path]: [string, any]) => (
                    <a key={key} href={path} target="_blank" className="flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">{key.replace(/_/g, ' ').toUpperCase()}</span>
                      </div>
                      <Download className="w-4 h-4 text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};