import { NextRequest, NextResponse } from "next/server";

import responseMock from "@/mock/mock-balances.json";
const { collection } = responseMock.data;

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const found = collection.find((item) => item.balanceId === id);
  if (!found) {
    throw new Error("return 404");
  }

  return NextResponse.json(responseMock);
}
