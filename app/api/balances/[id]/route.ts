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

  return NextResponse.json(responseMock);
}
