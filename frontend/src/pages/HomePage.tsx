import {
  Bell,
  Bot,
  CalendarCheck,
  ChevronRight,
  CloudSun,
  Leaf,
  Plus,
  Shirt,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { clothingItems, communityPosts } from "../data/mockData";

const todayOutfit = [clothingItems[0], clothingItems[4], clothingItems[12]];
const waitingItem = clothingItems[10];
const popularPosts = communityPosts.slice(0, 3);

const quickActions = [
  { label: "옷 등록", icon: Plus, to: "/closet/register" },
  { label: "코디 추천", icon: Sparkles, to: "/recommend" },
  { label: "착용 기록", icon: CalendarCheck, to: "/closet" },
  { label: "AI 미리보기", icon: Bot, to: "/recommend/result" },
];

const HomePage = () => (
  <main className="screen home-screen">
    <section className="home-greeting">
      <div>
        <h1>안녕하세요, 초록옷장님</h1>
        <p>
          <CloudSun aria-hidden size={16} />
          오늘 18°C · 저녁엔 쌀쌀해요
        </p>
      </div>
      <button className="home-alert-button" title="알림" type="button">
        <Bell aria-hidden size={20} />
      </button>
    </section>

    <section className="today-outfit-card" aria-label="오늘 추천 코디">
      <div className="home-section-title">
        <span>오늘 이런 옷 어때요?</span>
        <h2>흰 셔츠 + 연청 데님 + 검정 로퍼</h2>
      </div>
      <p>내 옷장 아이템 3개로 완성했어요.</p>
      <div className="outfit-preview-row">
        {todayOutfit.map((item) => (
          <div className="outfit-preview-item" key={item.id}>
            <img alt={item.name} src={item.imageUrl} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="home-badge-row">
        <span>내 옷장</span>
        <span>새 옷 없이 완성</span>
        <span>오늘 날씨에 적합</span>
      </div>
      <div className="today-outfit-actions">
        <Link className="primary-button" to="/recommend/result">
          코디 자세히 보기
        </Link>
        <button className="secondary-button" type="button">
          오늘 입었어요
        </button>
      </div>
    </section>

    <section className="waiting-card">
      <div>
        <span>옷장에서 기다리는 옷</span>
        <h2>{waitingItem.name}가 43일째 기다리고 있어요</h2>
        <p>가벼운 아우터가 필요한 날에 다시 꺼내기 좋아요.</p>
      </div>
      <img alt={waitingItem.name} src={waitingItem.imageUrl} />
      <Link to="/recommend">이 옷으로 코디 보기</Link>
    </section>

    <section className="weather-tip-card">
      <CloudSun aria-hidden size={22} />
      <div>
        <h2>일교차가 커요</h2>
        <p>얇은 아우터를 챙겨보세요. 내 옷장 가디건 2개 발견</p>
      </div>
    </section>

    <section className="quick-actions" aria-label="빠른 실행">
      {quickActions.map(({ label, icon: Icon, to }) => (
        <Link key={label} to={to}>
          <Icon aria-hidden size={20} />
          <span>{label}</span>
        </Link>
      ))}
    </section>

    <section className="home-feed-section">
      <div className="home-list-header">
        <h2>오늘 올라온 코디</h2>
        <Link to="/community">
          더보기
          <ChevronRight aria-hidden size={16} />
        </Link>
      </div>
      <div className="popular-outfit-scroll">
        {popularPosts.map((post) => (
          <article className="popular-outfit-card" key={post.id}>
            <img alt={post.title} src={post.imageUrl} />
            <div>
              <h3>{post.title}</h3>
              <p>{post.tags.map((tag) => `#${tag}`).join(" ")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="weekly-summary-card">
      <div className="home-list-header">
        <h2>이번 주 옷장 활용</h2>
        <Leaf aria-hidden size={18} />
      </div>
      <div className="weekly-summary-grid">
        <div>
          <strong>5개</strong>
          <span>새 옷 없이 완성한 코디</span>
        </div>
        <div>
          <strong>3개</strong>
          <span>다시 입은 옷</span>
        </div>
        <div>
          <strong>{clothingItems.length}벌</strong>
          <span>현재 옷장 아이템</span>
        </div>
      </div>
    </section>
  </main>
);

export default HomePage;
