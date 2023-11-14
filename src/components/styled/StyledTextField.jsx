import { TextField } from "@mui/material";

const StyledTextField = ({
  type,
  register,
  helperText,
  placeholder,
  label,
  color,
  error,
}) => {
  return (
    <TextField
      variant="outlined"
      type={type}
      {...register}
      helperText={helperText}
      placeholder={placeholder}
      label={label}
      color={color}
      error={error}
    />
  );
};

export default StyledTextField;
