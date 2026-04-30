import { historyItems } from "../data/history.js";
import { SectionHeader } from "./SectionHeader.jsx";

export function HistoryTimeline() {
  return (
    <section className="section section-wrap" id="history" aria-labelledby="history-title">
      <SectionHeader
        num="03"
        label="이력"
        title="작지만 단단하게, 변화를 위한 첫걸음을 내딛습니다"
        titleId="history-title"
      >
        우리는 창립 직후부터 환우들의 목소리를 세상에 낼 수 있도록 공식적인 활동 기반과 정책 참여 통로를 신속하게 구축해 왔습니다.
      </SectionHeader>

      <ol className="timeline">
        {historyItems.map((item, index) => (
          <li key={`${item.date}-${item.title}`} style={{ "--delay": `${index * 90}ms` }}>
            <time dateTime={item.date.replaceAll(".", "-")}>{item.date}</time>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
