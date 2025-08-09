/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectToDB } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function GET(request: NextRequest) {
  try {
    const user = await getDataFromToken(request);
    const foundUser = await User.findById(user.id).select("-password");
    return NextResponse.json({ user: foundUser }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
