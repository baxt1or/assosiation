"use client";

import { formatDate } from "@/lib/utils";
import { About, Faculty, Member, News, Request } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { PenBox } from "lucide-react";
import {
  DeletMember,
  DeleteAboutData,
  DeleteButton,
  DeleteRequest,
  DeleteStaffMember,
} from "./DeleteButtons";

export const NewsColumns: ColumnDef<News>[] = [
  {
    accessorKey: "title",
    header: "Названия",
    cell: ({ row }) => {
      const data_title = row.getValue("title") as string;
      return <p className="text-xs text-black font-normal">{data_title}</p>;
    },
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as number;
      return <p className="">{data_id}</p>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Время",
    cell: ({ row }) => {
      const date_time = row.getValue("createdAt") as Date;
      const result = formatDate(date_time);
      return (
        <p className="text-sm text-muted-foreground font-normal">{result}</p>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    accessorKey: "id",
    header: "Удалить",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as number;
      return (
        <div className="flex gap-2">
          <Link href={`/dashboard/news/edit/${data_id}`}>
            <PenBox className="w-5 h-5 text-green-500" />
          </Link>
          <DeleteButton id={data_id} />
        </div>
      );
    },
  },
];

export const MemberColums: ColumnDef<Member>[] = [
  {
    accessorKey: "title",
    header: "Компания",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Номер",
  },
  {
    accessorKey: "webLink",
    header: "Website",
  },
  {
    accessorKey: "address",
    header: " Адрес",
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as number;
      return <p className="hidden">{data_id}</p>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Время",
    cell: ({ row }) => {
      const date_time = row.getValue("createdAt") as Date;
      const result = formatDate(date_time);
      return (
        <p className="text-sm text-muted-foreground font-normal">{result}</p>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    accessorKey: "id",
    header: "Удалить",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as number;
      return (
        <div className="flex gap-2">
          <Link href={`/dashboard/members/edit/${data_id}`}>
            <PenBox className="w-5 h-5 text-green-500" />
          </Link>
          <DeletMember id={data_id} />
        </div>
      );
    },
  },
];

export const RequestColumns: ColumnDef<Request>[] = [
  {
    accessorKey: "fullName",
    header: "Полное имя",
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as string;
      return <p className="hidden">{data_id}</p>;
    },
  },
  {
    accessorKey: "position",
    header: "Должность",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "comanyName",
    header: "Компания",
  },
  {
    accessorKey: "phoneNumber",
    header: "Номер",
  },
  {
    accessorKey: "createdAt",
    header: "Время",
    cell: ({ row }) => {
      const date_time = row.getValue("createdAt") as Date;
      const result = formatDate(date_time);
      return (
        <p className="text-sm text-muted-foreground font-normal">{result}</p>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    accessorKey: "id",
    header: "Удалить",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as number;
      return <DeleteRequest id={data_id} />;
    },
  },
];

export const StaffMembers: ColumnDef<Faculty>[] = [
  {
    accessorKey: "name",
    header: "Ф.И.О",
  },
  {
    accessorKey: "position",
    header: "Должность",
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as number;
      return data_id;
    },
  },
  {
    accessorKey: "companyName",
    header: "Компания",
  },
  {
    id: "actions",
    enableHiding: false,
    accessorKey: "id",
    header: "Удалить",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as number;
      return (
        <div className="flex gap-2">
          <Link href={`/dashboard/news/edit/${data_id}`}>
            <PenBox className="w-5 h-5 text-green-500" />
          </Link>
          <DeleteStaffMember id={data_id} />
        </div>
      );
    },
  },
];

export const AboutDataColums: ColumnDef<About>[] = [
  {
    accessorKey: "phoneOne",
    header: "Номер 1",
  },
  {
    accessorKey: "phoneTwo",
    header: "Номер 2",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address",
    header: "Адрес",
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as number;
      return data_id;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    accessorKey: "id",
    header: "Удалить",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as number;
      return (
        <div className="flex gap-2">
          <Link href={`/dashboard/news/edit/${data_id}`}>
            <PenBox className="w-5 h-5 text-green-500" />
          </Link>
          <DeleteAboutData id={data_id} />
        </div>
      );
    },
  },
];
