import { usePostStore } from "@/store/postStore";
import ListPostView from "./ListPostView";
import { useAuthStore } from "@/store/authStore";

export default function ListPostContainer() {
  const posts = usePostStore((state) => state.posts);
  const toggleLike = usePostStore((state) => state.toggleLike);
  const token = useAuthStore((state) => state.token);

  return <ListPostView posts={posts} token={token} onToggleLike={toggleLike} />;
}