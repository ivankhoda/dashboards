import React from "react";

export const Icon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 0C3.13437 0 0 3.13437 0 7C0 10.8656 3.13437 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13437 10.8656 0 7 0ZM7 12.8125C3.79063 12.8125 1.1875 10.2094 1.1875 7C1.1875 3.79063 3.79063 1.1875 7 1.1875C10.2094 1.1875 12.8125 3.79063 12.8125 7C12.8125 10.2094 10.2094 12.8125 7 12.8125Z"
      fill="black"
      fillOpacity="0.85"
    />
    <path
      d="M6.24976 4.25C6.24976 4.44891 6.32877 4.63968 6.46943 4.78033C6.61008 4.92098 6.80084 5 6.99976 5C7.19867 5 7.38943 4.92098 7.53009 4.78033C7.67074 4.63968 7.74976 4.44891 7.74976 4.25C7.74976 4.05109 7.67074 3.86032 7.53009 3.71967C7.38943 3.57902 7.19867 3.5 6.99976 3.5C6.80084 3.5 6.61008 3.57902 6.46943 3.71967C6.32877 3.86032 6.24976 4.05109 6.24976 4.25ZM7.37476 6H6.62476C6.55601 6 6.49976 6.05625 6.49976 6.125V10.375C6.49976 10.4438 6.55601 10.5 6.62476 10.5H7.37476C7.44351 10.5 7.49976 10.4438 7.49976 10.375V6.125C7.49976 6.05625 7.44351 6 7.37476 6Z"
      fill="black"
      fillOpacity="0.85"
    />
  </svg>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type CaretInfo = {
  className: string;
};
export const Caret = (props: CaretInfo) => {
  const name = props.className;
  const renderSwitch = (arg: string) => {
    switch (arg) {
      case "positive":
        return (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={arg}>
            <path d="M7.38784 4.72852L4.1808 1.00977C4.08901 0.90332 3.91225 0.90332 3.81948 1.00977L0.612445 4.72852C0.493304 4.86719 0.600726 5.07031 0.793109 5.07031H7.20717C7.39955 5.07031 7.50698 4.86719 7.38784 4.72852Z" />
          </svg>
        );
      case "negative":
        return (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={arg}>
            <path d="M7.20717 0.929688H0.793109C0.600726 0.929688 0.493304 1.13281 0.612445 1.27148L3.81948 4.99023C3.91127 5.09668 4.08803 5.09668 4.1808 4.99023L7.38784 1.27148C7.50698 1.13281 7.39955 0.929688 7.20717 0.929688Z" />
          </svg>
        );
      case "neutral":
        return (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="#BDBDBD" xmlns="http://www.w3.org/2000/svg" className={arg}>
            <path d="M7.20717 0.929688H0.793109C0.600726 0.929688 0.493304 1.13281 0.612445 1.27148L3.81948 4.99023C3.91127 5.09668 4.08803 5.09668 4.1808 4.99023L7.38784 1.27148C7.50698 1.13281 7.39955 0.929688 7.20717 0.929688Z" />
          </svg>
        );
      default:
        <></>;
        break;
    }
  };

  return <>{renderSwitch(name)}</>;
};
