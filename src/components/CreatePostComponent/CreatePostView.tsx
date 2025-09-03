import {
  Controller,
  type Control,
  type FieldErrors,
  type UseFormHandleSubmit,
} from 'react-hook-form';
import { Button } from '../ui/button';
import type { PostFormValues } from './CreatePostContainer';
import Field from '../ui/Field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

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
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
        <h2 className="text-xl font-bold">Create New Post</h2>
        <div>
          <Field<PostFormValues>
            name="title"
            control={control}
            placeholder="Post title"
            type="text"
            errors={errors}
          />
        </div>

        <div>
          <Field<PostFormValues>
            name="content"
            control={control}
            placeholder="Post title"
            type="text"
            errors={errors}
            as="textarea"
          />
        </div>

        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block mb-1 text-sm font-medium">Category</label>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Tech</SelectItem>
                  <SelectItem value="life">Life</SelectItem>
                  <SelectItem value="news">News</SelectItem>
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block mb-1 text-sm font-medium">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  field.onChange(e.target.files); // lưu FileList vào RHF
                }}
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>
          )}
        />

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
