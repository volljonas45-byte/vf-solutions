"use client";
import { useState } from "react";

interface LogoCellProps {
  name: string;
  domain?: string;
}

export default function LogoCell({ name, domain }: LogoCellProps) {
  const [iconFailed, setIconFailed] = useState(false);

  return (
    <div className="bg-[#0D1F3C]/70 hover:bg-[#122040] px-4 py-5 flex items-center gap-3 transition-colors group min-h-[68px]">
      {domain && !iconFailed && (
        <img
          src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=256`}
          alt=""
          width={36}
          height={36}
          className="w-9 h-9 object-contain rounded opacity-65 group-hover:opacity-95 transition-opacity shrink-0"
          onError={() => setIconFailed(true)}
        />
      )}
      <span className="text-[#64748B] group-hover:text-[#94A3B8] text-xs font-medium leading-tight transition-colors">
        {name}
      </span>
    </div>
  );
}
