import { CheckCircle2, Heart, RotateCcw } from "lucide-react";
import ClothingCard from "../components/closet/ClothingCard";
import PageHeader from "../components/common/PageHeader";
import { recommendationGroups } from "../data/mockData";

const RecommendationResultPage = () => (
  <main className="screen result-screen">
    <PageHeader
      eyebrow="result"
      title="내 옷장 중심 추천 결과"
      description="가지고 있는 옷을 먼저 보여주고 부족한 아이템만 보조 추천합니다."
      action={
        <button className="icon-button" title="다시 추천" type="button">
          <RotateCcw aria-hidden size={19} />
        </button>
      }
    />

    <section className="result-reason panel">
      <CheckCircle2 aria-hidden size={20} />
      <div>
        <strong>추천 이유</strong>
        <p>선택한 #데이트 #심플 태그와 초록 빈티지 무드에 맞춰 내 옷장 아이템을 우선 조합했어요.</p>
      </div>
    </section>

    <section className="recommendation-groups" aria-label="카테고리별 추천 결과">
      {recommendationGroups.map((group) => (
        <article className="recommendation-group panel" key={group.category}>
          <header>
            <div>
              <p className="eyebrow">{group.category}</p>
              <h2>{group.label}</h2>
            </div>
            <span className="owned-callout">내 옷장에 있는 옷이에요!</span>
          </header>
          <p className="group-reason">{group.reason}</p>
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
      <Heart aria-hidden size={18} />
      이 코디 저장하기
    </button>
  </main>
);

export default RecommendationResultPage;
