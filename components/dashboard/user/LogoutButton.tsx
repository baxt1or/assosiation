import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth/auth";
import React from "react";

export const LogoutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Logout</Button>
    </form>
  );
};
