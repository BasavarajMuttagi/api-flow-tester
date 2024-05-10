import { ReactNode } from "react";
function ResponseToolTip({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <div data-tooltip-id={id} className="self-end">
      {children}
    </div>
  );
}

export default ResponseToolTip;
