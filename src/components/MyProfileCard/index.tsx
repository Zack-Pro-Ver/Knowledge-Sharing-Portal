import Avatar from '../../elements/Avatar';
import Stack from '../../elements/Stack';
import Typography from '../../elements/Typography';
import Link from '../../elements/Link';
import {
  RiStarFill,
  RiLinksFill,
  RiGithubFill,
  RiTwitterFill
} from '@remixicon/react';

const MyProfileCard = () => {
  return (
    <Stack direction="row" spacing={4} alignItems="center" className="p-2 bg-white border border-gray-100 rounded-md">
      <Avatar
        size="large"
        variant="circular"
        className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-bold text-xl flex items-center justify-center"
      >
        JD
      </Avatar>
      <Stack direction="column" spacing={1} className="flex-1">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="h6" component="span" fontWeight="semibold">
            John Doe
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <RiStarFill className="w-4 h-4 text-yellow-400" />
            <Typography variant="body2" fontWeight="semibold" color="textPrimary" component="span">
              1,247
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" color="textSecondary" component="span">
          San Francisco, CA
        </Typography>
        <Stack direction="row" spacing={3}>
          {[
            { icon: RiLinksFill, label: 'Website', variant: 'primary' as const, href: 'https://google.com' },
            { icon: RiGithubFill, label: 'GitHub', variant: 'default' as const, href: 'https://github.com' },
            { icon: RiTwitterFill, label: 'Twitter', variant: 'primary' as const, href: 'https://twitter.com'}
          ].map(({ icon: Icon, label, variant, href }) => (
            <Link key={label} href={href} variant={variant} size="small" underline="hover">
              <Stack direction="row" spacing={1} alignItems="center">
                <Icon className="w-4 h-4" />
                <Typography variant="body2" component="span">{label}</Typography>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MyProfileCard;
