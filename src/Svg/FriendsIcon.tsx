import { SVGProps } from "react";

const FriendsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.613 18.073A.75.75 0 0 1 15 19.255H1.5a.75.75 0 0 1-.614-1.18 9.02 9.02 0 0 1 4.251-3.267 5.625 5.625 0 1 1 6.225 0 9.02 9.02 0 0 1 4.251 3.265Zm7.643 0a9.02 9.02 0 0 0-4.251-3.265 5.625 5.625 0 0 0-4.638-10.099.75.75 0 0 0-.399 1.17 7.109 7.109 0 0 1 .36 7.958.75.75 0 0 0 .192.994c.284.212.558.438.82.677l.042.043a10.503 10.503 0 0 1 2.388 3.272.75.75 0 0 0 .68.433h4.192a.75.75 0 0 0 .614-1.183Z"
      fill="#EBEBF5"
      fillOpacity={0.6}
    />
  </svg>
);

export default FriendsIcon;
