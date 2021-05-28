import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Loading } from "../../ui/Loading";
import { Chat } from "../../ui/Chat";

import { MainLayout } from "../../layouts/MainLayout";
import { isServer } from "../../lib/isServer";
import { useUsernameStore } from "../../stores/useUsernameStore";
import { useConn } from "../../hooks/useConn";
import { ChatMessageModel } from "../../lib/ChatModels";

export const HomePage: React.FC = () => {
  const username = useUsernameStore((state: any) => state.username);

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
      <Chat />
    </MainLayout>
  )
};