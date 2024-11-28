import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <Link aria-label="Home" href="/">
          <Image
            src="./logo.svg"
            alt="Protocol"
            className="h-6 w-auto"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;
