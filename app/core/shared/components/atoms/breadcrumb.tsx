import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  pages: Array<string>;
}

export const Breadcrumb = ({ title, pages }: BreadcrumbProps) => {
  return (
    <div className="overflow-hidden shadow-breadcrumb pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[165px]">
      <div className="border-t border-gray-300">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-5 xl:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="font-semibold text-xl sm:text-2xl xl:text-4xl">
              {title}
            </h1>

            <ul className="flex items-center gap-2">
              <li className="text-sm hover:text-main">
                <Link href="/">Home /</Link>
              </li>

              {pages.length > 0 &&
                pages.map((page, key) => (
                  <li className="text-sm last:text-main capitalize" key={key}>
                    {page}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
