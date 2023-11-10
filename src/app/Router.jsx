import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  MAIN_ROUTE,
  NOT_FOUND_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_OUT_ROUTE,
  SIGN_UP_ROUTE,
} from "./Routes";

import HalfWidthLayout from "../layouts/HalfWidthLayout";
import SignUpRoute from "../routes/SignUpRoute";
import SignInRoute from "../routes/SignInRoute";
import SignOutRoute from "../routes/SignOutRoute";
import PageNotFoundRoute from "../routes/PageNotFoundRoute";

const Router = () => {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<HalfWidthLayout />}>
        <Route index element={<Navigate to={SIGN_IN_ROUTE} replace />} />
        <Route path={SIGN_IN_ROUTE} element={<SignInRoute />} />

        <Route path={SIGN_UP_ROUTE} element={<SignUpRoute />} />

        <Route
          path={SIGN_OUT_ROUTE}
          element={<Navigate to={SIGN_IN_ROUTE} />}
        />
        <Route path={SIGN_OUT_ROUTE} element={<SignOutRoute />} />
        <Route
          path={SIGN_OUT_ROUTE}
          element={<Navigate to={SIGN_IN_ROUTE} />}
        />

        <Route path="*" element={<Navigate to={NOT_FOUND_ROUTE} replace />} />
        <Route path={NOT_FOUND_ROUTE} element={<PageNotFoundRoute />} />
      </Route>
    </Routes>
  );
};

export default Router;
