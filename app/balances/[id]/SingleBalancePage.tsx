"use client";

import { Table, Box } from "@mantine/core";
import { BalanceExtended } from "../util";

export default function SingleBalancePage({ data }: { data: BalanceExtended }) {
  return (
    <Box>
      <h1>Balance {data.balanceId}</h1>
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
        <tbody>
          <tr>
            <td>{data.user.userName}</td>
            <td>
              <span>{data.formattedFunds}</span>
            </td>
            <td>{data.currency.currencyName}</td>
            <td>{data.balanceType}</td>
            <td>{data.balanceName}</td>
          </tr>
        </tbody>
      </Table>
    </Box>
  );
}
