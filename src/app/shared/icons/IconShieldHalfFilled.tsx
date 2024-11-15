import React from "react";

export const IconShieldHalfFilled = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    width={props.width || "24"}
    height={props.height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M12.0008 3C14.3366 5.06658 17.3853 6.14257 20.5008 6C20.9544 7.54302 21.0932 9.16147 20.9089 10.7592C20.7247 12.3569 20.2211 13.9013 19.4282 15.3005C18.6353 16.6998 17.5692 17.9254 16.2933 18.9045C15.0173 19.8836 13.5576 20.5962 12.0008 21M12.0008 3C9.66498 5.06658 6.61634 6.14257 3.50081 6C3.04722 7.54302 2.90843 9.16147 3.09269 10.7592C3.27694 12.3569 3.78049 13.9013 4.57341 15.3005C5.36632 16.6998 6.43242 17.9254 7.70836 18.9045C8.98429 19.8836 10.444 20.5962 12.0008 21M12.0008 3V21M12 11H20.9M12 8H20.9M12 5H15.1M12 17H18.2M12 14H20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

IconShieldHalfFilled.displayName = "IconShieldHalfFilled";
