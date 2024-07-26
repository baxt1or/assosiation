"use client";

import { deleteUser } from "@/actions/user";
import { Loader2, Trash } from "lucide-react";
import { useState } from "react";

type DeleteNewsButtonProps = {
  id: string;
};

export const DeleteUserButton = ({ id }: DeleteNewsButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteUser(id);
    } catch (error) {
      console.error("Error deleting news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin text-red-500" />
      ) : (
        <Trash
          className="w-5 h-5 text-red-500"
          onClick={handleDelete}
          aria-label="Delete"
        />
      )}
    </>
  );
};
