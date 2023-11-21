import { Button, Link, Stack, Typography } from "@mui/material";
import StyledTextField from "../styled/StyledTextField";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { SIGN_IN_ROUTE, STARTUPS_ROUTE } from "../../app/Routes";
import StyledForm from "../styled/StyledForm";
import useAuth from "../../auth/useAuth";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "all" });

  const navigate = useNavigate();

  const { signUp } = useAuth();

  const onSubmit = async (data) => {
    try {
      await signUp(data);
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
    <StyledForm onSubmit={handleSubmit(onSubmit)} title="Create an Account.">
      <StyledTextField
        label="First name"
        color="primary"
        register={{
          ...register("firstName", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 2,
              message: "Min length is 2 symbols!",
            },
            maxLength: {
              value: 100,
              message: "Max length is 100 symbols!",
            },
          }),
        }}
        helperText={errors?.firstName ? errors.firstName.message : " "}
        error={!!errors?.firstName}
      />
      <StyledTextField
        label="Last name"
        color="primary"
        register={{
          ...register("lastName", {
            required: {
              value: true,
              message: "Field is required!",
            },
            minLength: {
              value: 2,
              message: "Min length is 2 symbols!",
            },
            maxLength: {
              value: 100,
              message: "Max length is 100 symbols!",
            },
          }),
        }}
        helperText={errors?.lastName ? errors.lastName.message : " "}
        error={!!errors?.lastName}
      />
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
        <Typography variant="p" sx={{ width: "fit-content" }}>
          By registering, you agree to the{" "}
          <Link to={"#"} component={RouterLink}>
            terms of use{" "}
          </Link>
          and tariffs
        </Typography>
      </Stack>

      <Stack flexDirection="row">
        <Typography variant="p">
          Already have an account?{" "}
          <Link to={SIGN_IN_ROUTE} component={RouterLink}>
            Sign in
          </Link>
        </Typography>
      </Stack>
    </StyledForm>
  );
};

export default SignUpForm;
