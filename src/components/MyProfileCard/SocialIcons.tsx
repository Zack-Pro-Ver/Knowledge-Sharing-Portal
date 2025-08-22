import { Stack } from "../../elements";
import Link from '../../elements/Link';
import {Typography} from "../../elements";
import {
  RiLinksFill,
  RiGithubFill,
  RiTwitterLine
} from '@remixicon/react';

export const SocialIcons=() =>{
    return <Stack direction="row" spacing={3}>
          {[
            { icon: RiLinksFill, label: 'Website', variant: 'primary' as const, href: 'https://google.com' },
            { icon: RiGithubFill, label: 'GitHub', variant: 'default' as const, href: 'https://github.com' },
            { icon: RiTwitterLine, label: 'Twitter', variant: 'primary' as const, href: 'https://twitter.com'}
          ].map(({ icon: Icon, label, variant, href }) => (
            <Link key={label} href={href} variant={variant} size="small" underline="hover">
              <Stack direction="row" spacing={1} alignItems="center">
                <Icon className="w-4 h-4" />
                <Typography variant="body2" component="span">{label}</Typography>
              </Stack>
            </Link>
          ))}
        </Stack>
}
