import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { usePostStore } from '@/store/postStore';
import { Button } from './ui/button';
import { Heart } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { cn } from '@/lib/utils';

export default function ListPost() {
  const posts = usePostStore((state) => state.posts);
  const toggleLike = usePostStore((state) => state.toggleLike);
  const token = useAuthStore((state) => state.token);

  return (
    <>
      {!posts || !posts.length ? (
        <div>No posts available.</div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const hasLiked = token && post.likes.likeTokens.includes(token);

            return (
              <Card key={post.id} className="w-full h-full">
                <CardHeader>
                  <CardTitle className="truncate text-lg font-semibold">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 text-sm break-words">
                    {post.content}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => token && toggleLike(post.id)}
                  >
                    <Heart
                      className={cn(
                        'w-4 h-4',
                        hasLiked ? 'text-red-500 fill-red-500' : 'text-gray-500'
                      )}
                    />{' '}
                    {post.likes.likes}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}
