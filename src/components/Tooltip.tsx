import TooltipBlackIcon from "@icon/20/info.filled.black.svg?react";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

interface TooltipProps {
  id: string;
  text: string;
  eventType?: "hover" | "click";
}

const Tooltip: React.FC<TooltipProps> = ({ id, text, eventType = "hover" }) => {
  return (
    <>
      <div className="inline-block m-1">
        <TooltipBlackIcon width={20} height={20} data-tooltip-id={id} />
      </div>
      <ReactTooltip
        id={id}
        place="bottom-end"
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
