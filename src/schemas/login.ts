import * as yup from "yup";

// Schema validation với Yup
const schemaLogin = yup.object({
  username: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(1, "At least 1 characters").required("Password is required"),
});

export default schemaLogin;