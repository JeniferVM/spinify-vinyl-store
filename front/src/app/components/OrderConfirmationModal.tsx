"use client";

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function OrderConfirmationModal({
  isOpen,
  onClose,
}: OrderConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
        onClick={onClose}
      ></div>

      <div className="relative z-[9999] bg-gradient-to-br from-black/90 via-black/80 to-black/90 border border-custume-orange/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-custume-orange/20">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-custume-orange/20 border-2 border-custume-orange flex items-center justify-center">
            <svg
              className="w-10 h-10 text-custume-orange"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-3">
          Order Confirmed!
        </h2>

        <p className="text-white/80 text-center mb-2">
          Thank you for your purchase!
        </p>

        <p className="text-white/70 text-center text-sm mb-6">
          Your order will be delivered within{" "}
          <span className="text-custume-orange font-semibold">
            5 business days
          </span>{" "}
          from today.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-2 text-sm text-white/60">
            <svg
              className="w-5 h-5 text-custume-orange flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              You will receive a confirmation email with tracking details
              shortly.
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-custume-orange text-black text-lg font-bold rounded-xl hover:bg-custume-orange/90 hover:scale-105 transition-all duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmationModal;
