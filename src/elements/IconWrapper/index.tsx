interface Props {
  bgColor: string;
  children: React.ReactNode;
  className?: string;
}
export const IconWrapper = ({ bgColor, children, className }: Props) => {
  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor} ${className}`}
    >
      {children}
    </div>
  );
};
