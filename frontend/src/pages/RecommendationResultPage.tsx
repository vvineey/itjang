import { CheckCircle2, Heart, RotateCcw, Sparkles } from "lucide-react";
import ClothingCard from "../components/closet/ClothingCard";
import PageHeader from "../components/common/PageHeader";
import { recommendationGroups } from "../data/mockData";

const RecommendationResultPage = () => (
  <main className="screen result-screen">
    <PageHeader
      title="코디 추천 결과"
      description="내 옷장을 중심으로 오늘 입기 좋은 조합을 만들었어요."
      action={
        <button className="icon-button" title="다시 추천" type="button">
          <RotateCcw aria-hidden size={19} />
        </button>
      }
    />

    <section className="result-request-card">
      <div>
        <strong>선택한 조건</strong>
        <p>꾸안꾸 · 데이트 · 심플</p>
      </div>
      <div>
        <strong>프롬프트</strong>
        <p>데이트에 어울리지만 너무 꾸민 느낌은 싫어요.</p>
      </div>
    </section>

    <section className="result-reason panel">
      <CheckCircle2 aria-hidden size={20} />
      <div>
        <strong>이렇게 추천했어요</strong>
        <p>편안한 데이트 분위기, 저녁의 쌀쌀한 날씨, 최근 덜 입은 옷을 함께 고려했어요.</p>
      </div>
    </section>

    <section className="recommendation-groups" aria-label="카테고리별 추천 결과">
      {recommendationGroups.map((group) => (
        <article className="recommendation-group panel" key={group.category}>
          <header>
            <div>
              <h2>{group.label}</h2>
              <p>{group.reason}</p>
            </div>
            <span className="owned-callout">내 옷장</span>
          </header>
          <div className="result-card-row">
            {group.items.map((item) => (
              <div className="owned-item-frame" key={item.id}>
                <ClothingCard compact item={item} />
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>

    <button className="primary-button save-outfit-button" type="button">
      <Sparkles aria-hidden size={18} />
      이 코디 저장하기
      <Heart aria-hidden size={18} />
    </button>
  </main>
);

export default RecommendationResultPage;
