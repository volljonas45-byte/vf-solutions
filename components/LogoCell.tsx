"use client";
import { useState } from "react";

interface LogoCellProps {
  name: string;
  domain?: string;
}

export default function LogoCell({ name, domain }: LogoCellProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="bg-[#0D1F3C]/70 hover:bg-[#122040] px-4 py-5 flex items-center justify-center transition-colors min-h-[76px] group">
      {domain && !failed ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          title={name}
          className="max-h-8 max-w-[112px] object-contain brightness-0 invert opacity-50 group-hover:opacity-80 transition-opacity"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-[#64748B] group-hover:text-[#94A3B8] text-xs font-medium text-center leading-tight transition-colors">
          {name}
        </span>
      )}
    </div>
  );
}
