import Button from "../../elements/Button/index";

interface Props {
  title: string;  
  description?: string;
  buttonText?: string;
  icon?: React.ReactNode;
}
export const Header = ({ title, description, buttonText, icon }: Props) => {
  return (
    <div className="flex flex-row justify-between p-4">
      <div className="flex flex-col">
        <p className="text-2xl font-bold ">{title}</p>
        {description && <p className="text-base font-normal">{description} </p>}
      </div>

      {buttonText && <Button startIcon={icon}>{buttonText}</Button>}
    </div>
  );
};
