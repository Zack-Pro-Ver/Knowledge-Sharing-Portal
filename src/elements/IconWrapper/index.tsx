interface Props {
  bgColor: string;
  children: React.ReactNode;
  className?: string;
}
export const IconWrapper = ({ bgColor, children, className = "" }: Props) => {
  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center ${bgColor} ${className}`}
    >
      {children}
    </div>
  );
};
