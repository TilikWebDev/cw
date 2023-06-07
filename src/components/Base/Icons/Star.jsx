import React, { useMemo } from "react";

const Star = ({ theme }) => {
  const fillColor = useMemo(() => {
    switch (theme) {
      case "dark":
        return "#E94D35";
      case "orange":
        return "#000000";
      case "purple":
        return "#FFDB59";
      case "light":
        return "#6140E5";
      case "green":
        return "#F48E3E";
    }
  }, [theme]);

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55.4558 4.54416L30.36 30L55.4558 55.4558L30 30.36L4.54416 55.4558L29.64 30L4.54416 4.54416L30 29.64L55.4558 4.54416Z"
        fill="#FFFFFF"
        stroke={fillColor}
        strokeWidth="12"
      />
    </svg>
  );
};

export default Star;
