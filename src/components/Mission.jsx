import { organization } from "../data/organization.js";
import { SectionHeader } from "./SectionHeader.jsx";
import { Logo } from "./Logo.jsx";

const pillars = [
  {
    title: "권익 보호",
    body: "환우들이 일상과 진료 현장에서 마주하는 불합리한 차별을 사회적 의제로 격상시키고 실질적인 변화를 이끌어냅니다."
  },
  {
    title: "인식 개선",
    body: "질환과 약물에 덧씌워진 왜곡된 공포를 걷어내고, 정확한 의학적 진실과 환우들의 생생한 삶의 목소리를 사회에 알립니다."
  },
  {
    title: "치료권 보장",
    body: "단순한 행정 편의나 근거 없는 두려움 때문에 환자가 꼭 필요한 치료에서 소외받는 일이 없도록 우리의 권리를 당당히 주장합니다."
  }
];

export function Mission() {
  return (
    <>
      <section className="section section-wrap" style={{ paddingBottom: '0rem' }}>
        <div className="logo-explanation">
          <div className="logo-symbol">
            <Logo width={80} height={80} />
          </div>
          <div className="logo-text">
            <p className="kicker">Symbol of {organization.publicShortName}</p>
            <h3>흔들림 없는 환우들의 권리와 연대</h3>
            <p>
              알파벳 'K'를 시계 방향으로 90도 회전시킨 이 형태는 동시에 한글 자음 'ㅈ'과 맞닿아 있으며, KAPN의 연대와 지지 기반을 포괄합니다. 굳건한 지붕(ㅡ)과 그것을 떠받치는 연대의 삼각형(▲)은 흔들림 없는 환우들의 권리와 서로를 지탱하는 힘을 상징합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-wrap" id="mission" aria-labelledby="mission-title" style={{ paddingTop: '5rem' }}>
        <SectionHeader
          num="01"
          label="사명"
          title="환자의 진짜 삶을 기준으로, 제도의 본질을 다시 묻습니다"
          titleId="mission-title"
        >
          {organization.mission}
        </SectionHeader>

        <ol className="num-list">
          {pillars.map((pillar, index) => (
            <li key={pillar.title}>
              <div>
                <p className="li-kicker">Pillar {String(index + 1).padStart(2, '0')}</p>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
