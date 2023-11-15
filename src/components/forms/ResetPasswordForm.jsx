import { Button } from "@mui/material";
import StyledTextField from "../styled/StyledTextField";
import { useForm } from "react-hook-form";
import StyledForm from "../styled/StyledForm";

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch {
      setError("newPassword", {
        type: "invalidCredentials",
        message: "Invalid credentials.",
      });
    }
  };

  const validatePasswordMatch = (value) => {
    const newPassword = getValues("newPassword");
    return newPassword === value || "Passwords do not match";
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      title="Create a new password."
    >
      <StyledTextField
        label="New password"
        color="primary"
        type="password"
        register={{
          ...register("newPassword", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 8,
              message: "Min length is 8 symbols!",
            },
            maxLength: {
              value: 32,
              message: "Max length is 32 symbols!",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
              message: "Enter a valid password!",
            },
          }),
        }}
        helperText={errors?.newPassword ? errors.newPassword.message : " "}
        error={!!errors?.newPassword}
      />
      <StyledTextField
        label="Confirm new password"
        color="primary"
        type="password"
        register={{
          ...register("confirmNewPassword", {
            required: "Field is required!",
            validate: validatePasswordMatch,
          }),
        }}
        helperText={
          errors?.confirmNewPassword ? errors.confirmNewPassword.message : " "
        }
        error={!!errors?.confirmNewPassword}
      />
      <Button variant="contained" type="submit">
        Continue
      </Button>
    </StyledForm>
  );
};

export default ResetPasswordForm;
