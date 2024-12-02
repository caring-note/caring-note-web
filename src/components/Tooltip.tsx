import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import tooltipBlack from "../assets/icon/tooltipBlack.png";

interface TooltipProps {
  id: string;
  text: string;
  eventType?: "hover" | "click";
}

const Tooltip: React.FC<TooltipProps> = ({ id, text, eventType = "hover" }) => {
  return (
    <>
      <div className="inline-block m-1">
        <img
          data-tooltip-id={id}
          src={tooltipBlack}
          alt="tooltip"
          className="w-4 h-4"
        />
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
