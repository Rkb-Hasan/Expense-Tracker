import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

export default function PrivateRoute() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] py-8">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
