import { type ComponentProps, type ReactNode } from "react";
import JustAnchor from "../elements/JustAnchor";
import JustButton from "../elements/JustButton";

type PaginationProps = {
  totalItems: number,
  itemsPerPage: number,
  currentPage: number,
  queryParams: Record<string, unknown>,
  renderButton?: ComponentProps<typeof JustButton>["render"],
  renderLink?: ComponentProps<typeof JustAnchor>["render"],
};

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  queryParams,
  renderButton,
  renderLink,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const buildHref = (page: number) => {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(queryParams)) {
      searchParams.append(key, `${value}`);
    }
    if (page === 1) {
      searchParams.delete("page");
    } else {
      searchParams.set("page", page.toString());
    }
    return `?${searchParams}`;
  };

  const Item = (props: { page?: number, active?: boolean, disabled?: boolean, children?: ReactNode }) => {
    if (props.active || props.disabled || typeof props.page === "undefined") {
      return (
        <JustButton render={renderButton} disabled>
          <>{props.children || props.page}</>
        </JustButton>
      );
    }
    return (
      <JustAnchor render={renderLink} href={buildHref(props.page)}>
        <>{props.children || props.page}</>
      </JustAnchor>
    );
  };

  return (
    <div className="flex gap-3">
      <Item page={currentPage - 1} disabled={currentPage <= 1}>&laquo;</Item>
      {currentPage > 3 && (
        <Item page={1} />
      )}
      {currentPage === 5 && (
        <Item page={2} />
      )}
      {currentPage > 5 && (
        <Item disabled>&hellip;</Item>
      )}
      {currentPage > 2 && (
        <Item page={currentPage - 2} />
      )}
      {currentPage > 1 && (
        <Item page={currentPage - 1} />
      )}
      <Item active>{currentPage}</Item>
      {currentPage <= totalPages - 1 && (
        <Item page={currentPage + 1} />
      )}
      {currentPage <= totalPages - 2 && (
        <Item page={currentPage + 2} />
      )}
      {currentPage <= totalPages - 5 && (
        <Item disabled>&hellip;</Item>
      )}
      {currentPage === totalPages - 4 && (
        <Item page={totalPages - 1} />
      )}
      {currentPage <= totalPages - 3 && (
        <Item page={totalPages} />
      )}
      <Item page={currentPage + 1} disabled={currentPage >= totalPages}>
        &raquo;
      </Item>
    </div>
  );
};

export default Pagination;
