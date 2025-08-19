import { useState } from "react";
import { IconButton, IconDropdown } from "../../elements";
import { theme } from "../../theme";

interface NotificationItem {
  label: string;
  action: () => void;
}

interface NotificationMenuProps {
  items: NotificationItem[];
  badgeCount?: number;
}

function NotificationMenu({ items, badgeCount = 0 }: NotificationMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <i
          className="ri-notification-3-line text-xl"
          style={{ color: theme.colors.textDark }}
        />
        {badgeCount > 0 && (
          <span
            className="absolute -top-1 -right-1 h-4 w-4 rounded-full flex items-center justify-center text-xs font-semibold"
            style={{
              backgroundColor: theme.colors.danger,
              color: theme.colors.white,
            }}
          >
            {badgeCount}
          </span>
        )}
      </IconButton>

      <IconDropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Notifications"
        items={items}
      />
    </div>
  );
}

export default NotificationMenu;
