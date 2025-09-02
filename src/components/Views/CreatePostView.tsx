import {
  Controller,
  type Control,
  type FieldErrors,
  type UseFormHandleSubmit,
} from 'react-hook-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import type { PostFormValues } from '../Containers/CreatePostContainer';

interface CreatePostFormViewProps {
  //   form: UseFormReturn<PostFormValues>;
  control: Control<PostFormValues>;
  errors: FieldErrors<PostFormValues>;
  onSubmit: (data: PostFormValues) => void;
  handleSubmit: UseFormHandleSubmit<PostFormValues>;
  onClose: () => void;
}

const CreatePostView = ({
  control,
  errors,
  onSubmit,
  handleSubmit,
  onClose,
}: CreatePostFormViewProps) => {
  //   const {
  //     control,
  //     handleSubmit,
  //     formState: { errors },
  //   } = form;
  return (
    <div>
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
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose} type="button">
            Cancel
          </Button>
          <Button type="submit">Publish</Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostView;
