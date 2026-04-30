import { links, organization } from "../data/organization.js";
import { ExternalLink } from "./ExternalLink.jsx";
import { SectionHeader } from "./SectionHeader.jsx";

export function ContactLinks() {
  return (
    <section className="section section-wrap" id="contact" aria-labelledby="contact-title">
      <SectionHeader
        num="03"
        label="참여"
        title="당신의 이름은 숨겨도 좋습니다. 하지만 당신의 목소리는 큰 힘이 됩니다"
        titleId="contact-title"
      >
        개인정보 노출이 부담스러우신가요? 활동명과 이메일만으로도 충분히 우리의 활동에 동참할 수 있습니다. 
        단체의 소식을 받아보며 가볍게 연대하는 **준회원**, 그리고 총회 의결권을 가지고 단체의 방향을 함께 결정하며 적극적으로 행동하는 **정회원** 제도를 운영하고 있습니다. 
        각자의 상황에 맞게, 연대할 수 있는 만큼만 연결되어 주십시오.
      </SectionHeader>

      <div className="contact-list">
        <ExternalLink className="contact-row contact-primary" href={links.membershipForm}>
          <span className="contact-label">가입</span>
          <span className="contact-title">가입 신청서 작성하기</span>
          <span className="contact-meta" aria-hidden="true">
            Google Forms →
          </span>
        </ExternalLink>
        <ExternalLink className="contact-row" href={links.cafe}>
          <span className="contact-label">커뮤니티</span>
          <span className="contact-title">공식 네이버 카페</span>
          <span className="contact-meta" aria-hidden="true">
            cafe.naver.com/adderallforlife →
          </span>
        </ExternalLink>
        <ExternalLink className="contact-row" href={links.chat}>
          <span className="contact-label">오픈채팅</span>
          <span className="contact-title">카카오톡 소통방</span>
          <span className="contact-meta" aria-hidden="true">
            입장하기 →
          </span>
        </ExternalLink>
        <ExternalLink className="contact-row" href={links.email}>
          <span className="contact-label">이메일</span>
          <span className="contact-title">kapn.rights@gmail.com</span>
          <span className="contact-meta" aria-hidden="true">
            메일 앱으로 열기 →
          </span>
        </ExternalLink>
      </div>

      <p className="privacy-note">{organization.privacyNote}</p>
    </section>
  );
}
