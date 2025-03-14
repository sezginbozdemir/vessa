type TypographyProps = {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "paragraph"
    | "menu"
    | "details"
    | "buttonText"
    | "detailsBold";
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Typography = ({
  variant,
  children,
  className,
  onClick,
}: TypographyProps) => {
  const variants = {
    h1: "text-h1 md:text-[40px] sm:text-[32px] font-montserrat",
    h2: "text-h2 md:text-[35px] sm:text-[28px] font-montserrat",
    h3: "text-h3 md:text-[18px] sm:text-[15px] font-montserrat",
    paragraph:
      "text-paragraph md:text-[15px] sm:text-[15px] xs:text-[13px] font-openSans",
    menu: "text-menu md:text-[16px] sm:text-[16px] xs:text-[13px] font-montserrat",
    details:
      "text-details md:text-[12px] sm:text-[12px] xs:text-[12px] font-openSans",
    buttonText:
      "text-buttonText md:text-[16px] sm:text-[16px] xs:text-[13px] font-openSans",
    detailsBold: "text-detailsBold md:text-[15px] sm:text-[12px] font-openSans",
  };

  return (
    <div onClick={onClick} className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Typography;
