import * as yup from 'yup';

const schemaCreate = yup.object({
  title: yup.string().required('Title is required').min(3, 'Min 3 characters'),
  content: yup
    .string()
    .required('Content is required')
    .min(10, 'Min 10 characters'),
  category: yup.string().required('Category is required'),
  image: yup
  .mixed<FileList>()
  .nullable()
  .default(null)
});

export default schemaCreate;
