"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

import { Select } from "@mantine/core";
import { Button, Group } from "@mantine/core";

export default function TableControls() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const balanceType = searchParams.get("balanceType") || "";

  const onChange = (value: string) => {
    router.push(`${pathname}?balanceType=${value}`);
  };

  return (
    <Group>
      <Select
        mb="md"
        maw={300}
        mr="md"
        withinPortal
        data={["USER", "ADMIN", "SYSTEM"]}
        placeholder="Filter by balance type"
        label="Balance Type"
        value={balanceType}
        onChange={onChange}
      />
      <Button component={Link} href={pathname} mt={8}>
        Reset
      </Button>
    </Group>
  );
}
