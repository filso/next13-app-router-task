import { NextRequest, NextResponse } from "next/server";

import responseMock from "@/mock/mock-balances.json";

const { collection } = responseMock.data;

type FilterableKeys = "balanceId" | "balanceType" 

const getResponseWithCollectionFilteredBy = (
  key: FilterableKeys,
  value: string
) => {
  return {
    ...responseMock,
    data: {
      ...responseMock.data,
      collection: responseMock.data.collection.filter((item) => item[key] === value),
    },
  };
};

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const balanceType = request.nextUrl.searchParams.get("balanceType");

  return NextResponse.json(responseMock);
}
