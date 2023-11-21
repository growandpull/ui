import { Button, Link, Stack, Typography } from "@mui/material";
import StyledTextField from "../styled/StyledTextField";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  FORGOT_PASSWORD_ROUTE,
  SIGN_UP_ROUTE,
  STARTUPS_ROUTE,
} from "../../app/Routes";
import { useForm } from "react-hook-form";
import StyledForm from "../styled/StyledForm";
import useAuth from "../../auth/useAuth";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "all" });

  const navigate = useNavigate();

  const { signIn } = useAuth();

  const onSubmit = async (data) => {
    try {
      await signIn(data);
      navigate(STARTUPS_ROUTE);
    } catch (err) {
      setError("email", {
        type: "invalidCredentials",
        message: "Invalid credentials.",
      });
      setError("password", {
        type: "invalidCredentials",
        message: "Invalid credentials.",
      });
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} title="Sign in.">
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
        error={!!errors?.password}
      />
      <Button variant="contained" type="submit">
        Create Account
      </Button>
      <Stack flexDirection="row">
        <Typography variant="p">
          <Link to={FORGOT_PASSWORD_ROUTE} component={RouterLink}>
            Forgot password?{" "}
          </Link>
        </Typography>
      </Stack>
      <Stack flexDirection="row">
        <Typography variant="p">
          New to GROW&PULL?{" "}
          <Link to={SIGN_UP_ROUTE} component={RouterLink}>
            Sign Up
          </Link>
        </Typography>
      </Stack>
    </StyledForm>
  );
};

export default SignInForm;
