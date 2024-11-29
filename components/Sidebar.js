import Link from "next/link";

const SidebarNav = ({ docs }) => {
  // find root nodes
  const roots = docs.filter((doc) => !doc.parent);

  // group nonroots nodes
  const nonRoots = Object.groupBy(
    docs.filter((doc) => doc.parent),
    ({ parent }) => parent
  );
  console.log(nonRoots, "this is the root docs");
  return (
    <>
      <nav className="hidden lg:mt-10 lg:block">
        <ul role="list" className="border-l border-transparent">
          {roots.map((root) => {
            return (
              <>
                <li key={root.id} className="relative">
                  <Link
                    aria-current="page"
                    className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                    href={`/docs/${root.id}`}
                  >
                    <span className="truncate">{root.title}</span>
                  </Link>
                  {nonRoots[root.id] && (
                    <ul role="list" className="border-l border-transparent">
                      {nonRoots[root.id].map((subRoot) => (
                        <li key={subRoot.id}>
                          <Link
                            aria-current="page"
                            className="flex justify-between gap-2 py-1 pl-8 pr-3 text-sm text-zinc-900 transition dark:text-white"
                            href={`/docs/${root.id}/${subRoot.id}`}
                          >
                            <span className="truncate">{subRoot.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default SidebarNav;
