import { Outlet } from "react-router-dom";
import NavigationLeft from "../components/NavigationLeft";
import NavigationRight from "../components/NavigationRight";

function Root() {
  return (
    <div className="flex justify-start w-full">
      <NavigationLeft />

      {/* 오른쪽 네비게이션 바의 width와 같은 길이의 padding-right 필요 */}
      <div className="pr-16 w-full h-screen">
        <Outlet />
      </div>

      <NavigationRight />
    </div>
  );
}

export default Root;
