import fetchCollection from "@/lib/fetchCollection";
import { Balance, Currency, User } from "@/types";

import BalancesTable from "./BalanceTable";
import TableControls from "./TableControls";
import { formatFunds, BalanceTableRow } from "./util";

async function getData(searchParams: {
  [key: string]: string;
}): Promise<BalanceTableRow[]> {
  const balancesUrl = "/balances?" + new URLSearchParams(searchParams);

  const balances = await fetchCollection<Balance>(balancesUrl, {
    cache: "no-store",
  });

  const currencies = await fetchCollection<Currency>("/currencies", {
    cache: "no-store",
  });
  const users = await fetchCollection<User>("/users", {
    cache: "no-store",
  });

  return balances.map((balance) => {
    const currency = currencies.find(
      (currency) => currency.currencyId === balance.currencyId
    )!;
    const user = users.find((user) => user.userId === balance.userId)!;

    return {
      ...balance,
      formattedFunds: formatFunds(balance.fundsAvailable, currency),
      currency,
      user,
    };
  });
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
