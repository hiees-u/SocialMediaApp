import schemaCreate from '@/schemas/post';
import { useNotificationStore } from '@/store/notificationStore';
import { usePostStore } from '@/store/postStore';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import CreatePostView from '../Views/CreatePostView';

export interface PostFormValues {
  title: string;
  content: string;
}

interface CreatePostFormProps {
  onClose: () => void;
}

export default function CreatePosContainer({ onClose }: CreatePostFormProps) {
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
    console.log('Creating post:', data);
    addPost(data.title, data.content);
    addNotification('Post created successfully!');
    reset();
    onClose();
  };

  return (
    <>
      <CreatePostView control={control} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} onClose={onClose} />
    </>
  );
}
