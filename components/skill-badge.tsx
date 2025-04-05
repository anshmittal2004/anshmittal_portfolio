import Link from "next/link";

interface SkillBadgeProps {
  name: string;
  href?: string;
  className?: string;
}

export default function SkillBadge({ name, href, className = "" }: SkillBadgeProps) {
  const badge = (
    <span className={`inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ${className}`}>
      {name}
    </span>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
      {badge}
    </Link>
  ) : (
    badge
  );
}