"use client";

import { formatDate } from "@/lib/utils";
import {
  About,
  Ads,
  Document,
  Member,
  News,
  Request,
  User,
} from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { PenBox } from "lucide-react";
import { DeleteNewsButton } from "../news/DeleteNewsButton";
import { DeletMemberButton } from "../member/DeleteMemberButton";
import { DeleteAboutDataButton } from "../about/DeleteAboutDataButton";
import { DeleteDocument } from "../legislation/DeleteLegislation";
import { DeleteUserButton } from "../dashboard/user/DeleteUserButton";

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
      const data_id = row.getValue("id") as string;
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
      const data_id = row.getValue("id") as string;
      return (
        <div className="flex gap-2">
          <Link href={`/dashboard/news/edit/${data_id}`}>
            <PenBox className="w-5 h-5 text-green-500" />
          </Link>
          <DeleteNewsButton id={data_id} />
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
      const data_id = row.getValue("id") as string;
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
      const data_id = row.getValue("id") as string;
      return (
        <div className="flex gap-2">
          <Link href={`/dashboard/members/edit/${data_id}`}>
            <PenBox className="w-5 h-5 text-green-500" />
          </Link>
          <DeletMemberButton id={data_id} />
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
      const data_id = row.getValue("id") as string;
      return <DeleteAboutDataButton id={data_id} />;
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
      const data_id = row.getValue("id") as string;
      return data_id;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    accessorKey: "id",
    header: "Удалить",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as string;
      return (
        <div className="flex gap-2">
          <Link href={`/dashboard/about/${data_id}`}>
            <PenBox className="w-5 h-5 text-green-500" />
          </Link>
          <DeleteAboutDataButton id={data_id} />
        </div>
      );
    },
  },
];

export const AdsColumns: ColumnDef<Ads>[] = [
  {
    accessorKey: "content",
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
      const data_id = row.getValue("id") as string;
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
      const data_id = row.getValue("id") as string;
      return (
        <div className="flex gap-2">
          <Link href={`/dashboard/news/edit/${data_id}`}>
            <PenBox className="w-5 h-5 text-green-500" />
          </Link>
        </div>
      );
    },
  },
];

export const DocumentColumns: ColumnDef<Document>[] = [
  {
    accessorKey: "title",
    header: "Названия",
    cell: ({ row }) => {
      const data_title = row.getValue("title") as string;
      return <p className="text-xs text-black font-normal">{data_title}</p>;
    },
  },
  {
    accessorKey: "content",
    header: "Content",
    cell: ({ row }) => {
      const data_title = row.getValue("title") as string;
      return <p className="text-xs text-black font-normal">{data_title}</p>;
    },
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as string;
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
      const data_id = row.getValue("id") as string;
      return (
        <div className="flex gap-2">
          <Link href={`/dashboard/legislation/${data_id}`}>
            <PenBox className="w-5 h-5 text-green-500" />
          </Link>
          <DeleteDocument id={data_id} />
        </div>
      );
    },
  },
];

export const UserDataColums: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as string;
      return data_id;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    accessorKey: "id",
    header: "Edit",
    cell: ({ row }) => {
      const data_id = row.getValue("id") as string;
      return (
        <Link href={`/dashboard/users/${data_id}`}>
          <PenBox className="w-5 h-5 text-green-500" />
        </Link>
      );
    },
  },
];
