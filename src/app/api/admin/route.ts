/*import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface CustomNextRequest extends NextRequest {
  auth?: any;
}

export const GET = auth(async function GET(req: CustomNextRequest): Promise<NextResponse> {
  if (req.auth) {
    return NextResponse.json(req.auth);
  }
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});*/