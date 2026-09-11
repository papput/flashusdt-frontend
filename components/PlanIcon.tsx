import type { IconType } from "react-icons";
import { RiFlashlightFill, RiShieldFlashFill, RiSparklingFill, RiTimerFlashFill } from "react-icons/ri";

const icons: Record<string, IconType> = {
  zap: RiFlashlightFill,
  shield: RiShieldFlashFill,
  clock: RiTimerFlashFill,
  sparkles: RiSparklingFill,
};

export function PlanIcon({
  name,
  className = "text-3xl",
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? RiFlashlightFill;
  return <Icon className={className} />;
}
