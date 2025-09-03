// components/common/Field.tsx
import {
  Controller,
  type Control,
  type FieldErrors,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface FieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea"; // chọn loại input
}

export default function Field<T extends FieldValues>({
  name,
  control,
  errors,
  placeholder,
  type = "text",
  as = "input",
}: FieldProps<T>) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          as === "textarea" ? (
            <textarea
              {...field}
              placeholder={placeholder}
              className="border rounded p-2 bg-slate-100 w-full"
            />
          ) : (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className="border rounded p-2 bg-slate-100 w-full"
            />
          )
        }
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {String(errors[name]?.message)}
        </p>
      )}
    </div>
  );
}
