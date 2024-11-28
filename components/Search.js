import Image from "next/image";

const Search = () => {
  return (
    <>
      <div classNameName="hidden lg:block lg:max-w-md lg:flex-auto">
        <button
          type="button"
          classNameName="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        >
          <Image src="./search.svg" className="h-5 w-5" alt="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            classNameName="flex-1 focus:border-none focus:outline-none"
          />
          <kbd classNameName="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
            <kbd classNameName="font-sans">Ctrl </kbd>
            <kbd classNameName="font-sans">K</kbd>
          </kbd>
        </button>
      </div>
    </>
  );
};

export default Search;
