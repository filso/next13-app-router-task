type UUID = string;

type BalanceType = "USER" | "SYSTEM" | "ADMIN"

export interface Balance {
    userId: UUID;
    balanceId: UUID;
    currencyId: UUID;
    balanceType: BalanceType;
    balanceName: string;
    fundsAvailable: "50660",
    updatedAt: number;
    createdAt: number;
}

export interface Currency {
    currencyId: UUID;
    currencyName: string;
    precision: number;
}

export interface User {
    userId: UUID;
    userName: string;
}

export type CollectionPath = 'balances' | 'currencies' | 'users';
