"use client";
import { useState } from "react";

interface LogoCellProps {
  name: string;
  domain?: string;
  logo?: { src: string; bg?: string };
}

export default function LogoCell({ name, domain, logo }: LogoCellProps) {
  const [iconFailed, setIconFailed] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const showLogo = logo && !logoFailed;

  return (
    <div className="bg-[#0D1F3C]/70 hover:bg-[#122040] px-4 py-5 flex items-center gap-3 transition-colors group min-h-[68px]">
      {showLogo ? (
        <span
          className="flex items-center justify-center rounded px-1.5 py-1 shrink-0 h-9 w-[88px] overflow-hidden"
          style={{ backgroundColor: logo!.bg ?? "#FFFFFF" }}
        >
          <img
            src={logo!.src}
            alt={name}
            className="max-h-7 max-w-full object-contain"
            onError={() => setLogoFailed(true)}
          />
        </span>
      ) : (
        domain && !iconFailed && (
          <img
            src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=256`}
            alt=""
            width={36}
            height={36}
            className="w-9 h-9 object-contain rounded opacity-65 group-hover:opacity-95 transition-opacity shrink-0"
            onError={() => setIconFailed(true)}
          />
        )
      )}
      <span className="text-[#64748B] group-hover:text-[#94A3B8] text-xs font-medium leading-tight transition-colors">
        {name}
      </span>
    </div>
  );
}
