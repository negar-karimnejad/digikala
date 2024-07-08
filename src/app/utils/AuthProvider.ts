"use client";

import { getServerSession } from "next-auth";
import React from "react";
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return <SessionProvider session={session}>{children}</SessionProvider>
}
