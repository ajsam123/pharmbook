import { Outlet } from "@tanstack/react-router";

const AuthLayout = () => {
  return (
    <section className="grid grid-cols-2 w-full h-screen">
      <div className="w-full bg-black"></div>
      <div>
        {" "}
        <Outlet />
      </div>
    </section>
  );
};

export default AuthLayout;
