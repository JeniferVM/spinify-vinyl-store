"use client";

import { useAuth } from "@/app/context/authContext";

interface ConfirmDataProps {
  isConfirmed: boolean;
  onConfirmChange: (value: boolean) => void;
}

function ConfirmData({ isConfirmed, onConfirmChange }: ConfirmDataProps) {
  const { dataUser } = useAuth();

  if (!dataUser?.user) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
      <div className="p-6">
        <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-custume-orange rounded-full"></div>
          Personal Information
        </h3>

        {/* Datos en una línea - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Name */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-custume-orange/30 transition-all duration-300">
            <div className="w-2 h-2 rounded-full bg-custume-orange flex-shrink-0"></div>
            <div className="min-w-0 flex-1">
              <span className="text-white/50 text-xs block">Name</span>
              <span className="text-white font-medium text-sm truncate block">
                {dataUser.user.name}
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-custume-orange/30 transition-all duration-300">
            <div className="w-2 h-2 rounded-full bg-custume-orange flex-shrink-0"></div>
            <div className="min-w-0 flex-1">
              <span className="text-white/50 text-xs block">Address</span>
              <span className="text-white font-medium text-sm truncate block">
                {dataUser.user.address}
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-custume-orange/30 transition-all duration-300">
            <div className="w-2 h-2 rounded-full bg-custume-orange flex-shrink-0"></div>
            <div className="min-w-0 flex-1">
              <span className="text-white/50 text-xs block">Phone</span>
              <span className="text-white font-medium text-sm truncate block">
                {dataUser.user.phone}
              </span>
            </div>
          </div>
        </div>

        {/* Checkbox de confirmación */}
        <div className="mt-6 p-4 rounded-xl bg-custume-orange/5 border border-custume-orange/20">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              id="confirmData"
              name="confirmData"
              checked={isConfirmed}
              onChange={(e) => onConfirmChange(e.target.checked)}
              className="mt-0.5 w-5 h-5 rounded border-2 border-white/30 bg-transparent checked:bg-custume-orange checked:border-custume-orange focus:ring-2 focus:ring-custume-orange/50 cursor-pointer transition-all duration-200 flex-shrink-0"
            />
            <span className="text-white/80 text-sm select-none group-hover:text-white transition-colors">
              I confirm that all my personal information is correct and up to
              date
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ConfirmData;
