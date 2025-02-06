import Typography from "@/components/UI/Typography";

interface InfoProps {
  packageData: { title: string; contents: string[] }[];
  forWho: string[];
  benefits: string[];
}

const Info: React.FC<InfoProps> = ({ packageData, forWho, benefits }) => {
  return (
    <div className="w-full flex items-start justify-center px-[5rem]">
      <div className="flex flex-col items-start">
        <Typography variant="h2" className="text-blue-300 mb-[5rem]">
          Ce include pachetul?
        </Typography>
        {packageData.map((pkg, index) => (
          <div key={index}>
            <Typography variant="h3" className="custom-blue-text mt-8 mb-8">
              {pkg.title}
            </Typography>
            <Typography variant="paragraph" className="ml-5 opacity-75 mb-8">
              {pkg.contents.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </Typography>
          </div>
        ))}

        <Typography variant="h3" className="mt-8 mb-8">
          Cui i se adresează?
        </Typography>
        <Typography variant="paragraph" className="ml-5 opacity-75 mb-8">
          {forWho.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </Typography>

        <Typography variant="h3" className="mt-8 mb-8">
          Beneficii:
        </Typography>
        <Typography variant="detailsBold" className=" opacity-75 mb-8">
          <ul className="list-none flex flex-col gap-5 ml-5">
            {benefits.map((benefit, idx) => (
              <li
                className=" pl-12 relative before:content-['✓'] before:text-white before:bg-blue-800 before:rounded-[5px] before:px-[5px]  before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"
                key={idx}
              >
                {benefit}
              </li>
            ))}
          </ul>
        </Typography>
      </div>
    </div>
  );
};

export default Info;
