import Image from "next/image";
import type { SitePhoto } from "@/lib/images";

type Props = {
  photo: SitePhoto;
  /** Tailwind classes for the wrapping <figure> — spacing lives here. */
  className?: string;
  /** Passed to next/image so the browser picks the right source width. */
  sizes?: string;
};

/**
 * Renders one photo slot. Returns null while the asset is unset, so an
 * unfilled slot leaves the surrounding layout exactly as it was.
 */
export default function SectionPhoto({
  photo,
  className = "",
  sizes = "(min-width: 1024px) 1024px, 100vw",
}: Props) {
  if (!photo.src) return null;

  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-sand-300 bg-sand-100 shadow-card">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          priority={photo.priority}
          loading={photo.priority ? undefined : "lazy"}
          className="h-auto w-full object-cover"
        />
      </div>
      {(photo.caption || photo.credit) && (
        <figcaption className="mt-2.5 text-[13px] leading-relaxed text-ink-400">
          {photo.caption}
          {photo.credit && (
            <>
              {photo.caption ? " " : ""}
              <span className="text-ink-400/80">
                Photo:{" "}
                <a
                  href={photo.credit.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline underline-offset-2 transition hover:text-brand-700"
                >
                  {photo.credit.photographer}
                </a>{" "}
                / Pexels
              </span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
