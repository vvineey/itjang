import { Loader2, Sparkles } from "lucide-react";

export type TryOnStatus = "idle" | "insufficient" | "generating" | "complete";

type MannequinPreviewProps = {
  status: TryOnStatus;
};

const previewCopy: Record<TryOnStatus, string> = {
  idle: "실제 생성 이미지는 크레딧 사용 후 확인할 수 있어요.",
  insufficient: "크레딧을 충전하면 내 체형에 맞춘 이미지를 만들 수 있어요.",
  generating: "선택한 코디를 내 체형에 맞춰 준비하고 있어요.",
  complete: "생성 완료 데모입니다. 실제 결과는 생성 이미지로 더 자세히 확인돼요.",
};

const MannequinPreview = ({ status }: MannequinPreviewProps) => (
  <section className={`mannequin-preview is-${status}`} aria-label="AI 착용 미리보기">
    <div className="mannequin-preview__topline">
      <span>데모 미리보기</span>
      <strong>
        {status === "generating" ? (
          <Loader2 aria-hidden className="tryon-spin" size={15} />
        ) : (
          <Sparkles aria-hidden size={15} />
        )}
        {status === "complete" ? "완료" : "미리보기"}
      </strong>
    </div>
    <div className="mannequin-stage">
      <div className="mannequin-body" aria-hidden>
        <span className="mannequin-head" />
        <span className="mannequin-neck" />
        <span className="mannequin-shirt">
          <i />
        </span>
        <span className="mannequin-arms mannequin-arms--left" />
        <span className="mannequin-arms mannequin-arms--right" />
        <span className="mannequin-denim mannequin-denim--left" />
        <span className="mannequin-denim mannequin-denim--right" />
        <span className="mannequin-shoe mannequin-shoe--left" />
        <span className="mannequin-shoe mannequin-shoe--right" />
      </div>
    </div>
    <p>{previewCopy[status]}</p>
    <small>실제 AI 생성 전 옷 조합을 먼저 확인하는 화면이에요.</small>
  </section>
);

export default MannequinPreview;
