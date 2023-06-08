"use client";

import { AppShell } from "@mantine/core";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      padding="md"
      navbar={<Sidebar />}
      header={<Header />}
      styles={(theme) => {
        return {
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        };
      }}
    >
      {children}
    </AppShell>
  );
}
