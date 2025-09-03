// src/components/PostsTable.tsx
import * as React from "react"
import type { ColumnDef } from "@tanstack/react-table"

import { usePostStore, type Post } from "@/store/postStore"
import { TableCustom } from "./ui/TableCustom";

const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: () => "ID",
  },
  {
    accessorKey: "title",
    header: () => "Title",
  },
  {
    accessorKey: "category",
    header: () => "Category",
  },
  {
    accessorKey: "imageUrl",
    header: () => "Image",
    cell: ({ row }) => {
      const url = row.original.imageUrl
      return url ? (
        <img
          src={url}
          alt={row.original.title}
          className="h-12 w-12 object-cover rounded"
        />
      ) : (
        <span className="text-gray-400 italic">No image</span>
      )
    },
  },
  {
    accessorFn: (row) => row.likes.likes,
    id: "likes",
    header: () => "Likes",
    cell: (info) => <span>{info.getValue<number>()}</span>,
  },
]

export default function PostsTable() {
  const posts = usePostStore((state) => state.posts);
  
  const [data] = React.useState<Post[]>(() => [
    ...posts
  ])

  return (
  <TableCustom<Post>
    columns={columns}
    data={data}
    pageSize={3}
  />
)

}
