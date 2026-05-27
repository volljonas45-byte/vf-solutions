"use client";
import { useState } from "react";

interface Props {
  name: string;
  domain: string;
  url: string;
  desc: string;
  ctaLabel?: string;
}

export default function PartnerCard({ name, domain, url, desc, ctaLabel = "Visit website" }: Props) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-[#0D1F3C] border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-[#1E6FD9]/50 hover:bg-[#112244] transition-all duration-200"
    >
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#1E6FD9]/30 transition-colors">
          {!logoFailed ? (
            <img
              src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=256`}
              alt={name}
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <span className="text-[#1E6FD9] text-sm font-bold">{name.slice(0, 2).toUpperCase()}</span>
          )}
        </div>
        <div>
          <div className="font-bold text-white text-sm leading-tight">{name}</div>
          <div className="text-[10px] text-[#475569] font-mono mt-0.5">{domain}</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-[#64748B] leading-relaxed flex-1">{desc}</p>

      {/* Link indicator */}
      <div className="flex items-center gap-1 text-[11px] text-[#475569] group-hover:text-[#1E6FD9] transition-colors">
        <span>{ctaLabel}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 8L8 2M4.5 2H8v3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
}
