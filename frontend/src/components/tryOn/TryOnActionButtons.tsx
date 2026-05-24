import { Loader2, RotateCcw, Sparkles, WalletCards } from "lucide-react";
import type { TryOnStatus } from "./MannequinPreview";

type TryOnActionButtonsProps = {
  status: TryOnStatus;
  onGenerate: () => void;
  onRecharge: () => void;
  onReset: () => void;
  onMockStatusChange: (status: TryOnStatus) => void;
};

const statusOptions: Array<{ label: string; value: TryOnStatus }> = [
  { label: "기본", value: "idle" },
  { label: "부족", value: "insufficient" },
  { label: "생성 중", value: "generating" },
  { label: "완료", value: "complete" },
];

const TryOnActionButtons = ({
  status,
  onGenerate,
  onRecharge,
  onReset,
  onMockStatusChange,
}: TryOnActionButtonsProps) => {
  const isGenerating = status === "generating";
  const isInsufficient = status === "insufficient";

  return (
    <section className="tryon-actions">
      <button
        className="primary-button tryon-generate-button"
        disabled={isGenerating || isInsufficient}
        onClick={onGenerate}
        type="button"
      >
        {isGenerating ? (
          <>
            <Loader2 aria-hidden className="tryon-spin" size={18} />
            생성 중이에요
          </>
        ) : (
          <>
            <Sparkles aria-hidden size={18} />
            1크레딧으로 생성하기
          </>
        )}
      </button>
      <div className="tryon-sub-actions">
        <button className="secondary-button" onClick={onRecharge} type="button">
          <WalletCards aria-hidden size={16} />
          크레딧 충전하기
        </button>
        <button className="secondary-button" onClick={onReset} type="button">
          <RotateCcw aria-hidden size={16} />
          코디 다시 고르기
        </button>
      </div>
      <div className="tryon-state-switch" aria-label="데모 상태 선택">
        {statusOptions.map((option) => (
          <button
            className={status === option.value ? "is-active" : ""}
            key={option.value}
            onClick={() => onMockStatusChange(option.value)}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TryOnActionButtons;
