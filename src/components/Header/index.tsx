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
    <div className="flex flex-row justify-between p-4">
      <div className="flex flex-col">
        <p className="text-2xl font-bold ">{title}</p>
        {description && <p className="text-base font-normal">{description} </p>}
      </div>

      {showButton && <Button startIcon={icon}>{buttonText}</Button>}
    </div>
  );
};
