'use client';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/app/components/ui/button';
import { 
  ArrowLeft, MapPin, Calendar, IndianRupee, CheckCircle, 
  FileText, Download, Phone, MessageSquare, Home, 
  Building, Car, Leaf, Shield, Droplets, Palette, Dumbbell,
  ExternalLink, FileEdit, X, Mail
} from 'lucide-react';
import { getAllProjects } from '@/data/projects';
import { LeadForm } from '@/app/components/LeadForm';

// ✅ SEPARATE IMAGE SLIDER COMPONENT (PREVENTS FORM RESET)
const ImageSlider = ({ images, projectName }: { images: string[], projectName: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images]);

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Photo Gallery</h2>
          <span className="text-gray-500">
            {currentImageIndex + 1} / {images.length}
          </span>
        </div>
        
        {/* BIG IMAGE SLIDER */}
        <div className="relative rounded-lg overflow-hidden mb-4">
          <div className="aspect-[16/9] relative">
            <img 
              src={images[currentImageIndex]} 
              alt={`${projectName} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  ←
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  →
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* THUMBNAIL PREVIEWS */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative rounded-md overflow-hidden border-2 transition-all ${
                  index === currentImageIndex 
                    ? 'border-blue-500 scale-105' 
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${projectName} - Thumbnail ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
                {index === currentImageIndex && (
                  <div className="absolute inset-0 bg-blue-500/20" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ✅ MAIN COMPONENT
export function ProjectDetailsPage() {
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const showForm = urlParams.get('showForm');
    
    if (projectId) {
      const foundProject = getAllProjects().find(p => p.id === projectId);
      setProject(foundProject || null);
    }
    
    setLoading(false);
  }, []);

  const getBackPage = () => {
    if (!project) return '/';
    if (project.status === 'live') return '/live-projects';
    if (project.status === 'upcoming') return '/upcoming-projects';
    return '/closed-projects';
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${project?.project_name} at ${project?.location}. Price: ${project?.price_range}. Please share more details.`;
    window.open(`https://wa.me/918799704639?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+918799704639';
  };

  const handleEmail = () => {
    const subject = `Enquiry for ${project?.project_name}`;
    const body = `Hello,\n\nI am interested in ${project?.project_name} located at ${project?.location}.\n\nPlease send me complete details, pricing, and availability.\n\nThank you.`;
    window.location.href = `mailto:support@ddjayprojects.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getAmenityIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'building': <Building className="w-6 h-6" />,
      'home': <Home className="w-6 h-6" />,
      'car': <Car className="w-6 h-6" />,
      'zap': <div className="text-2xl">⚡</div>,
      'leaf': <Leaf className="w-6 h-6" />,
      'shield': <Shield className="w-6 h-6" />,
      'droplets': <Droplets className="w-6 h-6" />,
      'palette': <Palette className="w-6 h-6" />,
      'dumbbell': <Dumbbell className="w-6 h-6" />
    };
    return iconMap[iconName] || <CheckCircle className="w-6 h-6" />;
  };

  // ✅ MODAL COMPONENT
  const EnquiryModal = () => {
    if (!showEnquiryModal) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowEnquiryModal(false);
          }
        }}
      >
        <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden relative">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl font-bold">Enquire About This Project</h2>
                  <p className="text-blue-100">{project.project_name} • {project.location}</p>
                </div>
              </div>
              <button
                onClick={() => setShowEnquiryModal(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <LeadForm
              projectId={project.id}
              projectName={project.project_name}
              sourcePage={`project-details-modal-${project.id}`}
              title={`Enquiry for: ${project.project_name}`}
              description={`Fill this form to get complete details, site visit, and pricing for ${project.project_name} in ${project.location}. We'll contact you within 30 minutes.`}
              showBudget={true}
              showRequirement={true}
            />
          </div>
        </div>
      </div>
    );
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
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const projectType = project.customConfig?.projectType || 'plots';
  const status = project.status;

  let headerColor = 'from-green-600 to-green-800';
  let badgeText = '🏡 PLOT PROJECT';
  
  if (status === 'upcoming') {
    headerColor = 'from-purple-600 to-purple-800';
    badgeText = '🚧 UPCOMING PROJECT | PRE-LAUNCH';
  } else if (projectType === 'floors') {
    headerColor = 'from-blue-600 to-blue-800';
    badgeText = '🏢 FLOOR PROJECT';
  } else if (status === 'closed') {
    headerColor = 'from-gray-600 to-gray-800';
    badgeText = '✅ COMPLETED PROJECT';
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO HEADER */}
      <Helmet>
        <title>{`${project.project_name} | DDJAY Project in ${project.location} | ${project.price_range}`}</title>
        <meta name="description" content={`${project.project_name} in ${project.location}. ${project.description?.substring(0, 150) || ''}... Price: ${project.price_range}, Plot sizes: ${project.plot_sizes?.join(', ')}, Status: ${status}`} />
        <meta name="keywords" content={`${project.project_name}, ddjay ${project.location}, plots in ${project.location}, ${project.location} real estate, affordable housing ${project.location}`} />
        
        <meta property="og:title" content={`${project.project_name} | DDJAY Project`} />
        <meta property="og:description" content={`${project.description?.substring(0, 100) || ''}... Price: ${project.price_range}`} />
        <meta property="og:image" content={project.images?.[0]} />
        <meta property="og:url" content={`https://www.ddjayprojects.org/project-details?id=${project.id}`} />
        <meta property="og:type" content="realestate.property" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            "name": project.project_name,
            "description": project.description?.substring(0, 200) || "",
            "url": `https://www.ddjayprojects.org/project-details?id=${project.id}`,
            "image": project.images?.[0],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": project.location,
              "addressRegion": "Haryana",
              "addressCountry": "India"
            },
            "priceRange": project.price_range,
            "numberOfRooms": project.plot_sizes?.length.toString() || "1",
            "floorSize": project.plot_sizes?.join(', ') || "",
            "amenityFeature": project.highlights?.map((h: string) => ({
              "@type": "LocationFeatureSpecification",
              "name": h
            })) || [],
            "offers": {
              "@type": "Offer",
              "availability": status === 'live' ? 'https://schema.org/InStock' : 
                             status === 'upcoming' ? 'https://schema.org/PreOrder' : 
                             'https://schema.org/SoldOut'
            }
          })}
        </script>
      </Helmet>

      {/* HEADER SECTION */}
      <div className={`bg-gradient-to-r ${headerColor} text-white py-6`}>
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => navigate(getBackPage())} 
            variant="ghost" 
            className="mb-4 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
                  {badgeText}
                </span>
                {project.rera_number && project.rera_number !== 'XXXXXXXXXXXX' && (
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
              <div className="text-3xl font-bold text-yellow-300">{project.price_range}</div>
              <div className="text-white/80">{project.plot_sizes?.join(', ')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* ✅ IMAGE SLIDER COMPONENT */}
            <ImageSlider images={project.images || []} projectName={project.project_name} />

            {/* AMENITIES SECTION */}
            {(project.customConfig?.customAmenities || project.highlights) && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    {project.customConfig?.sections?.amenitiesTitle || 'Amenities & Features'}
                  </h2>
                  
                  {/* CUSTOM AMENITIES */}
                  {project.customConfig?.customAmenities && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                      {project.customConfig.customAmenities.map((amenity: any, index: number) => (
                        <div key={index} className="flex flex-col items-center p-4 border rounded-lg text-center hover:bg-gray-50 transition-colors">
                          <div className="text-blue-600 mb-2">
                            {getAmenityIcon(amenity.icon)}
                          </div>
                          <span className="text-sm font-medium">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* HIGHLIGHTS */}
                  {project.highlights && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.highlights.map((highlight: string, index: number) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* DESCRIPTION */}
            {project.description && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {project.customConfig?.sections?.descriptionTitle || 'Project Overview'}
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.description}</p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="space-y-6">
            
            {/* ACTION BUTTONS WITH MODAL TRIGGER */}
            <div className={`bg-gradient-to-br ${headerColor} text-white rounded-xl shadow-lg p-6`}>
              <h3 className="text-xl font-bold mb-4 text-center">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                {/* MAIN BUTTON: FILL ENQUIRY FORM (MODAL TRIGGER) */}
                <Button 
                  onClick={() => setShowEnquiryModal(true)}
                  className="w-full py-4 text-lg bg-white hover:bg-gray-100 font-bold"
                  style={{ 
                    color: headerColor.includes('blue') ? '#1d4ed8' : 
                           headerColor.includes('purple') ? '#7c3aed' : 
                           headerColor.includes('green') ? '#059669' : '#4b5563' 
                  }}
                >
                  <FileEdit className="w-5 h-5 mr-2" />
                  Fill Enquiry Form
                </Button>
                
                {/* WhatsApp Button */}
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Inquiry
                </Button>
                
                {/* Call Button */}
                <Button 
                  onClick={handleCall}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </Button>
                
                {/* Email Button */}
                <Button 
                  onClick={handleEmail}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  <Mail className="w-5 h-5 mr-2" /> Email Inquiry
                </Button>
              </div>
              
              {/* QUICK PROJECT INFO */}
              <div className="mt-6 pt-6 border-t border-white/30">
                <h4 className="font-bold mb-3">Project Summary:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Project:</span>
                    <span className="font-medium">{project.project_name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Location:</span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Price Range:</span>
                    <span className="font-medium text-yellow-300">{project.price_range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Plot Sizes:</span>
                    <span className="font-medium">{project.plot_sizes?.join(', ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Status:</span>
                    <span className="font-medium">
                      {status === 'live' ? '🟢 Booking Open' : 
                       status === 'upcoming' ? '🟣 Coming Soon' : 
                       '⚫ Completed'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK INFO */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <p className="text-sm text-gray-500">Location</p>
                  </div>
                  <p className="font-medium">{project.location}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <IndianRupee className="w-4 h-4 text-gray-500" />
                    <p className="text-sm text-gray-500">Price Range</p>
                  </div>
                  <p className="font-medium text-green-600">{project.price_range}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Home className="w-4 h-4 text-gray-500" />
                    <p className="text-sm text-gray-500">Available Sizes</p>
                  </div>
                  <p className="font-medium">{project.plot_sizes?.join(', ')}</p>
                </div>
                
                {project.approval && (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building className="w-4 h-4 text-gray-500" />
                      <p className="text-sm text-gray-500">Approval</p>
                    </div>
                    <p className="font-medium">{project.approval.split(',')[0]}</p>
                  </div>
                )}
                
                {status === 'upcoming' && project.expected_launch && (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <p className="text-sm text-gray-500">Expected Launch</p>
                    </div>
                    <p className="font-medium text-purple-600">{project.expected_launch}</p>
                  </div>
                )}
                
                {status === 'closed' && project.delivered_date && (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <p className="text-sm text-gray-500">Delivered On</p>
                    </div>
                    <p className="font-medium text-green-600">{project.delivered_date}</p>
                  </div>
                )}
              </div>
            </div>

            {/* DOCUMENTS SECTION */}
            {project.documents && Object.keys(project.documents).length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  {project.customConfig?.sections?.documentsTitle || 'Project Documents'}
                </h3>
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                  {Object.entries(project.documents).map(([key, path]: [string, any]) => (
                    <a
                      key={key}
                      href={path}
                      target="_blank"
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50 transition-colors group"
                      download
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                        <div>
                          <span className="font-medium block">
                            {project.customConfig?.documentNames?.[key] || 
                             key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </span>
                          <span className="text-xs text-gray-500">PDF Document</span>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* LOCATION MAP */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <div className="rounded-lg overflow-hidden border shadow-sm mb-4 h-48">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(project.location)}&output=embed&zoom=14`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title={`${project.project_name} Location Map`}
                />
              </div>
              {project.map_link && (
                <a
                  href={project.map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Google Maps
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL COMPONENT */}
      <EnquiryModal />

      {/* FLOATING WHATSAPP BUTTON */}
      <div 
        onClick={handleWhatsApp}
        className="fixed bottom-4 left-4 z-40 bg-green-500 text-white p-3 rounded-full shadow-2xl cursor-pointer hover:bg-green-600 transition-all duration-300 hover:scale-110"
      >
        <MessageSquare className="w-6 h-6" />
      </div>

      {/* FLOATING ENQUIRY BUTTON FOR MOBILE */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <Button
          onClick={() => setShowEnquiryModal(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full p-4 shadow-2xl hover:from-blue-700 hover:to-blue-800"
          size="lg"
        >
          <FileEdit className="w-6 h-6" />
          <span className="ml-2 font-bold">Enquire</span>
        </Button>
      </div>
    </div>
  );
}