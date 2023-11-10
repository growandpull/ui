import { Button, Link, Stack, Typography } from "@mui/material";
import StyledTextField from "../styled/StyledTextField";
import { Link as RouterLink } from "react-router-dom";
import { SIGN_IN_ROUTE } from "../../app/Routes";
import { useForm } from "react-hook-form";

const SignInForm = () => {
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
    <Stack
      gap={4}
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      width="480px"
    >
      <Typography variant="h3">Sign in.</Typography>
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
        err={!!errors?.email}
      />
      <StyledTextField
        label="Password"
        color="primary"
        type="password"
        register={{
          ...register("password", {
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
        helperText={errors?.password ? errors.password.message : " "}
        err={!!errors?.password}
      />

      <Button variant="contained" type="submit">
        Create Account
      </Button>

      <Stack flexDirection="row">
        <Typography variant="p" sx={{ width: "fit-content" }}>
          Can't sign in?{" "}
          <Link to={SIGN_IN_ROUTE} component={RouterLink}>
            Reset password{" "}
          </Link>
        </Typography>
      </Stack>

      <Stack flexDirection="row">
        <Typography>
          New to GROW&PULL?{" "}
          <Link to={SIGN_IN_ROUTE} component={RouterLink}>
            Create an account
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SignInForm;
