import { NextResponse } from "next/server";

import responseMock from "@/mock/mock-users.json";

export async function GET() {
  return NextResponse.json(responseMock);
}
