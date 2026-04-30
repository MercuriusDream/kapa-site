import { goals } from "../data/goals.js";
import { SectionHeader } from "./SectionHeader.jsx";

export function Goals() {
  return (
    <section className="section section-wrap" id="goals" aria-labelledby="goals-title">
      <SectionHeader
        num="02"
        label="목표"
        title="오남용 방지라는 명분이 환자의 권리 박탈로 이어져선 안 됩니다"
        titleId="goals-title"
      >
        우리는 규제의 필요성 자체를 부정하지 않습니다. 하지만 행정 편의를 위해 환자의 고통을 방치하고 낙인을 조장하는 일방적인 규제에는, 환자의 삶을 온전히 반영한 근본적인 제도 개선이 시급합니다.
      </SectionHeader>

      <ol className="num-list">
        {goals.map((goal) => (
          <li key={goal.title}>
            <div>
              <p className="li-kicker">{goal.kicker}</p>
              <h3>{goal.title}</h3>
              <p>{goal.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
