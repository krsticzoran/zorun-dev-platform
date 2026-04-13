interface WhiteBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function WhiteBox({ children, className = "" }: WhiteBoxProps) {
  return (
    <div
      className={`bg-white px-6 py-10 border-l-4 border-custom-accent mt-10 ${className}`}
    >
      {children}
    </div>
  );
}
