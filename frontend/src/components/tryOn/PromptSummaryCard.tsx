import { CloudSun } from "lucide-react";

type PromptSummaryCardProps = {
  prompt: string;
  tags: string[];
  weather: {
    temperature: number;
    summary: string;
  };
};

const PromptSummaryCard = ({ prompt, tags, weather }: PromptSummaryCardProps) => (
  <section className="tryon-summary-card" aria-label="선택한 조건">
    <div className="tryon-section-heading">
      <span>선택한 조건</span>
      <strong>
        <CloudSun aria-hidden size={15} />
        {weather.temperature}°C · {weather.summary}
      </strong>
    </div>
    <p>{prompt}</p>
    <div className="tryon-tag-row">
      {tags.map((tag, index) => (
        <span className={index < 2 ? "is-primary" : ""} key={tag}>
          #{tag}
        </span>
      ))}
    </div>
    <dl className="tryon-condition-grid">
      <div>
        <dt>상황</dt>
        <dd>데이트</dd>
      </div>
      <div>
        <dt>분위기</dt>
        <dd>심플 · 편안한</dd>
      </div>
      <div>
        <dt>날씨 조건</dt>
        <dd>{weather.temperature}°C · {weather.summary}</dd>
      </div>
    </dl>
  </section>
);

export default PromptSummaryCard;
