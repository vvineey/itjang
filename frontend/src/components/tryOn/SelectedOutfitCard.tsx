import { CheckCircle2 } from "lucide-react";

export type OutfitSource = "내 옷장" | "안 입던 옷" | "중고 추천" | "새 상품";

export type TryOnOutfitItem = {
  category: string;
  name: string;
  source: OutfitSource;
  color: string;
  style: string;
  owned: boolean;
};

type SelectedOutfitCardProps = {
  item: TryOnOutfitItem;
};

const sourceClassName: Record<OutfitSource, string> = {
  "내 옷장": "is-owned",
  "안 입던 옷": "is-waiting",
  "중고 추천": "is-used",
  "새 상품": "is-new",
};

const SelectedOutfitCard = ({ item }: SelectedOutfitCardProps) => (
  <article className="selected-outfit-card">
    <div className="selected-outfit-card__header">
      <span>{item.category}</span>
      <strong className={sourceClassName[item.source]}>
        {item.owned ? <CheckCircle2 aria-hidden size={13} /> : null}
        {item.source}
      </strong>
    </div>
    <h3>{item.name}</h3>
    <div className="selected-outfit-card__meta">
      <span>{item.color}</span>
      <span>{item.style}</span>
    </div>
  </article>
);

export default SelectedOutfitCard;
