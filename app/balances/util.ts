import BigNumber from "bignumber.js";

import { Balance, Currency, User } from "@/types";

export type BalanceTableRow = Balance & { currency: Currency; user: User } & {
  formattedFunds: string;
};

export function formatFunds(funds: string, currency: Currency): string {
  return new BigNumber(funds).toPrecision(currency.precision);
}
