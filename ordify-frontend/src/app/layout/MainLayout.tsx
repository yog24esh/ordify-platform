import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      {/* header / navbar later */}
      <Outlet />
    </div>
  );
}
