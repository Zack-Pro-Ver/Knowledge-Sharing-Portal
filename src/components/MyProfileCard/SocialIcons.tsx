import { RiLinksLine, RiGithubLine, RiTwitterLine } from "@remixicon/react";

export const SocialIcons = [
  {
    icon: <RiLinksLine className="w-4 h-4" />,
    label: "Website",
    variant: "primary" as const,
    href: "https://google.com",
  },
  {
    icon: <RiGithubLine className="w-4 h-4" />,
    label: "GitHub",
    variant: "default" as const,
    href: "https://github.com",
  },
  {
    icon: <RiTwitterLine className="w-4 h-4" />,
    label: "Twitter",
    variant: "primary" as const,
    href: "https://twitter.com",
  },
];
