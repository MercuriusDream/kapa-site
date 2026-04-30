import { Routes, Route, NavLink, Link } from "react-router-dom";
import { Appeal } from "./components/Appeal.jsx";
import { ContactLinks } from "./components/ContactLinks.jsx";
import { Goals } from "./components/Goals.jsx";
import { Hero } from "./components/Hero.jsx";
import { HistoryTimeline } from "./components/HistoryTimeline.jsx";
import { Mission } from "./components/Mission.jsx";
import { RulesSummary } from "./components/RulesSummary.jsx";
import { SiteFooter } from "./components/SiteFooter.jsx";
import { ThemeToggle } from "./components/ThemeToggle.jsx";
import { ExternalLink } from "./components/ExternalLink.jsx";
import { Logo } from "./components/Logo.jsx";
import { links } from "./data/organization.js";
import { navItems } from "./data/navigation.js";

function About() {
  return (
    <>
      <Mission />
      <Goals />
      <HistoryTimeline />
      <RulesSummary />
    </>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <section className="home-content section-wrap">
        <div className="home-manifesto">
          <h2 className="manifesto-title">온전한 치료는 우리의 정당한 권리입니다.</h2>
        </div>

        <nav className="home-nav-list" aria-label="주요 안내">
          <Link to="/about" className="nav-list-item">
            <span className="nav-list-num">01</span>
            <div className="nav-list-text">
              <h3>우리의 소개 및 회칙</h3>
              <p>단체의 사명, 목표, 발자취, 그리고 투명한 정관을 확인하세요.</p>
            </div>
            <span className="nav-list-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/appeal" className="nav-list-item">
            <span className="nav-list-num">02</span>
            <div className="nav-list-text">
              <h3>호소문 읽기</h3>
              <p>규제라는 이름 아래, 소중한 시간이 속절없이 흘러가선 안 됩니다.</p>
            </div>
            <span className="nav-list-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/contact" className="nav-list-item">
            <span className="nav-list-num">03</span>
            <div className="nav-list-text">
              <h3>참여와 연대</h3>
              <p>준회원으로 소식을 받아보거나 정회원으로 함께 행동할 수 있습니다. 각자의 상황에 맞는 방식으로 연대해 주세요.</p>
            </div>
            <span className="nav-list-arrow" aria-hidden="true">→</span>
          </Link>
        </nav>
      </section>
    </>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#top">
        본문 바로가기
      </a>

      <header className="masthead" aria-label="상단 내비게이션">
        <div className="masthead-inner section-wrap">
          <Link className="wordmark" to="/" aria-label="한국ADHD환우회 홈">
            <Logo width={28} height={28} />
            <span>한국ADHD환우회</span>
          </Link>
          
          <div className="masthead-nav-group">
            <nav className="nav" aria-label="주요 섹션">
              {navItems.map((item) => (
                <NavLink 
                  key={item.href} 
                  to={item.href}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="nav-external" aria-label="외부 링크">
              <ExternalLink href={links.cafe} className="external-item">카페</ExternalLink>
              <ExternalLink href={links.chat} className="external-item">카카오톡</ExternalLink>
              <ExternalLink href={links.membershipForm} className="external-item primary-external">가입신청서</ExternalLink>
              <div style={{ paddingLeft: '0.5rem', display: 'flex' }}>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appeal" element={<Appeal />} />
          <Route path="/contact" element={<ContactLinks />} />
        </Routes>
      </main>

      <SiteFooter />
    </>
  );
}
external" aria-label="외부 링크">
              <ExternalLink href={links.cafe} className="external-item">카페</ExternalLink>
              <ExternalLink href={links.chat} className="external-item">카카오톡</ExternalLink>
              <ExternalLink href={links.membershipForm} className="external-item primary-external">가입신청서</ExternalLink>
            </div>
          </div>
        </div>
      </header>

      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appeal" element={<Appeal />} />
          <Route path="/contact" element={<ContactLinks />} />
        </Routes>
      </main>

      <SiteFooter />
    </>
  );
}
