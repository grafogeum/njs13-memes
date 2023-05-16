import { NextResponse } from "next/server";
import MemeTemplates from "@/app/(data)/memeTemplates";

export async function GET() {
	return NextResponse.json(MemeTemplates);
}
