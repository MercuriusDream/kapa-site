export function ExternalLink({ href, className = "", children }) {
  if (href.startsWith("#")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  const isMail = href.startsWith("mailto:");
  const helperText = isMail ? "메일 앱 열기" : "새 탭에서 열림";

  return (
    <a
      className={className}
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
    >
      {children}
      <span className="visually-hidden">({helperText})</span>
    </a>
  );
}
