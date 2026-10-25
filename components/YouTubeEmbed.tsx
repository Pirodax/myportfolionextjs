/**
 * A hosted demo video, playing in place rather than sending the visitor away.
 *
 * Served from youtube-nocookie.com and loaded lazily, so the player only costs
 * anything once the visitor has scrolled to it. No autoplay: Sign2Speak's whole
 * point is the speech it produces, and browsers only allow autoplay on muted
 * video — a muted demo of a talking system would say nothing.
 */
export default function YouTubeEmbed({
  id,
  title,
  caption,
  className,
}: {
  id: string;
  title: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative aspect-video overflow-hidden border border-rule bg-surface">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-2.5 text-sm text-ink-2">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
