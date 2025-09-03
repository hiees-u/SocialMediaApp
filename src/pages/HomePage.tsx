import ListPostContainer from "@/components/ListPostComponent";
import CreatePostDialog from "@/components/CreatePostDialog";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <CreatePostDialog />
      <ListPostContainer />
    </div>
  );
}
