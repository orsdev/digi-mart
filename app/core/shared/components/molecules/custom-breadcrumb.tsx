"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../atoms";
import { Fragment } from "react";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  title: string;
}

export const CustomBreadcrumb = ({ title }: BreadcrumbProps) => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div className="overflow-hidden shadow-breadcrumb pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[165px]">
      <div className="border-t border-gray-300">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-5 xl:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="font-semibold text-xl sm:text-2xl xl:text-4xl">
              {title}
            </h1>

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
                {segments.map((segment, index) => {
                  const href = `/${segments.slice(0, index + 1).join("/")}`;
                  const isLast = index === segments.length - 1;
                  const segmentName = segment
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

                  return (
                    <Fragment key={href}>
                      {index > 0 && <BreadcrumbSeparator />}
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage className="text-main font font-semibold">
                            {segmentName}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink asChild>
                            <Link href={href}>{segmentName}</Link>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};
