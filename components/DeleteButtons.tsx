"use client";
import { deleteMember } from "@/actions/members";
import { deleteNews } from "@/actions/news";
import { deleteRequest } from "@/actions/request";
import { Trash } from "lucide-react";

type Props = {
  id: string;
};

export const DeleteButton = ({ id }: Props) => {
  return (
    <div>
      <Trash className="w-5 h-5 text-red-500" onClick={() => deleteNews(id)} />
    </div>
  );
};

export const DeletMember = ({ id }: Props) => {
  return (
    <div>
      <Trash
        className="w-5 h-5 text-red-500"
        onClick={() => deleteMember(id)}
      />
    </div>
  );
};

export const DeleteRequest = ({ id }: Props) => {
  return (
    <div>
      <Trash
        className="w-5 h-5 text-red-500"
        onClick={() => deleteRequest(id)}
      />
    </div>
  );
};
