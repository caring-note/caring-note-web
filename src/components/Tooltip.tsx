import TooltipBlackIcon from "@icon/20/info.filled.black.svg?react";
import React from "react";
import { PlacesType, Tooltip as ReactTooltip } from "react-tooltip";

interface TooltipProps {
  className?: string;
  id: string;
  text: string;
  eventType?: "hover" | "click";
  place?: PlacesType;
}

const Tooltip: React.FC<TooltipProps> = ({
  className,
  id,
  text,
  eventType = "hover",
  place = "bottom-end",
}) => {
  return (
    <>
      <div className={`inline-block m-1 ${className}`}>
        <TooltipBlackIcon width={20} height={20} data-tooltip-id={id} />
      </div>
      <ReactTooltip
        id={id}
        place={place}
        content={text}
        openEvents={{
          click: eventType === "click",
          mouseover: eventType === "hover",
        }}
        closeEvents={{
          click: eventType === "click",
          mouseout: eventType === "hover",
        }}
      />
    </>
  );
};

export default Tooltip;
