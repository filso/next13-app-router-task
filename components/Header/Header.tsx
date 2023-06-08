import Image from "next/image";

import { Header, Group, Box } from "@mantine/core";

import ColorSchemeToggle from "@/components/ColorSchemeToggle";
import User from "@/components/User";

export default function AppHeader() {
  const user = { userName: "jan.kowalski@norion.com", userId: "1" };

  return (
    <Header height={90} px={30}>
      <Group position="apart">
        <Box sx={{ background: "white", borderRadius: 4 }} p={4}>
          <Image src="/logo.svg" alt="ICEO logo" height={50} width={50} />
        </Box>
        <Group>
          <User user={user} />
          <ColorSchemeToggle />
        </Group>
      </Group>
    </Header>
  );
}
