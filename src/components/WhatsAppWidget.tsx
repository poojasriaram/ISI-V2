import { useState, useEffect } from 'react';
import { MessageCircle, X, MessageSquare } from 'lucide-react';

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '7708886868'; // Replace with your WhatsApp number
  const defaultMessage = 'Hello! I would like to know more about your security solutions.';

  // Add a slight delay before showing the widget for a smoother initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden w-80 transform transition-all duration-300 ease-in-out">
          <div className="bg-primary p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Chat with us</h3>
                <p className="text-xs opacity-90">We&apos;re here to help</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Hi there! 👋<br />
              How can we help you today?
            </p>
            <button
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.174.199-.347.223-.644.075-.297-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.135.298-.354.446-.473.149-.119.223-.199.334-.332.112-.134.055-.248-.027-.372l-.466-.575c-.273-.338-.675-.351-.922-.359-.24-.008-.54-.008-.84.008-.33.016-1.016.16-1.55.78-.52.6-.5 1.53-.5 1.675.008.163.128 2.262 1.48 4.64 1.32 2.308 3.32 4.39 4.7 4.664.71.16 1.2.137 1.613.086.5-.063 1.524-.62 1.74-1.227.22-.61.22-1.13.149-1.227-.074-.1-.27-.152-.57-.25m-5.446 7.443h-.016a8.9 8.9 0 01-4.468-1.2l-.324-.198-3.336.879.89-3.262-.21-.336a8.96 8.96 0 01-1.384-4.73c.008-4.97 4.03-9 9-9 2.39 0 4.676.95 6.364 2.637a9.014 9.014 0 012.633 6.367c0 5.015-4.133 9.086-9.223 9.086" />
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className={`bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ${isOpen ? 'rotate-0' : 'animate-jump-vibrate'}`}
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
