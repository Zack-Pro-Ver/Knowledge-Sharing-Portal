import { useState } from "react";
import { Dropdown, Avatar } from "../../elements";
import { theme } from "../../theme";
import type { DropdownOption } from "../../elements/Dropdown/Dropdown.types";
import { useNavigate } from "react-router-dom";

interface UserMenuProps {
  avatar: {
    initials: string;
    name: string;
    backgroundColor?: string;
    textColor?: string;
  };
  options: DropdownOption[];
}

function UserMenu({ avatar, options }: UserMenuProps) {
  const [value, setValue] = useState<string | null>(null);
  const navigate = useNavigate();

  const renderOption = (option: DropdownOption) => (
    <span className="flex items-center">
      <i className={`${option.icon} mr-2`} />
      {option.label}
    </span>
  );

  const onChange = (val: string | number) => {
    setValue(null);
    if (val === "profile") navigate("/profile");
    if (val === "settings") navigate("/settings");
    if (val === "logout") console.log("Logging out...");
  };

  return (
    <Dropdown
      options={options}
      value={value}
      onChange={onChange}
      renderOption={renderOption}
      placeholder={
        <span className="flex items-center gap-2">
          <Avatar
            size="small"
            variant="circular"
            backgroundColor={avatar.backgroundColor || theme.colors.primary}
            textColor={avatar.textColor || theme.colors.white}
          >
            {avatar.initials}
          </Avatar>
          <span
            className="text-base font-medium"
            style={{ color: theme.colors.textDark }}
          >
            {avatar.name}
          </span>
        </span>
      }
    />
  );
}

export default UserMenu;
