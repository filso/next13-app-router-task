import { Table, Box } from "@mantine/core";
import { BalanceTableRow } from "../util";

async function getData(): Promise<BalanceTableRow> {
  const balancesUrl = "/balances?" + new URLSearchParams(searchParams);
}

export default function Balance({ data }: BalanceTableRow) {
  
  
  return (
    <div>
      <h1>Balance</h1>
      <table>
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
      </table>
    </div>
  );
}
