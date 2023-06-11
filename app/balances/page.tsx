import fetchCollection from "@/lib/fetchCollection";
import { Balance } from "@/types";

import BalancesTable from "./BalanceTable";
import TableControls from "./TableControls";
import { BalanceExtended, extendBalanceData } from "./util";

async function getData(searchParams: {
  [key: string]: string;
}): Promise<BalanceExtended[]> {
  const balancesUrl = "/balances?" + new URLSearchParams(searchParams);

  const balances = await fetchCollection<Balance>(balancesUrl, {
    next: { revalidate: 60 },
  });

  return Promise.all(balances.map(extendBalanceData));
}

export default async function Balances({
  params,
  searchParams = {},
}: {
  params: {};
  searchParams: { [key: string]: string };
}) {
  const data = await getData(searchParams);

  return (
    <main>
      <TableControls />
      <BalancesTable data={data} />
    </main>
  );
}
