import fetchCollection from "@/lib/fetchCollection";
import { Balance, Currency, User } from "@/types";

import BalancesTable from "./BalanceTable";
import TableControls from "./TableControls";
import { BalanceTableRow } from "./types";

type SearchParamsType = { [key: string]: string | undefined } | undefined;

export async function getData(
  searchParams: SearchParamsType
): Promise<BalanceTableRow[]> {
  let balances = await fetchCollection<Balance>("balances", { revalidate: 1 });
  if (searchParams?.balanceType) {
    balances = balances.filter(
      (balance) => balance.balanceType === searchParams.balanceType
    );
  }

  const currencies = await fetchCollection<Currency>("currencies", {
    revalidate: 120,
  });
  const users = await fetchCollection<User>("users", { revalidate: 60 });

  return balances.map((balance) => {
    const currency = currencies.find(
      (currency) => currency.currencyId === balance.currencyId
    )!;
    const user = users.find((user) => user.userId === balance.userId)!;

    return {
      ...balance,
      currency,
      user,
    };
  });
}

export default async function Balances({
  params,
  searchParams,
}: {
  params: {};
  searchParams?: SearchParamsType;
}) {
  const data = await getData(searchParams);

  return (
    <main>
      <TableControls />
      <BalancesTable data={data} />
    </main>
  );
}
