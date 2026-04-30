import { organization } from "../data/organization.js";

export function SiteFooter() {
  return (
    <footer className="footer section-wrap">
      <div>
        <strong>{organization.koreanName} · KAPA</strong>
        <p>{organization.officeAddress}</p>
        <p>고유번호 144-82-77353</p>
      </div>
      <div>
        <p>© 2026 {organization.charterEnglishName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
