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
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
          alt=""
          width={20}
          height={20}
          className="w-5 h-5 object-contain rounded-sm opacity-60 group-hover:opacity-90 transition-opacity shrink-0"
          onError={() => setIconFailed(true)}
        />
      )}
      <span className="text-[#64748B] group-hover:text-[#94A3B8] text-xs font-medium leading-tight transition-colors">
        {name}
      </span>
    </div>
  );
}
