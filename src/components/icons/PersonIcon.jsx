import * as React from "react";

function PersonIcon(props) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 15a4 4 0 014-4h8a4 4 0 014 4 2 2 0 01-2 2H3a2 2 0 01-2-2z"
        stroke="#fff"
        strokeLinejoin="round"
      />
      <path d="M9 7a3 3 0 100-6 3 3 0 000 6z" stroke="#fff" />
    </svg>
  );
}

export default PersonIcon;
