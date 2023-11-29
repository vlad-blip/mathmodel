import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";

import styles from "./Search.module.scss";

type SearchType = {
  placeholder: string;
  className?: string;
};

export default function Search({ placeholder, className = "" }: SearchType) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const category = searchParams.get("category")
    ? `category=${searchParams.get("category")}&`
    : "";

  const pathname = usePathname();

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`${pathname}/?${category}search=${event.target.value}`, "", {
      scroll: false,
    });
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <FontAwesomeIcon icon={faMagnifyingGlass} width={"20px"} />
      <input
        type="text"
        placeholder={placeholder}
        onChange={searchChangeHandler}
      />
    </div>
  );
}
