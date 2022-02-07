import React from "react";

type IconInfo = {
  type: string;
};

export const DashBoardIcon = (props: IconInfo) => {
  const { type } = props;

  const renderSwitch = (arg: string) => {
    switch (arg) {
      case "Dashboard":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.45 4.52965C13.0986 3.69794 12.5892 2.94231 11.95 2.30465C11.3123 1.66544 10.5567 1.15603 9.725 0.804645C8.86094 0.43902 7.94531 0.254645 7 0.254645C6.05469 0.254645 5.13906 0.43902 4.275 0.804645C3.4433 1.15603 2.68767 1.66544 2.05 2.30465C1.41079 2.94231 0.901382 3.69794 0.55 4.52965C0.184375 5.39371 -8.6925e-09 6.30933 -8.6925e-09 7.25465C-8.6925e-09 9.32808 0.910937 11.2812 2.49844 12.6156L2.525 12.6375C2.61563 12.7125 2.72969 12.7546 2.84687 12.7546H11.1547C11.2719 12.7546 11.3859 12.7125 11.4766 12.6375L11.5031 12.6156C13.0891 11.2812 14 9.32808 14 7.25465C14 6.30933 13.8141 5.39371 13.45 4.52965ZM10.8969 11.5671H3.10313C2.49937 11.0228 2.01682 10.3575 1.68681 9.61456C1.35679 8.87162 1.18667 8.06759 1.1875 7.25465C1.1875 5.70152 1.79219 4.24215 2.89062 3.14527C3.98906 2.04683 5.44844 1.44215 7 1.44215C8.55313 1.44215 10.0125 2.04683 11.1094 3.14527C12.2078 4.24371 12.8125 5.70308 12.8125 7.25465C12.8125 8.90465 12.1172 10.4656 10.8969 11.5671ZM8.74219 5.09058C8.71869 5.06732 8.68697 5.05427 8.65391 5.05427C8.62084 5.05427 8.58912 5.06732 8.56563 5.09058L7.24531 6.4109C6.95312 6.33277 6.62969 6.40777 6.4 6.63746C6.31865 6.71866 6.2541 6.8151 6.21007 6.92128C6.16603 7.02745 6.14336 7.14126 6.14336 7.25621C6.14336 7.37115 6.16603 7.48497 6.21007 7.59114C6.2541 7.69731 6.31865 7.79376 6.4 7.87496C6.4812 7.95631 6.57765 8.02085 6.68382 8.06489C6.78999 8.10893 6.90381 8.1316 7.01875 8.1316C7.13369 8.1316 7.24751 8.10893 7.35368 8.06489C7.45985 8.02085 7.5563 7.95631 7.6375 7.87496C7.74632 7.76647 7.82458 7.63117 7.86436 7.48274C7.90414 7.33432 7.90404 7.17802 7.86406 7.02964L9.18437 5.70933C9.23281 5.6609 9.23281 5.58121 9.18437 5.53277L8.74219 5.09058ZM6.65625 3.50465H7.34375C7.4125 3.50465 7.46875 3.4484 7.46875 3.37965V2.12965C7.46875 2.0609 7.4125 2.00465 7.34375 2.00465H6.65625C6.5875 2.00465 6.53125 2.0609 6.53125 2.12965V3.37965C6.53125 3.4484 6.5875 3.50465 6.65625 3.50465ZM10.7188 6.9109V7.5984C10.7188 7.66715 10.775 7.7234 10.8438 7.7234H12.0938C12.1625 7.7234 12.2188 7.66715 12.2188 7.5984V6.9109C12.2188 6.84215 12.1625 6.7859 12.0938 6.7859H10.8438C10.775 6.7859 10.7188 6.84215 10.7188 6.9109ZM10.9172 3.82965L10.4312 3.34371C10.4078 3.32045 10.376 3.3074 10.343 3.3074C10.3099 3.3074 10.2782 3.32045 10.2547 3.34371L9.37031 4.22808C9.34705 4.25158 9.334 4.2833 9.334 4.31636C9.334 4.34943 9.34705 4.38115 9.37031 4.40465L9.85625 4.89058C9.90469 4.93902 9.98438 4.93902 10.0328 4.89058L10.9172 4.00621C10.9656 3.95777 10.9656 3.87808 10.9172 3.82965ZM3.75156 3.34371C3.72807 3.32045 3.69634 3.3074 3.66328 3.3074C3.63022 3.3074 3.59849 3.32045 3.575 3.34371L3.08906 3.82965C3.0658 3.85314 3.05275 3.88486 3.05275 3.91793C3.05275 3.95099 3.0658 3.98271 3.08906 4.00621L3.97344 4.89058C4.02187 4.93902 4.10156 4.93902 4.15 4.89058L4.63594 4.40465C4.68438 4.35621 4.68438 4.27652 4.63594 4.22808L3.75156 3.34371ZM3.09375 6.7859H1.84375C1.775 6.7859 1.71875 6.84215 1.71875 6.9109V7.5984C1.71875 7.66715 1.775 7.7234 1.84375 7.7234H3.09375C3.1625 7.7234 3.21875 7.66715 3.21875 7.5984V6.9109C3.21875 6.84215 3.1625 6.7859 3.09375 6.7859Z"
              fill="black"
            />
          </svg>
        );
      case "Statistics":
        return (
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5 -0.00012207H0.5C0.223437 -0.00012207 0 0.223315 0 0.499878V10.4999C0 10.7764 0.223437 10.9999 0.5 10.9999H13.5C13.7766 10.9999 14 10.7764 14 10.4999V0.499878C14 0.223315 13.7766 -0.00012207 13.5 -0.00012207ZM12.875 3.24988H9.5625V1.12488H12.875V3.24988ZM12.875 6.74988H9.5625V4.24988H12.875V6.74988ZM5.4375 4.24988H8.5625V6.74988H5.4375V4.24988ZM8.5625 3.24988H5.4375V1.12488H8.5625V3.24988ZM1.125 4.24988H4.4375V6.74988H1.125V4.24988ZM1.125 1.12488H4.4375V3.24988H1.125V1.12488ZM1.125 7.74988H4.4375V9.87488H1.125V7.74988ZM5.4375 7.74988H8.5625V9.87488H5.4375V7.74988ZM12.875 9.87488H9.5625V7.74988H12.875V9.87488Z"
              fill="black"
              fillOpacity="0.85"
            />
          </svg>
        );
      default:
        <></>;
        break;
    }
  };

  return <>{renderSwitch(type)}</>;
};
