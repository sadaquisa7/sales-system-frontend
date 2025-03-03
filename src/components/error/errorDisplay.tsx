import Image from "next/image";
import Link from "next/link";
import { ErrorDisplayProps } from "@/interfaces/error/errorDisplay.interface";
const ErrorDisplayComponent: React.FC<ErrorDisplayProps> = ({
  information,
  width = "w-full",
  height = "h-full",
  minWidth = "",
  minHeight = "",
  maxWidth = "",
  maxHeight = "",
}) => {
  return (
    <div
      className={[
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        "flex flex-col font-sans font-poppins",
      ].join(" ")}
    >
      <div className="flex flex-col items-center justify-center flex-grow">
        {information ? (
          <div className="grid gap-6 justify-items-center lg:gap-8">
            <Image
              src={information.img}
              alt="error-icon"
              className="max-w-full"
              width={200}
              height={200}
            />
            <div className="text-center order-[-1] lg:order-[0] space-y-5">
              <span className="block text-[60px] leading-[60px] font-extrabold lg:text-[96px] lg:leading-[96px]">
                {information.status}
              </span>
              <p className="text-green-joinnus text-[20px] font-black m-0 lg:text-[24px]">
                {information.message}
              </p>
            </div>
            <p
              className="text-center text-[14px] font-medium m-0 max-w-[425px] text-[#4B545C] lg:text-[16px]"
              dangerouslySetInnerHTML={{ __html: information.description }}
            />
          </div>
        ) : (
          <div>
            <p className="text-green-joinnus text-[20px] font-black m-0 lg:text-[24px]">
              An error occurred on client
            </p>
          </div>
        )}
        <div className="flex flex-col items-center justify-center gap-3 mt-8 lg:mt-10">
          <Link
            href="/"
            className="py-[10px] min-w-[220px] max-w-[312px] border-none text-[14px] w-full lg:py-[12px] lg:text-[16px] lg:w-auto rounded-[32px] bg-blue-joinnus-1 text-white text-center font-semibold"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplayComponent;
