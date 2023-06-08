import { Header, Group, Box } from "@mantine/core";
import Image from 'next/image'

import ColorSchemeToggle from "@/components/ColorSchemeToggle";

export default function AppHeader() {
  return (
    <Header height={90} px={30}>
      <Group position="apart">
        <Box sx={{background: 'white', borderRadius: 4}} p={4}>
          <Image src="/logo.svg" alt="ICEO logo" height={50} width={50} />
        </Box>
        <ColorSchemeToggle />
      </Group>
    </Header>
  );
}
