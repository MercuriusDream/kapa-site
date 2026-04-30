import { ruleGroups } from "../data/rules.js";
import { links, organization } from "../data/organization.js";
import { ExternalLink } from "./ExternalLink.jsx";
import { SectionHeader } from "./SectionHeader.jsx";

export function RulesSummary() {
  return (
    <section className="section section-wrap" id="rules" aria-labelledby="rules-title">
      <SectionHeader
        num="06"
        label="회칙"
        title="우리가 지키고자 하는 약속, 정관의 핵심을 투명하게 공개합니다"
        titleId="rules-title"
      >
        누구에게나 떳떳한 활동을 위해 단체 운영의 근간이 되는 핵심 회칙을 요약하여 안내해 드립니다. 보다 자세한 내용은 첨부된 정관 원문에서 확인하실 수 있습니다.
      </SectionHeader>

      <div className="rules-list">
        {ruleGroups.map((group) => (
          <details key={group.title}>
            <summary>{group.title}</summary>
            <p>{group.body}</p>
          </details>
        ))}
      </div>

      <div className="charter-link">
        <p>
          정관상 영문 명칭은 <strong>{organization.charterEnglishName}</strong>. 대외 약칭은 {organization.publicShortName}을
          사용합니다.
        </p>
        <ExternalLink className="btn-link" href={links.bylawsPdf}>
          정관 PDF 원문 보기 <span aria-hidden="true">→</span>
        </ExternalLink>
      </div>
    </section>
  );
}
