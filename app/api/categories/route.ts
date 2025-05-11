export const dynamic = "force-static";

import path from "path";
import fs from "fs/promises";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "categories.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const categories = JSON.parse(fileContents);
    return NextResponse.json(categories, {
      status: 200,
    });
  } catch (error) {
    console.error("Error reading categories file:", error);
    return NextResponse.json(
      { message: "Failed to load categories" },
      { status: 500 },
    );
  }
}
