import { type ReactNode } from "react";

type TdxProps = {
  className?: string,
  children?: ReactNode,
};

const Tdx = ({
  className,
  children,
}: TdxProps) => (
  <td className={className}>
    <div className="table w-full table-fixed">
      <span className="table-cell truncate">
        {children}
      </span>
    </div>
  </td>
);

export default Tdx;
