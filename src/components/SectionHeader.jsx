export function SectionHeader({ num, label, title, titleId, children }) {
  return (
    <header className="section-head">
      <p className="section-num-line">
        <span>{num}</span>
        <span aria-hidden="true">/</span>
        <strong>{label}</strong>
      </p>
      <h2 id={titleId}>{title}</h2>
      {children ? <p className="section-lede">{children}</p> : null}
    </header>
  );
}
