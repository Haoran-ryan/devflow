import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-dark bg-auth-light">
      {children}
    </main>
  );
};

export default AuthLayout;
