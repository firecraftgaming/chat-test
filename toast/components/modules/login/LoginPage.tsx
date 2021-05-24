import React from "react";

import { MainLayout } from "../../layouts/MainLayout";
import { Login } from "./Login";

export const LoginPage: React.FC = () => {
    return (
      <MainLayout>
        <Login/>
      </MainLayout>
    )
};