import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"svg"> {
  fill?: string;
  size?: string;
}

const defaultProps = {
  fill: "white",
  size: "24px",
};

export namespace Icons {
  export const Home = ({ ...rest }: Props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={rest.size ? rest.size : defaultProps.size}
        height={rest.size ? rest.size : defaultProps.size}
        viewBox="0 0 16 16"
        fill={rest.fill ? rest.fill : "none"}
        {...rest}
      >
        <path d="M 13 13 l 0 -6 l -5 -5 l -5 5 l 0 6 l 3 0 l 0 -4 l 4 0 l 0 4 z"></path>
      </svg>
    );
  };

  export const Server = ({ ...rest }: Props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={rest.size ? rest.size : defaultProps.size}
        height={rest.size ? rest.size : defaultProps.size}
        viewBox="0 0 300 300"
        fill={rest.fill ? rest.fill : defaultProps.fill}
        {...rest}
      >
        <path d="M 312 208 C 312 186.256 299.344 166.616 279.96 157.432 C 278.6 110.088 239.664 72 192 72 C 158.28 72 128.072 90.928 113.256 120.776 C 110.192 120.256 107.104 120 104 120 C 82.24 120 62.592 132.664 53.424 152.056 C 23.736 153.408 0 177.984 0 208 C 0 238.88 25.128 264 56 264 L 256 264 C 286.872 264 312 238.88 312 208 Z"></path>
      </svg>
    );
  };

  export const Machine = ({ ...rest }: Props) => {
    return (
      <svg
        width={rest.size ? rest.size : defaultProps.size}
        height={rest.size ? rest.size : defaultProps.size}
        viewBox="0 0 24 24"
        fill={rest.fill ? rest.fill : "none"}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M14 8V5M11 5H17M6 12H3M3 9V15M21 11V19M9 12H9.01M12 12H12.01M15 12H15.01M6 8V16H8L10 19H18V10L16 8H6Z"
          stroke={rest.stroke ? rest.stroke : "#fff"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  export const Licence = ({ ...rest }: Props) => {
    return (
      <svg
        width={rest.size ? rest.size : defaultProps.size}
        height={rest.size ? rest.size : defaultProps.size}
        viewBox="-20 0 190 190"
        fill={rest.fill ? rest.fill : defaultProps.fill}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M119.054 108.803L114.224 125.43L100.271 124.524C98.689 126.782 96.833 128.817 94.727 130.547L95.844 144.535L79.029 148.666L72.069 136.094C71.187 135.933 70.293 135.737 69.383 135.496C67.114 134.899 65.011 134.18 63.058 133.357L50.5 141.415L38.516 128.918L45.812 117.678C44.297 114.504 43.395 111.139 43.054 107.729L30.947 101.07L35.497 85.667L48.361 86.105C50.391 82.949 52.947 80.138 55.946 77.862L55.404 65.597L71.018 61.835L76.808 71.995C78.757 72.169 80.764 72.514 82.828 73.057C85.215 73.686 87.404 74.497 89.41 75.458L100.88 68.515L111.944 80.158L104.609 91.92C105.84 95.209 106.513 98.691 106.665 102.203L119.054 108.803ZM79.292 88.062C58.052 82.469 47.544 115.048 72.09 121.513C92.784 126.964 100.943 93.765 79.292 88.062Z"
        ></path>
      </svg>
    );
  };

  export const Chat = ({ ...rest }: Props) => {
    return (
      <svg
        width={rest.size ? rest.size : defaultProps.size}
        height={rest.size ? rest.size : defaultProps.size}
        viewBox="0 0 24 24"
        fill={rest.fill ? rest.fill : "none"}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M8 10.5H16"
          stroke={rest.stroke ? rest.stroke : "#fff"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 14H13.5"
          stroke={rest.stroke ? rest.stroke : "#fff"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
          stroke={rest.stroke ? rest.stroke : "#fff"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  export const Menu = ({ ...rest }: Props) => {
    return (
      <svg
        width={rest.size ? rest.size : defaultProps.size}
        height={rest.size ? rest.size : defaultProps.size}
        viewBox="0 0 24 24"
        fill={rest.fill ? rest.fill : defaultProps.fill}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
      </svg>
    );
  };

  export const SendMessage = ({ ...rest }: Props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={rest.size ? rest.size : defaultProps.size}
        viewBox="0 -960 960 960"
        width={rest.size ? rest.size : defaultProps.size}
        fill={rest.fill ? rest.fill : defaultProps.fill}
        {...rest}
      >
        <path d="M176-183q-20 8-38-3.5T120-220v-180l320-80-320-80v-180q0-22 18-33.5t38-3.5l616 260q25 11 25 37t-25 37L176-183Z" />
      </svg>
    );
  };

  export const AddPicture = ({ ...rest }: Props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={rest.size ? rest.size : defaultProps.size}
        viewBox="0 -960 960 960"
        width={rest.size ? rest.size : defaultProps.size}
        fill={rest.fill ? rest.fill : defaultProps.fill}
        {...rest}
      >
        <path d="M720-600q-17 0-28.5-11.5T680-640v-40h-40q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h40v-40q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v40h40q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680h-40v40q0 17-11.5 28.5T720-600ZM280-280h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Zm-80 160q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320q17 0 28.5 11.5T560-800v120q0 17 11.5 28.5T600-640h40v40q0 17 11.5 28.5T680-560h120q17 0 28.5 11.5T840-520v320q0 33-23.5 56.5T760-120H200Z" />
      </svg>
    );
  };

  export const AddPicturePlus = ({ ...rest }: Props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={rest.size ? rest.size : "14px"}
        viewBox="0 -960 960 960"
        width={rest.size ? rest.size : "14px"}
        fill={rest.fill ? rest.fill : "green"}
        {...rest}
      >
        <path d="M412-412H222q-29 0-48.5-20.2T154-480q0-29 19.5-48.5T222-548h190v-191q0-27.6 20.2-47.8Q452.4-807 480-807q27.6 0 47.8 20.2Q548-766.6 548-739v191h190q29 0 48.5 19.5t19.5 48q0 28.5-19.5 48.5T738-412H548v190q0 27.6-20.2 47.8Q507.6-154 480-154q-27.6 0-47.8-20.2Q412-194.4 412-222v-190Z" />
      </svg>
    );
  };

  export const Support = ({ ...rest }: Props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={rest.size ? rest.size : defaultProps.size}
        viewBox="0 -960 960 960"
        width={rest.size ? rest.size : defaultProps.size}
        fill={rest.fill ? rest.fill : defaultProps.fill}
        {...rest}
      >
        <path d="M480-74q-28.125 0-48.062-19.5Q412-113 412-141.57t20.2-48Q452.4-209 480-209h273v-288q0-108-81-180.5T480-750q-111 0-192 73.127T207-496l3 215q1 28-19.2 48T142-213h-5q-43.063 0-73.031-29.469Q34-271.938 34-315v-97q0-22 10-41.5T72-488l-1-7q.676-82.022 33.544-153.797 32.867-71.776 88.662-124.393Q249-825.808 323-855.904 397-886 480-886q84 0 157.922 30.695 73.922 30.696 129.5 83.5Q823-719 856-647.307q33 71.692 33 152.918v6.173q18 14.03 27.5 34.59Q926-433.066 926-411v95q0 26.929-8 51.964Q910-239 889-224v16q0 56.4-38.3 95.2Q812.4-74 756-74H480ZM372.088-361Q351-361 336.5-375.412q-14.5-14.413-14.5-34.5Q322-430 336.7-444.5t35.37-14.5q21.095 0 35.513 14.7Q422-429.6 422-409.93q0 20.095-14.412 34.513Q393.175-361 372.088-361Zm216 0Q567-361 552.5-375.412q-14.5-14.413-14.5-34.5Q538-430 552.7-444.5t35.37-14.5q21.095 0 35.513 14.7Q638-429.6 638-409.93q0 20.095-14.412 34.513Q609.175-361 588.088-361ZM242-483q-7-97 65.355-164.5T480.979-715q88.802 0 156.412 54.5Q705-606 714-519q-78.729-1.021-151.365-30.51Q490-579 445-644q-23 65-78.736 106.503Q310.528-495.994 242-483Z" />{" "}
      </svg>
    );
  };
}
