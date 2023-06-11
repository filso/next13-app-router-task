import BigNumber from "bignumber.js";

import { Balance, Currency, User } from "@/types";
import fetchCollection from "@/lib/fetchCollection";

export type BalanceExtended = Balance & { currency: Currency; user: User } & {
  formattedFunds: string;
};

export function formatFunds(funds: string, currency: Currency): string {
  return new BigNumber(funds).toPrecision(currency.precision);
}

export async function extendBalanceData(
  balance: Balance
): Promise<BalanceExtended> {
  const currencies = await fetchCollection<Currency>("/currencies", {
    cache: "no-store",
  });
  const users = await fetchCollection<User>("/users", {
    cache: "no-store",
  });

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
}
