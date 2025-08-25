import * as Yup from "yup";

export const createPhoneSchemaRequired = ({ label }: { label: string }) => {
  return Yup.string()
    .required(`${label} is required`)
    .min(5, `${label} is invalid`);
};

export const createEmailSchemaRequired = ({ label }: { label: string }) => {
  return Yup.string()
    .required(`${label} is required`)
    .email(`${label} is invalid`);
};