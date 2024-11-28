import Logo from "./Logo";
import Search from "./Search";
import Sidebar from "./Sidebar";
const Header = () => {
  return (
    <>
      <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
        <Logo />
        <Search />
        <Sidebar />
      </header>
    </>
  );
};

export default Header;
