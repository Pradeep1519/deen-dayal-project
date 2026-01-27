'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, Shield, X, CheckCircle, Info, Smartphone } from 'lucide-react';
import { Button } from './ui/button';

interface GovernmentDisclaimerModalProps {
  onClose: () => void;
}

export function GovernmentDisclaimerModal({ onClose }: GovernmentDisclaimerModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-auto max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header with Close Button */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-3 sm:p-4 rounded-t-xl sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  🔒 सुरक्षा सूचना
                  {isMobile && <Smartphone className="w-4 h-4" />}
                </h1>
                <p className="text-white/90 text-xs sm:text-sm">DDJAY सरकारी योजना - हरियाणा</p>
              </div>
            </div>
            {/* Close Button - Mobile friendly */}
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-1.5 sm:p-2 rounded-full transition-colors active:scale-95"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 overflow-y-auto flex-1">
          {/* Main Warning */}
          <div className="flex items-start gap-2 sm:gap-3 bg-amber-50 p-3 sm:p-4 rounded-lg border border-amber-200">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">⚠️ महत्वपूर्ण सूचना</h2>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                DDJAY (दीन दयाल जन आवास योजना) एक सरकारी आवास योजना है। कृपया नकली वेबसाइट्स से सावधान रहें। 
                किसी भी वेबसाइट पर ऑनलाइन पेमेंट न करें।
              </p>
            </div>
          </div>

          {/* Official Website */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
              <h3 className="font-bold text-blue-800 text-xs sm:text-sm">✅ आधिकारिक जानकारी पोर्टल:</h3>
            </div>
            <div className="bg-white p-2 sm:p-3 rounded border border-blue-300 shadow-sm">
              <p className="font-mono text-blue-700 font-bold text-center text-base sm:text-lg md:text-xl break-all px-2">
                ddjayprojects.org
              </p>
              <p className="text-center text-gray-600 text-xs mt-1">
                (अन्य डोमेन से सावधान रहें)
              </p>
            </div>
          </div>

          {/* Important Points - Grid for better mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {/* Point 1 */}
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Info className="w-3 h-3 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium mb-1">हम सिर्फ जानकारी प्रदान करते हैं</p>
                  <p className="text-gray-600 text-xs leading-relaxed">DDJAY प्रोजेक्ट्स की विस्तृत जानकारी</p>
                </div>
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-green-50 p-3 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium mb-1">निःशुल्क पंजीकरण सेवा</p>
                  <p className="text-gray-600 text-xs leading-relaxed">पंजीकरण के बाद विशेषज्ञ मार्गदर्शन</p>
                </div>
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors sm:col-span-2">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-3 h-3 text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-xs sm:text-sm font-medium mb-1">❌ ऑनलाइन पेमेंट स्वीकार नहीं</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    हम किसी भी प्रकार का ऑनलाइन पेमेंट नहीं लेते। सीधे RERA पंजीकृत डेवलपर को भुगतान करें।
                  </p>
                </div>
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors sm:col-span-2">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium mb-1">🏠 प्लॉट, फ्लोर व कमर्शियल संपत्ति</p>
                  <p className="text-gray-600 text-xs leading-relaxed">DDJAY के अंतर्गत पंजीकृत प्रोजेक्ट्स में उपलब्ध</p>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Tip */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 rounded-lg border border-green-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-green-800 font-medium mb-1">
                  <span className="font-bold">🛡️ सुरक्षा सलाह:</span> 
                </p>
                <p className="text-xs text-green-700">
                  1. सिर्फ RERA पंजीकृत डेवलपर्स को ही भुगतान करें<br />
                  2. ऑनलाइन पेमेंट लिंक पर क्लिक न करें<br />
                  3. सभी दस्तावेज़ व्यक्तिगत रूप से चेक करें
                </p>
              </div>
            </div>
          </div>

          {/* Device Specific Tips */}
          {isMobile && (
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="w-4 h-4 text-blue-600" />
                <p className="text-sm text-blue-800 font-medium">📱 मोबाइल यूजर के लिए टिप्स:</p>
              </div>
              <ul className="text-xs text-blue-700 space-y-1 pl-5">
                <li>• URL बार में "ddjayprojects.org" चेक करें</li>
                <li>• मोबाइल नंबर पर कॉल/WhatsApp करके वेरीफाई करें</li>
                <li>• स्क्रीनशॉट लेकर रिकॉर्ड रखें</li>
              </ul>
            </div>
          )}
        </div>

        {/* Footer - Sticky Button */}
        <div className="border-t p-3 sm:p-4 md:p-6 bg-white sticky bottom-0">
          <div className="space-y-3">
            <Button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200"
              size="lg"
            >
              ✅ मैं समझ गया/गई - वेबसाइट प्रवेश करें
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">
                यह सूचना आपकी सुरक्षा के लिए प्रदर्शित की जा रही है
              </p>
              <p className="text-[10px] sm:text-xs text-gray-400">
                ESC बटन दबाकर या ऊपर ✕ बटन से भी बंद कर सकते हैं
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}