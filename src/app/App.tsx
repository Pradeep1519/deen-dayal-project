import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { WhatIsDDJAYPage } from '@/app/pages/WhatIsDDJAYPage';
import { LiveProjectsPage } from '@/app/pages/LiveProjectsPage';
import { UpcomingProjectsPage } from '@/app/pages/UpcomingProjectsPage';
import { ClosedProjectsPage } from '@/app/pages/ClosedProjectsPage';
import { ProjectDetailsPage } from '@/app/pages/ProjectDetailsPage';
import { SubmitRequirementPage } from '@/app/pages/SubmitRequirementPage';
import { AboutPage } from '@/app/pages/AboutPage';
import { TermsConditionsPage } from '@/app/pages/TermsConditionsPage';
import { PrivacyPolicyPage } from '@/app/pages/PrivacyPolicyPage';
import { GovernmentDisclaimerModal } from '@/app/components/GovernmentDisclaimerModal';
import { ContactPage } from '@/app/pages/ContactPage';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';

// ✅ Scroll Restoration Component - YEH ADD KARO
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Har route change pe scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'smooth' bhi use kar sakte ho
    });
  }, [pathname]);

  return null;
}

// ✅ Custom Layout Component
function Layout({ children }: { children: React.ReactNode }) {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  
  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop /> {/* YEH ADD KARO LAYOUT KE ANDAR */}
      {showDisclaimer ? (
        <GovernmentDisclaimerModal onClose={handleCloseDisclaimer} />
      ) : (
        <>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}

// ✅ Updated Page Wrapper Components
function HomePageWrapper() {
  const navigate = useNavigate();
  return <HomePage onNavigate={(page, data) => navigate(`/${page}${data?.id ? `?id=${data.id}` : ''}`)} />;
}

function ContactPageWrapper() {
  const navigate = useNavigate();
  return <ContactPage onNavigate={(page) => navigate(`/${page}`)} />;
}

function SubmitRequirementPageWrapper() {
  const navigate = useNavigate();
  return <SubmitRequirementPage onNavigate={(page) => navigate(`/${page}`)} />;
}

function LiveProjectsPageWrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';
  
  return <LiveProjectsPage onNavigate={(page, data) => navigate(`/${page}${data?.id ? `?id=${data.id}` : ''}`)} searchQuery={searchQuery} />;
}

function UpcomingProjectsPageWrapper() {
  const navigate = useNavigate();
  return <UpcomingProjectsPage onNavigate={(page, data) => navigate(`/${page}${data?.id ? `?id=${data.id}` : ''}`)} />;
}

function ClosedProjectsPageWrapper() {
  const navigate = useNavigate();
  return <ClosedProjectsPage onNavigate={(page, data) => navigate(`/${page}${data?.id ? `?id=${data.id}` : ''}`)} />;
}

function ProjectDetailsPageWrapper() {
  const navigate = useNavigate();
  return <ProjectDetailsPage onNavigate={(page, data) => navigate(`/${page}${data?.id ? `?id=${data.id}` : ''}`)} />;
}

function WhatIsDDJAYPageWrapper() {
  const navigate = useNavigate();
  return <WhatIsDDJAYPage onNavigate={(page) => navigate(`/${page}`)} />;
}

function AboutPageWrapper() {
  const navigate = useNavigate();
  return <AboutPage onNavigate={(page) => navigate(`/${page}`)} />;
}

function TermsConditionsPageWrapper() {
  const navigate = useNavigate();
  return <TermsConditionsPage onNavigate={(page) => navigate(`/${page}`)} />;
}

function PrivacyPolicyPageWrapper() {
  const navigate = useNavigate();
  return <PrivacyPolicyPage onNavigate={(page) => navigate(`/${page}`)} />;
}

// ✅ Main App Component
export default function App() {
  return (
    <>
      <ScrollToTop /> {/* YEH BHI ADD KARO */}
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <Layout>
            <HomePageWrapper />
          </Layout>
        } />
        
        {/* Other Routes with Layout */}
        <Route path="/home" element={
          <Layout>
            <HomePageWrapper />
          </Layout>
        } />
        
        <Route path="/what-is-ddjay" element={
          <Layout>
            <WhatIsDDJAYPageWrapper />
          </Layout>
        } />
        
        <Route path="/live-projects" element={
          <Layout>
            <LiveProjectsPageWrapper />
          </Layout>
        } />
        
        <Route path="/upcoming-projects" element={
          <Layout>
            <UpcomingProjectsPageWrapper />
          </Layout>
        } />
        
        <Route path="/closed-projects" element={
          <Layout>
            <ClosedProjectsPageWrapper />
          </Layout>
        } />
        
        <Route path="/project-details" element={
          <Layout>
            <ProjectDetailsPageWrapper />
          </Layout>
        } />
        
        <Route path="/submit-requirement" element={
          <Layout>
            <SubmitRequirementPageWrapper />
          </Layout>
        } />
        
        <Route path="/about" element={
          <Layout>
            <AboutPageWrapper />
          </Layout>
        } />
        
        <Route path="/contact" element={
          <Layout>
            <ContactPageWrapper />
          </Layout>
        } />
        
        <Route path="/terms-conditions" element={
          <Layout>
            <TermsConditionsPageWrapper />
          </Layout>
        } />
        
        <Route path="/privacy-policy" element={
          <Layout>
            <PrivacyPolicyPageWrapper />
          </Layout>
        } />
      </Routes>
      
      <Toaster position="top-right" />
      <Analytics />
    </>
  );
}