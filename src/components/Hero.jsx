import { Link } from "react-router-dom";
import { links, organization } from "../data/organization.js";
import { ExternalLink } from "./ExternalLink.jsx";

const headlines = [
  "ADHD 치료제, 또 다시 불거진 오남용 논란",
  "공부 잘하는 약? 집중력 높이려다...",
  "ADHD 치료제 과다 처방 의심 사례 적발",
  "마약류 향정신성의약품, 처방 10대 급증",
  "시험 앞두고 맘카페서 은밀하게 거래되는 약",
  "집중력 강화 목적? 성인들 '주의력결핍장애' 핑계로 처방",
  "ADHD 치료제 남용, 처벌 강화 목소리 커져",
  "정신과 문 두드리는 취준생들... 이유는 ADHD?",
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-ticker-bg" aria-hidden="true">
        {/* Render multiple lines of ticker for full screen effect */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="ticker-line" 
            style={{ 
              animationDirection: i % 2 === 0 ? "normal" : "reverse",
              animationDuration: `${30 + (i % 5) * 10}s` 
            }}
          >
            <div className="ticker-content">
              {headlines.map((headline, j) => (
                <span key={`${i}-${j}`}>{headline}</span>
              ))}
              {headlines.map((headline, j) => (
                <span key={`clone-${i}-${j}`}>{headline}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="hero-content section-wrap reveal">
        <h1 id="hero-title">
          <span>빼앗긴 시간을</span>
          <span>되돌려 주십시오</span>
        </h1>
        <p className="hero-lede">
          {organization.koreanName}는 환우들이 자신에게 꼭 필요한 치료를 <strong>제때</strong>, <strong>충분히</strong>, 그리고 <strong>어떤 눈치도 보지 않고</strong> 받을 수 있는 사회를 만들기 위해 행동하는 비영리단체입니다.
        </p>
        <div className="actions" aria-label="주요 행동">
          <ExternalLink className="btn btn-primary" href={links.membershipForm}>
            가입 신청하기
          </ExternalLink>
          <Link className="btn-link" to="/appeal">
            호소문 읽기 <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
