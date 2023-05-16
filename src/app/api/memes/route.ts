import { NextResponse } from "next/server";
import memes from "@/app/(data)/database";

export async function GET() {
	return NextResponse.json(memes);
}
