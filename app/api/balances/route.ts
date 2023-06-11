import { NextRequest, NextResponse } from "next/server";

import responseMock from "@/mock/mock-balances.json";

export async function GET(request: NextRequest) {
  const balanceType = request.nextUrl.searchParams.get("balanceType");


  if (balanceType) {
    return NextResponse.json({
      ...responseMock,
      data: {
        ...responseMock.data,
        // Filter collection by balanceType
        collection: responseMock.data.collection.filter(
          (item) => item.balanceType === balanceType
        ),
      },
    });
  }

  return NextResponse.json(responseMock);
}
