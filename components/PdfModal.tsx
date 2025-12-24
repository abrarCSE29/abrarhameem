import React, { useEffect, useState } from 'react';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, pdfUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Convert Google Drive URL to embed format
  const getEmbedUrl = (url: string) => {
    // Extract file ID from Google Drive URL
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(pdfUrl);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Reset loading after a reasonable time
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-xl shadow-2xl transition-all duration-300 transform scale-100">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Resume of Abrar Hameem</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* PDF Content */}
        <div className="relative" style={{ height: 'calc(90vh - 80px)' }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600">Loading resume...</p>
              </div>
            </div>
          )}
          
          <iframe
            src={embedUrl}
            className="w-full h-full rounded-b-xl"
            title="Resume PDF"
            onLoad={() => setIsLoading(false)}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
