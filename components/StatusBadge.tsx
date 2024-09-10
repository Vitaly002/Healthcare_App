// StatusBadge component renders a badge with an icon and text 
// indicating the current status. The badge's background color 
// and text color change based on the status, which can be 
// "scheduled", "pending", or "cancelled". The icon and text 
// provide a visual representation of the status.

import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

// StatusBadge component displays a badge with a status indicator
// based on the provided status prop.
export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": status === "scheduled",
        "bg-blue-600": status === "pending",
        "bg-red-600": status === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[status]}
        alt="doctor"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": status === "scheduled",
          "text-blue-500": status === "pending",
          "text-red-500": status === "cancelled",
        })}
      >
        {status}
      </p>
    </div>
  );
};
