import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SIGN_IN_ROUTE } from "../app/Routes";
import useAuth from "../auth/useAuth";

const SignOutRoute = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  useEffect(() => {
    const signOutUser = async () => {
      try {
        await signOut();
        await new Promise((resolve) => setTimeout(resolve, 0));
        navigate(SIGN_IN_ROUTE);
      } catch (err) {
        console.error(err);
      }
    };
    signOutUser();
  }, [signOut, navigate]);

  return (
    <Typography variant="h3" textAlign="center">
      Signing out..
    </Typography>
  );
};

export default SignOutRoute;
