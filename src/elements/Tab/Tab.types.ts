export interface TabProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

export interface TabsProps {
    tabs: { label: string }[];
    activeIndex: number;
    onTabChange: (index: number) => void;
    className?: string;
}

export interface TabClasses {
    root: string;
    tab: string;
    active: string;
    inactive: string;
}
