import { NextRequest, NextResponse } from "next/server";

import responseMock from "@/mock/mock-balances.json";
const { collection } = responseMock.data;

export async function GET(
  request: NextRequest,
  {
    params: { id },
  }: {
    params: { id: string };
  }
) {
  const found = collection.find((item) => item.balanceId === id);
  if (!found) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(found);
}
