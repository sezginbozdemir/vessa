import Typography from "@/components/UI/Typography";

interface InfoProps {
  packageData: { title: string; contents: string[] }[];
  forWho: { title: string; contents: string[] }[];
  benefits: { title: string; contents: string[] }[];
  main: string;
  info: { title: string; content: string } | undefined;
}

const InfoDef: React.FC<InfoProps> = ({
  packageData,
  forWho,
  benefits,
  main,
  info,
}) => {
  return (
    <div className="w-full flex items-start justify-center px-[5rem]">
      <div className="flex flex-col items-start">
        <Typography variant="h2" className="text-blue-300 mb-[24px]">
          {main}
        </Typography>
        <Typography variant="h3" className="custom-blue-text mt-8 mb-8">
          {info?.title}
        </Typography>
        <Typography variant="paragraph">{info?.content}</Typography>
        {packageData.map((pkg, index) => (
          <div key={index}>
            <Typography variant="h3" className="custom-blue-text mt-8 mb-8">
              {pkg.title}
            </Typography>
            <Typography variant="paragraph" className="ml-5 opacity-75 mb-8">
              {pkg.contents.map((content, idx) => (
                <li key={idx}>
                  <span dangerouslySetInnerHTML={{ __html: content }} />
                </li>
              ))}
            </Typography>
          </div>
        ))}
        {forWho.map((item, index) => (
          <div key={index}>
            <Typography variant="h3" className="custom-blue-text mt-8 mb-8">
              {item.title}
            </Typography>
            <Typography variant="paragraph" className="ml-5 opacity-75 mb-8">
              <ul className="ml-5 list-decimal">
                {item.contents.map((content, idx) => (
                  <li key={idx}>{content} </li>
                ))}
              </ul>
            </Typography>
          </div>
        ))}
        {benefits.map((item, index) => (
          <div key={index}>
            <Typography variant="h3" className="custom-blue-text mt-8 mb-8">
              {item.title}
            </Typography>
            <Typography variant="detailsBold" className="opacity-75 mb-8">
              <ul className="list-none flex flex-col gap-5 ml-5">
                {item.contents.map((content, idx) => (
                  <li
                    className=" pl-[4rem] relative before:content-['✓'] before:text-white before:bg-blue-800 before:rounded-[5px] before:px-[5px]  before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"
                    key={idx}
                  >
                    {content}
                  </li>
                ))}
              </ul>
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoDef;
