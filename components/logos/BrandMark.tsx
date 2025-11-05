import Link from "next/link";
import * as React from "react";
import { HeartIcon } from "@/components/icons/hearticon";

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

type WrapperProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
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
  const Wrapper: React.FC<WrapperProps> = href
    ? (props: WrapperProps) => <Link href={href} {...props} />
    : (props: WrapperProps) => <div {...props} />;

  return (
    <Wrapper
      className={`inline-flex items-center gap-[0.5ch] ${className}`}
      style={sizeRem ? { fontSize: `${sizeRem}rem` } : undefined}
    >
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
    </Wrapper>
  );
}

export default BrandMark;

