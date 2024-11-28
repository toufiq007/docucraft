import Image from "next/image";
import Link from "next/link";
// import logo from "../public/logo.svg";

const Logo = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <Link aria-label="Home" href="/">
          <Image
            src="/logo.svg"
            alt="Protocol"
            width={100}
            height={24}
            priority
            className="h-6 w-auto"
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;
