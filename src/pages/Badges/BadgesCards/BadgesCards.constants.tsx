import type { TypographyColor } from "../../../elements/Typography/Typography.types";

export interface CardItem {
    count: string;
    badge: string;
}

export const countColor: Record<string, TypographyColor> = {
    "Silver": "secondary",
    "Total Badges": "textPrimary",
    "Bronze": "warning",
    "Gold": "warning",
    "Platinum": "primary",
};

export const cardData: CardItem[] = [
    {
        count: "8",
        badge: "Total Badges",
    },
    {
        count: "3",
        badge: "Bronze",
    },
    {
        count: "3",
        badge: "Silver",
    },
    {
        count: "2",
        badge: "Gold",
    },
    {
        count: "0",
        badge: "Platinum",
    }
];