import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  FORGOT_PASSWORD_ROUTE,
  MAIN_ROUTE,
  NOT_FOUND_ROUTE,
  RESET_PASSWORD_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_OUT_ROUTE,
  SIGN_UP_ROUTE,
  STARTUPS_ROUTE,
  VERIFICATION_ROUTE,
} from "./Routes";

import SignUpRoute from "../routes/SignUpRoute";
import SignInRoute from "../routes/SignInRoute";
import SignOutRoute from "../routes/SignOutRoute";
import PageNotFoundRoute from "../routes/PageNotFoundRoute";
import LogoHalfWidthLayout from "../layouts/LogoHalfWidthLayout";
import VerificationRoute from "../routes/VerificationRoute";
import ForgotPasswordRoute from "../routes/ForgotPasswordRoute";
import ResetPasswordRoute from "../routes/ResetPasswordRoute";
import FullWidthLayout from "../layouts/FullWidthLayout";
import RequireAuth from "../auth/RequireAuth";
import StartupsRoute from "../routes/StartupsRoute";
import useAuth from "../auth/useAuth";

const Router = () => {
  const { authorized } = useAuth();

  return (
    <Routes>
      {!authorized() ? (
        <Route path={MAIN_ROUTE} element={<LogoHalfWidthLayout />}>
          <Route index element={<Navigate to={SIGN_IN_ROUTE} replace />} />
          <Route path={SIGN_IN_ROUTE} element={<SignInRoute />} />
          <Route path={SIGN_UP_ROUTE} element={<SignUpRoute />} />

          <Route
            path={FORGOT_PASSWORD_ROUTE}
            element={<ForgotPasswordRoute />}
          />
          <Route path={RESET_PASSWORD_ROUTE} element={<ResetPasswordRoute />} />

          <Route path={VERIFICATION_ROUTE} element={<VerificationRoute />} />

          <Route
            path={SIGN_OUT_ROUTE}
            element={<Navigate to={SIGN_IN_ROUTE} replace />}
          />

          <Route path="*" element={<Navigate to={SIGN_IN_ROUTE} replace />} />
        </Route>
      ) : (
        <Route element={<RequireAuth authRoute={SIGN_IN_ROUTE} />}>
          <Route path={MAIN_ROUTE} element={<FullWidthLayout />}>
            <Route index element={<Navigate to={STARTUPS_ROUTE} replace />} />
            <Route path={STARTUPS_ROUTE} element={<StartupsRoute />} />

            <Route path={SIGN_OUT_ROUTE} element={<SignOutRoute />} />

            <Route path={NOT_FOUND_ROUTE} element={<PageNotFoundRoute />} />
            <Route
              path="*"
              element={<Navigate to={NOT_FOUND_ROUTE} replace />}
            />

            <Route path="*" element={<PageNotFoundRoute />} />
          </Route>
        </Route>
      )}
    </Routes>
  );
};

export default Router;
