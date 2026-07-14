import { FlowerIcon, HeartIcon, MoonIcon, MountainIcon, PawIcon } from "../icons";

const ICON_GOLD = "#d6c19a";

export default function ValuesStrip() {
  return (
    <div className="values">
      <div className="values-row">
        <span className="values-item">
          <HeartIcon fill={ICON_GOLD} size={18} />
          Free to join
        </span>
        <span className="values-item">
          <PawIcon fill={ICON_GOLD} size={19} />
          Dogs invited
        </span>
        <span className="values-item">
          <MountainIcon fill={ICON_GOLD} size={19} />
          All paces welcome
        </span>
        <span className="values-item">
          <FlowerIcon fill={ICON_GOLD} size={19} />
          Women only
        </span>
        <span className="values-item">
          <MoonIcon fill={ICON_GOLD} size={17} />
          Twice a month
        </span>
      </div>
    </div>
  );
}
