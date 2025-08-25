import { Stack, Typography } from "../../elements";
import Button from "../../elements/Button/index";

interface BaseProps {
  title: string;
  description?: string;
}

interface ButtonRequiredProps extends BaseProps {
  showButton: true;
  buttonText: string;
  icon: React.ReactNode;
}

interface ButtonOptionalProps extends BaseProps {
  showButton: false;
  buttonText?: string;
  icon?: React.ReactNode;
}

type HeaderProps = ButtonRequiredProps | ButtonOptionalProps;

export const Header = ({
  title,
  description,
  showButton,
  buttonText,
  icon,
}: HeaderProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={4}
    >
      {/* Left side: title + description */}
      <Stack direction="column" spacing={0.5}>
        <Typography variant="h5" className="font-bold">
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" className="font-normal">
            {description}
          </Typography>
        )}
      </Stack>

      {/* Right side: button (only if showButton true) */}
      {showButton && <Button startIcon={icon}>{buttonText}</Button>}
    </Stack>
  );
};
