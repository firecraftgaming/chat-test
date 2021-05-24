import React from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../layouts/MainLayout";
import { Loading } from "../../ui/Loading";
import { isServer } from "../../../isServer";

export const HomePage: React.FC = () => {
    if (true) {
      const router = useRouter();
      if (!isServer) router.push('/login');
  
      return (
        <MainLayout>
          <Loading/>
        </MainLayout>
      );
    }
    return (
      <MainLayout>
        Yes!
      </MainLayout>
    )
};