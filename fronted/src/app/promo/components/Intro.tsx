import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/UI/Typography";

interface IntroProps {
  title: string;
  title2: string;
  subTitle: string;
  price: string;
  oldPrice: string;
  availability: string;
}

const Intro: React.FC<IntroProps> = ({
  price,
  oldPrice,
  title,
  title2,
  subTitle,
  availability,
}) => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <Link href="/" className="inline-block">
          <Image
            src="/images/vessa-logo.png"
            alt="Vessa Hospital"
            width={165}
            height={54}
          />
        </Link>
      </div>
      <div className="flex flex-col items-center mt-36">
        <Typography variant="h2" className="custom-blue-text">
          {title}
        </Typography>
        <Typography variant="h2" className="custom-blue-text">
          {title2}
        </Typography>
        <Typography
          variant="menu"
          className="mt-10 inline-flex items-center gap-1"
        >
          peste
          <Typography variant="h3" className="inline mr-3 ml-3 ">
            <span className="custom-blue-text"> {subTitle} </span>
          </Typography>
          din locuri deja ocupate
        </Typography>
        <div className="flex justify-between mt-36 gap-36">
          <div className=" relative flex flex-col items-center justify-center">
            <Image
              src="/images/line-through.png"
              alt="Strikethrough"
              layout="intrinsic"
              width={100}
              height={10}
              className="absolute top-1/2 transform -translate-y-1/2"
            />
            <Typography variant="h3">Preț normal</Typography>
            <Typography variant="h3" className="custom-blue-text">
              {oldPrice}
            </Typography>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/double-arrow-rounded.png"
              width={34}
              height={34}
              alt="Vessa Hospital"
            />
          </div>

          <div className="flex flex-col items-center">
            <Typography variant="h3">Preț promoțional</Typography>
            <Typography variant="h2" className="custom-blue-text">
              {price}
            </Typography>
            <Typography variant="paragraph">
              ( preț valabil {availability} )
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
export default Intro;
