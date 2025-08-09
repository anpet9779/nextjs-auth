/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Clear the session cookie
    const response = NextResponse.json(
      { message: "Logout successful", success: true },
      { status: 200 }
    );
    response.cookies.set("token", "", { expires: new Date(0) });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
