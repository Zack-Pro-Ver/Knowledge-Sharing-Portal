import Avatar from '../../elements/Avatar';
import Stack from '../../elements/Stack';
import Typography from '../../elements/Typography';
import { RiStarFill } from '@remixicon/react';
import { SocialIcons } from './SocialIcons';
const MyProfileCard = () => {
  return (
    <div className="p-2 bg-white border border-gray-100 rounded-md">
    <Stack direction="row" spacing={4} alignItems="center" >
      <Avatar
        size="large"
        variant="circular"
        className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-bold text-xl flex items-center justify-center"
      >
        JD
      </Avatar>
      <div className='flex-1'>
      <Stack direction="column" spacing={1}>
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
        <SocialIcons/>
      </Stack>
      </div>
    </Stack>
    </div>
  );
};

export default MyProfileCard;
