import React from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../layouts/MainLayout";
import { Loading } from "../../ui/Loading";
import { isServer } from "../../../isServer";
import { useUsernameStore } from "../../stores/useUsernameStore";

export const HomePage: React.FC = () => {
  const username = useUsernameStore(state => state.username);

  if (!username) {
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