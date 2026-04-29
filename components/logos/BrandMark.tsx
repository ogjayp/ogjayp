import Link from "next/link";import { HeartIcon } from "@/components/icons/hearticon";

type BrandMarkProps = {
  label?: string;
  href?: string;
  className?: string;
  /** Tailwind classes to color the icon (default rose) */
  iconColorClass?: string;
  /** Tailwind classes to color the text (defaults to currentColor) */
  textColorClass?: string;
  /** Hide the heart icon */
  hideIcon?: boolean;
  /** Hide the wordmark text */
  hideText?: boolean;
  /** Scale the whole brand mark by setting font-size in rems. Icon uses 1em so it scales too. */
  sizeRem?: number;
};

export function BrandMark({
  label = "PixelShare",
  href,
  className = "",
  iconColorClass = "text-current",
  textColorClass = "",
  hideIcon = false,
  hideText = false,
  sizeRem,
}: BrandMarkProps) {
  const inner = (
    <>
      {!hideIcon && (
        <HeartIcon className={`inline-block align-middle w-[1em] h-[1em] ${iconColorClass}`} />
      )}
      {!hideText && (
        <span
          className={`text-[1.05rem] font-semibold tracking-[-0.01em] md:tracking-[-0.015em] ${textColorClass}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {label}
        </span>
      )}
    </>
  );

  const classNameMerged = `inline-flex items-center gap-[0.5ch] ${className}`;
  const styleMerged = sizeRem ? { fontSize: `${sizeRem}rem` } : undefined;

  if (href) {
    return (
      <Link href={href} className={classNameMerged} style={styleMerged}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={classNameMerged} style={styleMerged}>
      {inner}
    </div>
  );
}

export default BrandMark;

