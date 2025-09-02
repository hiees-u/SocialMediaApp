import type { Post } from '@/store/postStore';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ListPostViewProps {
  posts: Post[];
  token: string | null;
  onToggleLike: (postId: number) => void;
}

export default function ListPostView({
  posts,
  token,
  onToggleLike,
}: ListPostViewProps) {
  if (!posts || !posts.length) {
    return <div>No posts available.</div>;
  }
  return (
    <div className={cn('grid gap-4 md:grid-cols-2 lg:grid-cols-3')}>
      {posts.map((post) => {
        const hasLiked = token && post.likes.likeTokens.includes(token);

        return (
          <Card key={post.id} className={cn('w-full h-full')}>
            <CardHeader>
              <CardTitle className={cn('truncate text-lg font-semibold')}>
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription
                className={cn('line-clamp-3 text-sm break-words')}
              >
                {post.content}
              </CardDescription>
            </CardContent>
            <CardFooter className={cn('flex justify-between items-center')}>
              <Button
                variant="ghost"
                size="sm"
                className={cn('flex items-center gap-1')}
                onClick={() => token && onToggleLike(post.id)}
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
  );
}
