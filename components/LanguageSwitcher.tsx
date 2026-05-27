"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { type Locale } from "@/lib/data";

function FlagDE({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 14"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <rect width="20" height="14" rx="2" fill="#000" />
      <rect y="4.66" width="20" height="4.67" fill="#DD0000" />
      <rect y="9.33" width="20" height="4.67" fill="#FFCE00" />
    </svg>
  );
}

function FlagGB({ className = "" }: { className?: string }) {
  // British Union Jack — simplified, vector-clean
  return (
    <svg
      viewBox="0 0 20 14"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <clipPath id="ujk-clip">
          <rect width="20" height="14" rx="2" />
        </clipPath>
      </defs>
      <g clipPath="url(#ujk-clip)">
        <rect width="20" height="14" fill="#012169" />
        {/* White diagonals */}
        <path d="M0 0L20 14M20 0L0 14" stroke="#FFF" strokeWidth="2.8" />
        {/* Red diagonals (offset for St. Patrick) */}
        <path
          d="M0 0L20 14"
          stroke="#C8102E"
          strokeWidth="1.4"
          strokeDasharray="11 9 9 11"
        />
        <path
          d="M20 0L0 14"
          stroke="#C8102E"
          strokeWidth="1.4"
          strokeDasharray="11 9 9 11"
        />
        {/* White cross */}
        <path d="M10 0V14M0 7H20" stroke="#FFF" strokeWidth="4" />
        {/* Red cross */}
        <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2.4" />
      </g>
    </svg>
  );
}

export default function LanguageSwitcher({
  locale,
  variant = "header",
  onNavigate,
}: {
  locale: Locale;
  variant?: "header" | "mobile";
  onNavigate?: () => void;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [switching, setSwitching] = useState<Locale | null>(null);

  const targetFor = (next: Locale) => pathname.replace(/^\/(de|en)/, `/${next}`);

  function handleSwitch(next: Locale) {
    if (next === locale) return;
    setSwitching(next);
    const target = targetFor(next);

    // Trigger fade-out by toggling a body class — globals.css listens for it.
    if (typeof document !== "undefined") {
      document.body.classList.add("lang-switching");
    }

    // Wait for fade-out (180ms) before navigating, then clear the class
    // on the next route segment so the new content fades back in.
    window.setTimeout(() => {
      startTransition(() => {
        router.push(target);
      });
      window.setTimeout(() => {
        if (typeof document !== "undefined") {
          document.body.classList.remove("lang-switching");
        }
        setSwitching(null);
        onNavigate?.();
      }, 280);
    }, 180);
  }

  if (variant === "mobile") {
    return (
      <div className="flex items-stretch border border-[#E5E7EB] rounded-md overflow-hidden text-sm font-medium">
        <LangButton
          active={locale === "de"}
          flag={<FlagDE className="w-5 h-3.5 rounded-[2px] shadow-sm" />}
          label="Deutsch"
          onClick={() => handleSwitch("de")}
          isLoading={switching === "de"}
          variant="mobile"
        />
        <LangButton
          active={locale === "en"}
          flag={<FlagGB className="w-5 h-3.5 rounded-[2px] shadow-sm" />}
          label="English"
          onClick={() => handleSwitch("en")}
          isLoading={switching === "en"}
          variant="mobile"
        />
      </div>
    );
  }

  return (
    <div className="hidden sm:flex items-center gap-1 border border-[#E5E7EB] rounded-md p-0.5 text-xs font-medium bg-white">
      <LangButton
        active={locale === "de"}
        flag={<FlagDE className="w-4 h-2.5 rounded-[1.5px] shadow-sm" />}
        label="DE"
        onClick={() => handleSwitch("de")}
        isLoading={switching === "de"}
        variant="header"
      />
      <LangButton
        active={locale === "en"}
        flag={<FlagGB className="w-4 h-2.5 rounded-[1.5px] shadow-sm" />}
        label="EN"
        onClick={() => handleSwitch("en")}
        isLoading={switching === "en"}
        variant="header"
      />
    </div>
  );
}

function LangButton({
  active,
  flag,
  label,
  onClick,
  isLoading,
  variant,
}: {
  active: boolean;
  flag: React.ReactNode;
  label: string;
  onClick: () => void;
  isLoading: boolean;
  variant: "header" | "mobile";
}) {
  const base =
    variant === "header"
      ? "inline-flex items-center gap-1.5 px-2 py-1 rounded transition-all duration-200"
      : "flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 transition-all duration-200";

  const stateClasses = active
    ? "bg-[#0A1628] text-white"
    : "text-[#4B5563] hover:bg-[#F8F9FB] hover:text-[#0A1628]";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      aria-label={`Switch to ${label}`}
      className={`${base} ${stateClasses} ${isLoading ? "opacity-60" : ""}`}
      disabled={isLoading}
    >
      <span
        className={`inline-flex shrink-0 transition-transform duration-200 ${
          isLoading ? "animate-pulse" : ""
        }`}
      >
        {flag}
      </span>
      <span>{label}</span>
    </button>
  );
}
