import { NextResponse } from "next/server";
import dados from "../../../database.json";
export async function GET() {
  return NextResponse.json(dados);
}
