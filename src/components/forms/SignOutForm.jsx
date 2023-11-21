import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SIGN_IN_ROUTE } from "../../app/Routes";
import { useForm } from "react-hook-form";
import StyledForm from "../styled/StyledForm";
import useAuth from "../../auth/useAuth";

const SignOutForm = () => {
  const { handleSubmit } = useForm();

  const navigate = useNavigate();

  const { signOut } = useAuth();

  const onSubmit = async () => {
    try {
      await signOut();
      await new Promise((resolve) => setTimeout(resolve, 0));
      navigate(SIGN_IN_ROUTE);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} title="Sign out.">
      <Button variant="contained" type="submit">
        Sign out
      </Button>
    </StyledForm>
  );
};

export default SignOutForm;
