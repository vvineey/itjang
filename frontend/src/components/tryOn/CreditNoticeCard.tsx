import { AlertCircle, CheckCircle2, CreditCard, WalletCards } from "lucide-react";
import type { TryOnStatus } from "./MannequinPreview";

type CreditNoticeCardProps = {
  creditInfo: {
    currentCredit: number;
    requiredCredit: number;
    afterUseCredit: number;
  };
  status: TryOnStatus;
};

const CreditNoticeCard = ({ creditInfo, status }: CreditNoticeCardProps) => {
  const isInsufficient = status === "insufficient";
  const visibleCredit = isInsufficient ? 0 : creditInfo.currentCredit;
  const afterUseCredit = isInsufficient ? 0 : creditInfo.afterUseCredit;

  return (
    <section className="credit-notice-card">
      <div className="tryon-section-heading">
        <span>AI 이미지로 자세히 보기</span>
        <strong>
          <CreditCard aria-hidden size={15} />
          유료 기능
        </strong>
      </div>
      <p>선택한 코디를 내 얼굴과 체형에 맞춰 이미지로 확인할 수 있어요.</p>
      <div className="credit-summary-grid">
        <div>
          <WalletCards aria-hidden size={18} />
          <span>보유 크레딧</span>
          <strong>{visibleCredit}크레딧</strong>
        </div>
        <div>
          <SparkCostIcon />
          <span>이번 생성</span>
          <strong>{creditInfo.requiredCredit}크레딧</strong>
        </div>
        <div>
          {isInsufficient ? <AlertCircle aria-hidden size={18} /> : <CheckCircle2 aria-hidden size={18} />}
          <span>생성 후</span>
          <strong>{afterUseCredit}크레딧</strong>
        </div>
      </div>
      <small>
        AI 착용 이미지는 참고용이며 실제 색감, 소재, 핏과 다를 수 있어요.
      </small>
    </section>
  );
};

const SparkCostIcon = () => (
  <span className="spark-cost-icon" aria-hidden>
    1
  </span>
);

export default CreditNoticeCard;
