import BigNumber from "bignumber.js";

import { Balance, Currency, User } from '@/types';

export type BalanceTableRow = Balance & { currency: Currency; user: User };

export function getRoundedFunds(row: BalanceTableRow): string {
  const { fundsAvailable, currency } = row;
  return new BigNumber(fundsAvailable).precision(currency.precision).toString();
}
