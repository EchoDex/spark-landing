import { FC } from "react";
import { type TIconProps } from "../type";

export const Blog: FC<TIconProps> = ({ isDark }) => {
  return isDark ? (
    <svg
      id="DARK"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.6001 14.28C5.6001 7.50614 11.1062 2 17.8801 2C24.654 2 30.1601 7.50614 30.1601 14.28V32.55C30.1601 33.3539 29.514 34 28.7101 34H7.0501C6.24624 34 5.6001 33.3539 5.6001 32.55V14.28Z"
        fill="url(#paint0_linear_5001_13687)"
        stroke="white"
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M29.1301 32.91V14.31C29.1301 8.07 24.0901 3.03 17.8801 3.03C11.6701 3.03 6.6301 8.07 6.6301 14.31V32.91C6.6301 32.91 6.6301 32.97 6.6901 32.97H29.0701C29.0701 32.97 29.1301 32.97 29.1301 32.91ZM17.8801 1.5C10.8301 1.5 5.1001 7.23 5.1001 14.31V32.91C5.1001 33.78 5.8201 34.5 6.6901 34.5H29.0701C29.9401 34.5 30.6601 33.78 30.6601 32.91V14.31C30.6601 7.23 24.9301 1.5 17.8801 1.5Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5001_13687"
          x1="6.8701"
          y1="4.38"
          x2="29.2201"
          y2="39.84"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="white" stopOpacity="0" />
          <stop offset="0.7" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      id="LIGHT"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.09998 14.28C5.09998 7.23 10.83 1.5 17.88 1.5C24.93 1.5 30.66 7.23 30.66 14.28V32.55C30.66 33.63 29.79 34.5 28.71 34.5H7.04998C5.96998 34.5 5.09998 33.63 5.09998 32.55V14.28Z"
        fill="url(#paint0_linear_5001_10233)"
      />
      <path
        d="M29.63 32.91V14.31C29.63 7.79473 24.367 2.53 17.88 2.53C11.393 2.53 6.12998 7.79473 6.12998 14.31V32.91H6.61841C6.12998 32.91 6.12998 32.9102 6.12998 32.9105L6.12998 32.911L6.12998 32.912L6.12999 32.914L6.13004 32.9182L6.13027 32.9273C6.13048 32.9337 6.13082 32.9406 6.13136 32.9482C6.13243 32.9631 6.13432 32.9812 6.13772 33.0016C6.14411 33.0399 6.15783 33.0987 6.19026 33.1636C6.22366 33.2304 6.28163 33.3124 6.37793 33.3766C6.47737 33.4429 6.58748 33.47 6.68998 33.47H29.07V32.97C29.07 33.47 29.0702 33.47 29.0705 33.47H29.071L29.072 33.47L29.074 33.47L29.0782 33.4699L29.0873 33.4697C29.0937 33.4695 29.1006 33.4692 29.1082 33.4686C29.1231 33.4675 29.1412 33.4657 29.1616 33.4623C29.1999 33.4559 29.2587 33.4421 29.3236 33.4097C29.3904 33.3763 29.4724 33.3183 29.5366 33.222C29.6029 33.1226 29.63 33.0125 29.63 32.91ZM5.59998 14.31C5.59998 7.50538 11.1069 2 17.88 2C24.6531 2 30.16 7.50538 30.16 14.31V32.91C30.16 33.5039 29.6638 34 29.07 34H6.68998C6.09612 34 5.59998 33.5039 5.59998 32.91V14.31Z"
        fill="black"
        stroke="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5001_10233"
          x1="6.86998"
          y1="4.38"
          x2="29.22"
          y2="39.84"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="#332263" stopOpacity="0" />
          <stop offset="0.7" stop-color="#332263" />
        </linearGradient>
      </defs>
    </svg>
  );
};
