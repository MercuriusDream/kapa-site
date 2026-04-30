export function Logo({ className = "", width = 28, height = 28, ...props }) {
  return (
    <svg 
      className={className}
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="15" y="20" width="70" height="16" />
      <polygon points="50,36 20,80 80,80" />
    </svg>
  );
}
