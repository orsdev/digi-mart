export const dynamic = "force-static";

import path from "path";
import fs from "fs/promises";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "products.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const products = JSON.parse(fileContents);

    const featuredProducts = products.slice(0, 5);

    return NextResponse.json(featuredProducts, {
      status: 200,
    });
  } catch (error) {
    console.error("Error reading products file:", error);
    return NextResponse.json(
      { message: "Failed to load featured products" },
      { status: 500 },
    );
  }
}
