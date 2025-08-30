import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useNotificationStore } from '@/store/notificationStore';
import { usePostStore } from '@/store/postStore';
import schemaCreate from '@/schemas/post';

interface CreatePostFormProps {
  onClose: () => void;
}

interface PostFormValues {
  title: string;
  content: string;
}

export default function CreatePostForm({ onClose }: CreatePostFormProps) {
  const addNotification = useNotificationStore(
    (state) => state.addNotification
  );
  const addPost = usePostStore((state) => state.addPost);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormValues>({
    resolver: yupResolver(schemaCreate),
    defaultValues: {
      title: '',
      content: '',
    },
  });

   const onSubmit = (data: PostFormValues) => {
    console.log("Creating post:", data);
    addPost(data.title, data.content);
    addNotification("Post created successfully!");
    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Create New Post</h2>
      <div>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input type="text" placeholder="Post title" {...field} />
          )}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Content */}
      <div>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <Textarea placeholder="Post content" {...field} />
          )}
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onClose} type="button">
          Cancel
        </Button>
        <Button type="submit">Publish</Button>
      </div>
    </form>
  );
}
