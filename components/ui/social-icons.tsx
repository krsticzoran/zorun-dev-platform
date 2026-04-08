import { socials } from "@/components/ui/socials";

export function SocialsIcons() {
  return (
    <div className="flex gap-4">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-white opacity-75 hover:opacity-100 transition"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}
