import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";
import { auth } from "@/auth";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  console.log(session);

  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
