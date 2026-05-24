import { ArrowLeft, BadgeCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreditNoticeCard from "../components/tryOn/CreditNoticeCard";
import MannequinPreview, { type TryOnStatus } from "../components/tryOn/MannequinPreview";
import PromptSummaryCard from "../components/tryOn/PromptSummaryCard";
import SelectedOutfitCard, { type TryOnOutfitItem } from "../components/tryOn/SelectedOutfitCard";
import TryOnActionButtons from "../components/tryOn/TryOnActionButtons";

const selectedPrompt = "데이트에 어울리지만 너무 꾸민 느낌은 싫어요.";

const selectedTags = ["데이트", "심플", "편안한", "초록포인트"];

const weather = {
  temperature: 18,
  summary: "저녁엔 쌀쌀함",
};

const selectedOutfit: Record<"top" | "bottom" | "shoes", TryOnOutfitItem> = {
  top: {
    category: "상의",
    name: "흰 셔츠",
    source: "내 옷장",
    color: "화이트",
    style: "심플",
    owned: true,
  },
  bottom: {
    category: "하의",
    name: "연청 데님",
    source: "내 옷장",
    color: "라이트 블루",
    style: "캐주얼",
    owned: true,
  },
  shoes: {
    category: "신발",
    name: "검정 로퍼",
    source: "내 옷장",
    color: "블랙",
    style: "단정함",
    owned: true,
  },
};

const creditInfo = {
  currentCredit: 3,
  requiredCredit: 1,
  afterUseCredit: 2,
};

const VirtualTryOnPage = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<TryOnStatus>("idle");
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    },
    [],
  );

  const clearGenerateTimer = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleGenerate = () => {
    clearGenerateTimer();
    setStatus("generating");
    timerRef.current = window.setTimeout(() => {
      setStatus("complete");
      timerRef.current = null;
    }, 1400);
  };

  const handleMockStatusChange = (nextStatus: TryOnStatus) => {
    clearGenerateTimer();
    setStatus(nextStatus);
  };

  return (
    <main className="screen tryon-screen">
      <header className="tryon-header">
        <button className="tryon-back-button" onClick={() => navigate(-1)} title="뒤로가기" type="button">
          <ArrowLeft aria-hidden size={19} />
        </button>
        <div>
          <div className="tryon-paid-row">
            <span>유료 기능</span>
            <strong>
              <BadgeCheck aria-hidden size={14} />
              1회 생성 · 1크레딧 사용
            </strong>
          </div>
          <h1>AI 착용 미리보기</h1>
          <p>선택한 코디를 내 체형에 맞춰 미리 확인해보세요.</p>
        </div>
      </header>

      <section className="tryon-intro-card">
        <strong>실제 AI 생성 전 데모 화면입니다.</strong>
        <p>선택한 옷 조합을 미리 확인하고, 생성 전 크레딧 사용 정보를 확인할 수 있어요.</p>
      </section>

      <PromptSummaryCard prompt={selectedPrompt} tags={selectedTags} weather={weather} />

      <MannequinPreview status={status} />

      <section className="tryon-outfit-section" aria-label="선택한 아이템">
        <div className="tryon-section-heading">
          <span>선택한 아이템</span>
          <strong>내 옷장 우선</strong>
        </div>
        <div className="selected-outfit-list">
          {Object.values(selectedOutfit).map((item) => (
            <SelectedOutfitCard item={item} key={item.category} />
          ))}
        </div>
      </section>

      <CreditNoticeCard creditInfo={creditInfo} status={status} />

      <TryOnActionButtons
        onGenerate={handleGenerate}
        onMockStatusChange={handleMockStatusChange}
        onRecharge={() => handleMockStatusChange("idle")}
        onReset={() => navigate("/recommend")}
        status={status}
      />
    </main>
  );
};

export default VirtualTryOnPage;
