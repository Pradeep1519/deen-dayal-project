'use client';

import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { 
  MapPin, Calendar, IndianRupee, CheckCircle, 
  Video, FileText, Download, Phone, MessageSquare,
  Home, Building, Car, Leaf, Shield, Droplets,
  Palette, Dumbbell, ExternalLink, ArrowLeft,
  TrendingUp, ChevronLeft, ChevronRight
} from 'lucide-react';
import { getAllProjects } from '@/data/projects';

export function ProjectDetailsPage() {
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (project && project.images && project.images.length > 1) {
        setSelectedImage((prev) => (prev + 1) % project.images.length);
      }
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextImage = () => {
    if (project && project.images && project.images.length > 1) {
      setSelectedImage((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project && project.images && project.images.length > 1) {
      setSelectedImage((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    if (project && project.images && project.images.length > 1) {
      startAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [project]);

  const handleImageSelect = (index: number) => {
    setSelectedImage(index);
    stopAutoPlay();
    setTimeout(() => {
      if (project && project.images && project.images.length > 1) {
        startAutoPlay();
      }
    }, 100);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (projectId) {
      const foundProject = getAllProjects().find(p => p.id === projectId);
      setProject(foundProject || null);
    } else {
      const storedId = localStorage.getItem('currentProjectId');
      if (storedId) {
        const foundProject = getAllProjects().find(p => p.id === storedId);
        setProject(foundProject || null);
      } else {
        setProject(null);
      }
    }
    
    setLoading(false);
  }, []);

  const getBackPage = () => {
    if (!project) return '/';
    if (project.status === 'live') return '/live-projects';
    if (project.status === 'upcoming') return '/upcoming-projects';
    return '/closed-projects';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The requested project could not be found.</p>
          <div className="space-y-4">
            <Button onClick={() => navigate('/')} className="mr-4">
              Go Back Home
            </Button>
            <Button onClick={() => navigate('/live-projects')} variant="outline">
              View Live Projects
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${project.project_name} at ${project.location}. Please share more details.`;
    window.open(`https://wa.me/918799704639?text=${encodeURIComponent(message)}`, '_blank');
  };

  const documentIcons = {
    rera_certificate: <FileText className="w-5 h-5 text-blue-600" />,
    dtcp_license: <FileText className="w-5 h-5 text-green-600" />,
    sohna_master_plan: <MapPin className="w-5 h-5 text-red-600" />,
    layout_plan: <Building className="w-5 h-5 text-purple-600" />,
    floor_plan_2bhk: <Home className="w-5 h-5 text-orange-600" />,
    floor_plan_3bhk: <Home className="w-5 h-5 text-yellow-600" />,
    price_list: <IndianRupee className="w-5 h-5 text-green-600" />,
    brochure: <FileText className="w-5 h-5 text-pink-600" />,
  };

  const documentNames = {
    rera_certificate: 'RERA Certificate',
    dtcp_license: 'DTCP/TCP License',
    sohna_master_plan: 'Sohna Master Plan 2031',
    layout_plan: 'Layout Plan',
    floor_plan_2bhk: '2BHK Floor Plan',
    floor_plan_3bhk: 'Combined Unit Plan',
    price_list: 'Price List',
    brochure: 'Sohna Development Plan sector 5,6,7,8,9,10',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button & Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
        <div className="container mx-auto px-4">
          <Button
            onClick={() => navigate(getBackPage())}
            variant="ghost"
            className="mb-4 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {project.status === 'live' ? 'Live Projects' :
                   project.status === 'upcoming' ? 'Upcoming Projects' :
                   'Success Stories'}
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  project.status === 'live' ? 'bg-green-500' :
                  project.status === 'upcoming' ? 'bg-blue-500' :
                  'bg-gray-500'
                }`}>
                  {project.status === 'live' ? 'BOOKING OPEN' :
                   project.status === 'upcoming' ? 'COMING SOON' :
                   'SOLD OUT'}
                </span>
                {project.rera_number && (
                  <span className="px-3 py-1 bg-yellow-500 rounded-full text-xs font-bold">
                    RERA: {project.rera_number}
                  </span>
                )}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery with Auto Play */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="relative h-64 md:h-96">
                {/* Main Image */}
                {project.images && project.images.length > 0 ? (
                  <img
                    src={project.images[selectedImage]}
                    alt={`${project.project_name} - Image ${selectedImage + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}
                
                {/* Navigation Arrows */}
                {project.images && project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
                
                {/* Video Button */}
                {project.video_url && (
                  <button
                    onClick={() => window.open(project.video_url, '_blank')}
                    className="absolute top-4 left-4 bg-black/80 hover:bg-black text-white p-3 rounded-full shadow-lg"
                  >
                    <Video className="w-6 h-6" />
                  </button>
                )}
                
                {/* Image Counter */}
                {project.images && project.images.length > 1 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedImage + 1} / {project.images.length}
                    </span>
                  </div>
                )}
                
                {/* Progress Dots */}
                {project.images && project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {project.images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => handleImageSelect(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          selectedImage === index 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Thumbnails */}
              {project.images && project.images.length > 1 && (
                <div className="flex gap-2 p-4 overflow-x-auto">
                  {project.images.map((img: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleImageSelect(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index 
                          ? 'border-blue-600 ring-2 ring-blue-300' 
                          : 'border-gray-200 hover:border-blue-400'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumb ${index + 1}`} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Project Description</h2>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Amenities & Facilities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Car className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">Parking</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Green Park</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="text-sm font-medium">24/7 Security</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <Palette className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">Club House</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                    <Droplets className="w-6 h-6 text-yellow-600" />
                  </div>
                  <span className="text-sm font-medium">Water Supply</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                    <Dumbbell className="w-6 h-6 text-pink-600" />
                  </div>
                  <span className="text-sm font-medium">Open Gym</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-teal-600" />
                  </div>
                  <span className="text-sm font-medium">Jogging Track</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                    <Building className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span className="text-sm font-medium">Community Hall</span>
                </div>
              </div>
            </div>

            {/* Location Map */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="rounded-lg overflow-hidden border shadow-sm mb-4">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(project.location)}&output=embed&zoom=14`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              {project.map_link && (
                <a
                  href={project.map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Google Maps
                </a>
              )}
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div>
            <div className="sticky top-6 space-y-6">
              {/* Quick Info Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Quick Information</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">Plot Sizes Available</div>
                    <div className="font-bold text-lg">{project.plot_sizes?.join(', ')}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500">Approval Status</div>
                    <div className="font-bold">{project.approval?.split(',')[0]}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500">Price Range</div>
                    <div className="font-bold text-2xl text-green-600">{project.price_range}</div>
                  </div>
                  
                  {project.expected_launch && (
                    <div>
                      <div className="text-sm text-gray-500">Expected Launch</div>
                      <div className="font-bold flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {project.expected_launch}
                      </div>
                    </div>
                  )}
                  
                  {project.delivered_date && (
                    <div>
                      <div className="text-sm text-gray-500">Delivered On</div>
                      <div className="font-bold flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {project.delivered_date}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Take Action Now</h3>
                <div className="space-y-3">
                  <Button
                    onClick={() => navigate('/submit-requirement')}
                    className="w-full py-4 text-lg bg-white text-blue-700 hover:bg-gray-100"
                  >
                    📋 Enquire Now
                  </Button>
                  
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full py-4 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    WhatsApp Inquiry
                  </Button>
                  
                  <Button
                    onClick={() => window.open(`tel:+918799704639`)}
                    className="w-full py-4 border border-white/30 text-white hover:bg-white/10"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>

              {/* DOCUMENTS SECTION */}
              {project.documents && Object.keys(project.documents).length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Project Documents</h3>
                  <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                    
                    {/* Document 1: RERA Certificate */}
                    {project.documents.rera_certificate && project.documents.rera_certificate !== '#' && (
                      <a
                        href={project.documents.rera_certificate}
                        target="_blank"
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50 transition-colors"
                        download
                      >
                        <div className="flex items-center gap-3">
                          {documentIcons.rera_certificate}
                          <span className="font-medium">{documentNames.rera_certificate}</span>
                        </div>
                        <Download className="w-4 h-4 text-gray-400" />
                      </a>
                    )}
                    
                    {/* Document 2: DTCP/TCP License */}
                    {project.documents.dtcp_license && project.documents.dtcp_license !== '#' && (
                      <a
                        href={project.documents.dtcp_license}
                        target="_blank"
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50 transition-colors"
                        download
                      >
                        <div className="flex items-center gap-3">
                          {documentIcons.dtcp_license}
                          <span className="font-medium">{documentNames.dtcp_license}</span>
                        </div>
                        <Download className="w-4 h-4 text-gray-400" />
                      </a>
                    )}
                    
                    {/* Document 3: Sohna Master Plan */}
                    {project.documents.sohna_master_plan && project.documents.sohna_master_plan !== '#' && (
                      <a
                        href={project.documents.sohna_master_plan}
                        target="_blank"
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50 transition-colors"
                        download
                      >
                        <div className="flex items-center gap-3">
                          {documentIcons.sohna_master_plan}
                          <span className="font-medium">{documentNames.sohna_master_plan}</span>
                        </div>
                        <Download className="w-4 h-4 text-gray-400" />
                      </a>
                    )}
                    
                    {/* Document 4: Layout Plan */}
                    {project.documents.layout_plan && project.documents.layout_plan !== '#' && (
                      <a
                        href={project.documents.layout_plan}
                        target="_blank"
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50 transition-colors"
                        download
                      >
                        <div className="flex items-center gap-3">
                          {documentIcons.layout_plan}
                          <span className="font-medium">{documentNames.layout_plan}</span>
                        </div>
                        <Download className="w-4 h-4 text-gray-400" />
                      </a>
                    )}
                    
                    {/* Document 5: 2BHK Floor Plan */}
                    {project.documents.floor_plan_2bhk && project.documents.floor_plan_2bhk !== '#' && (
                      <a
                        href={project.documents.floor_plan_2bhk}
                        target="_blank"
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50 transition-colors"
                        download
                      >
                        <div className="flex items-center gap-3">
                          {documentIcons.floor_plan_2bhk}
                          <span className="font-medium">{documentNames.floor_plan_2bhk}</span>
                        </div>
                        <Download className="w-4 h-4 text-gray-400" />
                      </a>
                    )}
                    
                    {/* Document 6: 3BHK Floor Plan */}
                    {project.documents.floor_plan_3bhk && project.documents.floor_plan_3bhk !== '#' && (
                      <a
                        href={project.documents.floor_plan_3bhk}
                        target="_blank"
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50 transition-colors"
                        download
                      >
                        <div className="flex items-center gap-3">
                          {documentIcons.floor_plan_3bhk}
                          <span className="font-medium">{documentNames.floor_plan_3bhk}</span>
                        </div>
                        <Download className="w-4 h-4 text-gray-400" />
                      </a>
                    )}
                    
                    {/* Document 7: Price List */}
                    {project.documents.price_list && project.documents.price_list !== '#' && (
                      <a
                        href={project.documents.price_list}
                        target="_blank"
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50 transition-colors"
                        download
                      >
                        <div className="flex items-center gap-3">
                          {documentIcons.price_list}
                          <span className="font-medium">{documentNames.price_list}</span>
                        </div>
                        <Download className="w-4 h-4 text-gray-400" />
                      </a>
                    )}
                    
                    {/* Document 8: Brochure */}
                    {project.documents.brochure && project.documents.brochure !== '#' && (
                      <a
                        href={project.documents.brochure}
                        target="_blank"
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50 transition-colors"
                        download
                      >
                        <div className="flex items-center gap-3">
                          {documentIcons.brochure}
                          <span className="font-medium">{documentNames.brochure}</span>
                        </div>
                        <Download className="w-4 h-4 text-gray-400" />
                      </a>
                    )}
                    
                  </div>
                </div>
              )}

              {/* Important Notes */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <h4 className="font-bold text-yellow-800 mb-2">Important Notes</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Prices subject to change</li>
                  <li>• All charges extra as applicable</li>
                  <li>• Terms & conditions apply</li>
                  <li>• Booking amount Refundable & Registration amount Refundable 100%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}