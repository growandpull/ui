import { Button, Typography } from "@mui/material";
import StyledTextField from "../styled/StyledTextField";
import { useForm } from "react-hook-form";
import StyledForm from "../styled/StyledForm";

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch {
      setError("email", {
        type: "invalidCredentials",
        message: "Invalid credentials.",
      });
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3">Reset your password.</Typography>
      <Typography variant="p">
        Please enter your email so we can send you a password recovery email
      </Typography>
      <StyledTextField
        label="Email address"
        color="primary"
        register={{
          ...register("email", {
            required: {
              value: true,
              message: "Field is required!",
            },
            maxLength: {
              value: 100,
              message: "Max length is 100 symbols!",
            },
            pattern: {
              value: /[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]{2,}\.[A-Z|a-z]{2,}/,
              message: "Enter a valid email!",
            },
          }),
        }}
        helperText={errors?.email ? errors.email.message : " "}
        error={!!errors?.email}
      />
      <Button variant="contained" type="submit">
        Send
      </Button>
    </StyledForm>
  );
};

export default ForgotPasswordForm;
