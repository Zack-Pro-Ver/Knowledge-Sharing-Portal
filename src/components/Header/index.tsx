import Button from "../../elements/Button/index";

interface BaseProps {
  title: string;
  description?: string;
  buttonText?: string;
  icon?: React.ReactNode;
}

type HeaderProps = ButtonRequiredProps | ButtonOptionalProps;

export const Header = ({ title, description, showButton, buttonText, icon }: HeaderProps) => {
  return (
    <div className="flex flex-row justify-between p-4">
      <div className="flex ">
        <p className="text-2xl font-bold ">{title}</p>
        {description && <p className="text-base font-normal">{description} </p>}
      </div>

      {showButton && (
        <Button startIcon={icon}>{buttonText}</Button>
      )}
    </div>
  );
};