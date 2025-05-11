export const dynamic = "force-static";

import path from "path";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import { IProduct } from "@/app/core/shared/types";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const filePath = path.join(process.cwd(), "public", "products.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const parsedContent = JSON.parse(fileContents) as IProduct[];

    const products = parsedContent;

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error reading products file:", error);
    return NextResponse.json(
      { message: "Failed to load product" },
      { status: 500 },
    );
  }
}
