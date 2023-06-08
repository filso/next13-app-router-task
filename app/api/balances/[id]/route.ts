// create NextJS GET route handler that takes id and returns id

import { NextRequest, NextResponse } from "next/server";

import responseMock from "@/mock/mock-balances.json";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const { id } = params;

  return NextResponse.json(responseMock);
}
