"use client";

import { usePathname, useRouter } from "next/navigation";
import { Table, Box, Tooltip } from "@mantine/core";

import { BalanceTableRow } from "./util";

interface BalanceTableProps {
  data: BalanceTableRow[];
}

export default function BalanceTable({ data }: BalanceTableProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleRowClick = (row: BalanceTableRow) => {
    router.push(`${pathname}/${row.balanceId}`);
  };

  const rows = data.map((row: BalanceTableRow) => (
    <Box component="tr" key={row.balanceId} onClick={() => handleRowClick(row)}>
      <td>{row.user.userName}</td>
      <td>
        <Tooltip label={row.fundsAvailable}>
          <span>{row.formattedFunds}</span>
        </Tooltip>
      </td>
      <td>{row.currency.currencyName}</td>
      <td>{row.balanceType}</td>
      <td>{row.balanceName}</td>
    </Box>
  ));

  return (
    <>
      <Table horizontalSpacing="md" striped highlightOnHover withBorder>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Funds Available</th>
            <th>Currency</th>
            <th>Balance Type</th>
            <th>Balance Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
}
