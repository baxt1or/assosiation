import { deleteMember } from "@/actions/members";
import { Loader2, Trash } from "lucide-react";
import { useState } from "react";

type DeleteMemberButtonProps = {
  id: string;
};

export const DeletMemberButton = ({ id }: DeleteMemberButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteMember(id);
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
