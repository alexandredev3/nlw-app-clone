interface Props {
  color?: string;
  size?: number;
}

export default function NameIcon({
  color = '#FFFF',
  size = 36,
}: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9304 0C8.02898 0 0 8.02281 0 17.9197C0 25.8373 5.13759 32.5543 12.2619 34.9238C13.158 35.0897 13.4871 34.5351 13.4871 34.0618C13.4871 33.6345 13.4703 32.2228 13.4627 30.7254C8.47434 31.8094 7.42177 28.6111 7.42177 28.6111C6.60614 26.5398 5.43094 25.9892 5.43094 25.9892C3.80419 24.877 5.55356 24.8997 5.55356 24.8997C7.35413 25.0262 8.30222 26.7464 8.30222 26.7464C9.90141 29.486 12.4968 28.6939 13.52 28.2362C13.6808 27.0778 14.1456 26.2874 14.6583 25.8399C10.6758 25.3867 6.48914 23.8502 6.48914 16.9839C6.48914 15.0275 7.18959 13.4289 8.33667 12.174C8.15048 11.7226 7.5368 9.90002 8.51034 7.43169C8.51034 7.43169 10.016 6.95005 13.4425 9.26857C14.8726 8.8714 16.4066 8.67239 17.9304 8.66564C19.4542 8.67239 20.9893 8.8714 22.4222 9.26857C25.8446 6.95005 27.3482 7.43169 27.3482 7.43169C28.3241 9.90002 27.7102 11.7226 27.524 12.174C28.6736 13.4289 29.3693 15.0274 29.3693 16.9839C29.3693 23.8665 25.1747 25.3821 21.1821 25.8256C21.8251 26.3817 22.3982 27.4723 22.3982 29.1441C22.3982 31.5417 22.3774 33.4715 22.3774 34.0618C22.3774 34.5386 22.7001 35.0974 23.6091 34.9215C30.7295 32.5493 35.8606 25.8346 35.8606 17.9197C35.8606 8.02281 27.8328 0 17.9304 0Z"
        fill={color}
      />
      <path
        d="M6.71559 25.5271C6.67622 25.6161 6.53587 25.6428 6.40833 25.5818C6.27825 25.5233 6.20512 25.4019 6.24731 25.3125C6.28598 25.2209 6.42633 25.1953 6.55612 25.2568C6.68648 25.3152 6.76073 25.4377 6.71559 25.5271V25.5271ZM7.59759 26.3136C7.51209 26.3928 7.34489 26.356 7.23141 26.2308C7.11412 26.1059 7.09219 25.9389 7.17895 25.8584C7.26712 25.7792 7.42927 25.8162 7.54683 25.9413C7.66411 26.0676 7.68689 26.2336 7.59745 26.3137L7.59759 26.3136ZM8.2027 27.3199C8.09273 27.3962 7.91301 27.3246 7.80206 27.1653C7.69223 27.006 7.69223 26.8149 7.80445 26.7383C7.91583 26.6617 8.09273 26.7306 8.20523 26.8887C8.31492 27.0507 8.31492 27.2419 8.20256 27.32L8.2027 27.3199ZM9.22589 28.4854C9.12759 28.5936 8.91834 28.5646 8.76506 28.4168C8.60841 28.2723 8.56467 28.0673 8.66325 27.9589C8.76267 27.8504 8.97319 27.8809 9.12759 28.0275C9.28326 28.1717 9.3308 28.3783 9.22603 28.4854H9.22589ZM10.5483 28.8789C10.5052 29.0191 10.3035 29.0829 10.1004 29.0234C9.89766 28.9619 9.76491 28.7975 9.80583 28.6557C9.84802 28.5145 10.0505 28.448 10.2551 28.5118C10.4576 28.5729 10.5907 28.7361 10.5485 28.8789H10.5483ZM12.0536 29.0457C12.0586 29.1936 11.8864 29.3161 11.6732 29.3188C11.4587 29.3234 11.2853 29.2038 11.2831 29.0585C11.2831 28.9092 11.4514 28.7878 11.6657 28.7843C11.8789 28.7801 12.0536 28.8988 12.0536 29.0457V29.0457ZM13.5321 28.9891C13.5577 29.1333 13.4095 29.2814 13.1978 29.3207C12.9897 29.3587 12.7971 29.2697 12.7705 29.1268C12.7446 28.9789 12.8956 28.831 13.1033 28.7926C13.3154 28.7558 13.5051 28.8425 13.5321 28.9891"
        fill={color}
      />
    </svg>
  );
}
