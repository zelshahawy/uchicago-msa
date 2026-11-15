export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M40 3 49 19 67 13 61 31 77 40 61 49 67 67 49 61 40 77 31 61 13 67 19 49 3 40 19 31 13 13 31 19Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="m40 14 8 18 18 8-18 8-8 18-8-18-18-8 18-8Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="m40 27 13 13-13 13-13-13Z" fill="currentColor" />
    </svg>
  );
}

export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
