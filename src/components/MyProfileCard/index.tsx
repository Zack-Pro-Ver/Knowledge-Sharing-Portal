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
            <Typography variant="body2" fontWeight="semibold" color="textPrimary">
              1,247
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" color="textSecondary">
          San Francisco, CA
        </Typography>
        <Stack direction="row" spacing={3}>
          <Link href="#" variant="primary" size="small" underline="hover">
            <Stack direction="row" spacing={1} alignItems="center">
              <RiLinksFill className="w-4 h-4" />
              <span>Website</span>
            </Stack>
          </Link>
          <Link href="#" variant="default" size="small" underline="hover">
            <Stack direction="row" spacing={1} alignItems="center">
              <RiGithubFill className="w-4 h-4" />
              <span>GitHub</span>
            </Stack>
          </Link>
          <Link href="#" variant="primary" size="small" underline="hover">
            <Stack direction="row" spacing={1} alignItems="center">
              <RiTwitterFill className="w-4 h-4" />
              <span>Twitter</span>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MyProfileCard;
