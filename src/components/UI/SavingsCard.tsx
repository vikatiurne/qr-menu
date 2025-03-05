interface SavingsCardProps {
  value?: string;
  description?: string;
  imageSrc?: string;
  altText?: string;
}

const SavingsCard: React.FC<SavingsCardProps> = ({
  value,
  description,
  imageSrc,
  altText,
}) => {
  return (
    <div
      className={`${!imageSrc && 'flex flex-col justify-center items-center px-2 bg-gradientToTop text-white text-center uppercase rounded-[1.25rem] mobile:rounded-[.625rem]'} w-full h-full aspect-[4/3]`}
    >
      {imageSrc ? (
        <img className="w-full h-full" src={imageSrc} alt={altText} />
      ) : (
        <>
          <span className="font-bold leading-[1.0] text-[210%] xl:text-[180%] sm:mb-[.375rem] lg:mb-[.625rem] lg:text-[250%] msm:text-[7vw]">
            {value}
          </span>
          <p className="text-[1.375rem] xl:text-[1.25rem] lg:text-[2.125rem] msm:text-[4vw]">
            {description}
          </p>
        </>
      )}
    </div>
  );
};

export default SavingsCard;
