import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import CreatePostForm from "@/components/CreatePost";
import ListPost from "@/components/ListPost";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-end mb-6">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-5 py-2 rounded-lg shadow-md font-semibold">
              + CREATE POST
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Create New Post</DialogTitle>
            </DialogHeader>
            <CreatePostForm onClose={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
      <ListPost />
    </div>
  );
}
