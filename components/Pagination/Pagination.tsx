import { Pagination as MUIPagination } from "@mui/material";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

import styles from "./Pagination.module.scss";

export default function Pagination({
  totalPages,
  className,
}: {
  totalPages: number;
  className?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const url = createPageURL(value);
    router.push(url, url, { scroll: false });
  };

  return (
    <MUIPagination
      className={`${styles.pagination} ${className}`}
      size="large"
      count={totalPages}
      defaultPage={currentPage}
      onChange={handlePageChange}
    />
  );
}
