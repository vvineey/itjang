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
    <div className="tryon-preview-frame">
      <svg
        aria-label="흰 셔츠, 연청 데님, 검정 로퍼 착용 미리보기"
        className="tryon-look-svg"
        role="img"
        viewBox="0 0 240 360"
      >
        <title>선택한 코디를 입은 마네킹 미리보기</title>
        <defs>
          <linearGradient id="shirtFold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fffdf6" />
            <stop offset="100%" stopColor="#f1ead8" />
          </linearGradient>
          <linearGradient id="denimWash" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#b8d6e6" />
            <stop offset="100%" stopColor="#86b5cf" />
          </linearGradient>
        </defs>

        <ellipse cx="120" cy="332" fill="rgba(33, 77, 55, 0.13)" rx="72" ry="13" />
        <circle cx="120" cy="45" fill="#ead7bd" r="27" />
        <rect fill="#ead7bd" height="25" rx="11" width="24" x="108" y="68" />

        <path
          d="M72 108 C78 91 95 82 120 82 C145 82 162 91 168 108 L181 183 C183 196 174 207 161 207 L79 207 C66 207 57 196 59 183 Z"
          fill="url(#shirtFold)"
          stroke="rgba(33, 77, 55, 0.15)"
          strokeWidth="2"
        />
        <path d="M96 86 L120 112 L144 86" fill="none" stroke="#d9cfb8" strokeWidth="5" />
        <path d="M120 112 L120 203" stroke="rgba(33, 77, 55, 0.18)" strokeWidth="2" />
        <circle cx="120" cy="137" fill="#d4c7ad" r="2.6" />
        <circle cx="120" cy="159" fill="#d4c7ad" r="2.6" />
        <circle cx="120" cy="181" fill="#d4c7ad" r="2.6" />

        <path
          d="M76 114 C58 128 51 153 48 185"
          fill="none"
          stroke="#ead7bd"
          strokeLinecap="round"
          strokeWidth="18"
        />
        <path
          d="M164 114 C182 128 189 153 192 185"
          fill="none"
          stroke="#ead7bd"
          strokeLinecap="round"
          strokeWidth="18"
        />

        <path
          d="M80 207 L115 207 L109 311 C108 322 98 328 88 323 L72 316 Z"
          fill="url(#denimWash)"
          stroke="rgba(33, 77, 55, 0.14)"
          strokeWidth="2"
        />
        <path
          d="M125 207 L160 207 L168 316 L152 323 C142 328 132 322 131 311 Z"
          fill="url(#denimWash)"
          stroke="rgba(33, 77, 55, 0.14)"
          strokeWidth="2"
        />
        <path d="M120 211 L120 308" stroke="rgba(33, 77, 55, 0.16)" strokeWidth="3" />
        <path d="M84 214 C105 222 136 222 157 214" fill="none" stroke="rgba(33,77,55,0.12)" strokeWidth="3" />

        <path d="M63 315 C83 311 102 315 112 324 C108 336 70 337 56 331 C54 324 57 319 63 315Z" fill="#171b18" />
        <path d="M128 324 C138 315 157 311 177 315 C183 319 186 324 184 331 C170 337 132 336 128 324Z" fill="#171b18" />
      </svg>
      <div className="tryon-preview-legend" aria-hidden>
        <span>흰 셔츠</span>
        <span>연청 데님</span>
        <span>검정 로퍼</span>
      </div>
    </div>
    <p>{previewCopy[status]}</p>
    <small>실제 AI 생성 전 옷 조합을 먼저 확인하는 화면이에요.</small>
  </section>
);

export default MannequinPreview;
