import { MapPin, PlusCircle, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import PageHeader from "../components/common/PageHeader";
import { categoryTabs, communityPosts } from "../data/mockData";
import type { ClothingCategory } from "../types";

const tradeTabs = categoryTabs.filter((tab) => tab.key !== "accessory");

const CirculationPage = () => {
  const [activeCategory, setActiveCategory] = useState<ClothingCategory | "all">("all");

  const posts = useMemo(
    () =>
      activeCategory === "all"
        ? communityPosts.filter((post) => post.category !== "accessory")
        : communityPosts.filter((post) => post.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="screen community-screen">
      <PageHeader
        title="순환 옷장"
        description="입지 않는 옷을 필요한 사람에게 이어주세요."
        action={
          <button className="community-upload-button" title="거래 등록" type="button">
            <PlusCircle aria-hidden size={20} />
          </button>
        }
      />

      <label className="community-search">
        <Search aria-hidden size={18} />
        <input placeholder="필요한 옷을 찾아보세요" type="search" />
        <SlidersHorizontal aria-hidden size={18} />
      </label>

      <div className="category-tabs" role="tablist" aria-label="거래 카테고리">
        <button
          aria-selected={activeCategory === "all"}
          className={`category-tab${activeCategory === "all" ? " is-active" : ""}`}
          onClick={() => setActiveCategory("all")}
          role="tab"
          type="button"
        >
          전체
        </button>
        {tradeTabs.map((tab) => (
          <button
            aria-selected={activeCategory === tab.key}
            className={`category-tab${activeCategory === tab.key ? " is-active" : ""}`}
            key={tab.key}
            onClick={() => setActiveCategory(tab.key)}
            role="tab"
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section className="trade-feed" aria-label="순환 옷장 게시글">
        {posts.map((post) => (
          <article className="trade-card panel" key={post.id}>
            <div className="trade-card__image">
              <img alt={post.title} src={post.imageUrl} />
            </div>
            <div className="trade-card__body">
              <div className="trade-card__top">
                <h2>{post.title}</h2>
                <span>{post.status}</span>
              </div>
              <p className="trade-region">
                <MapPin aria-hidden size={14} />
                {post.region}
              </p>
              <strong>{post.price}</strong>
              <div className="trade-tags">
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CirculationPage;
