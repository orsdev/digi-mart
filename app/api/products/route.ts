import path from "path";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import { IProduct } from "@/app/core/shared/types";

const PER_PAGE = 12;

export async function GET(request: Request) {
  try {
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const categoryParam = searchParams.get("category");

    const filePath = path.join(process.cwd(), "public", "products.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    let allProducts = JSON.parse(fileContents) as IProduct[];

    // Filter by category if provided
    if (categoryParam) {
      // Decode URL-encoded commas (%2C → ,) and split into array
      const categories = decodeURIComponent(categoryParam).split(",");

      allProducts = allProducts.filter((product: IProduct) => {
        // Check if product has a category and matches any requested category
        return (
          product.category &&
          categories.some((cat) => product.category.includes(cat))
        );
      });
    }

    const totalCount = allProducts.length;
    const pageCount = Math.ceil(totalCount / PER_PAGE);
    const currentPage = Math.min(Math.max(page, 1), pageCount);

    const startIndex = (currentPage - 1) * PER_PAGE;
    const endIndex = startIndex + PER_PAGE;
    const paginatedProducts = allProducts.slice(startIndex, endIndex);

    return NextResponse.json(
      {
        products: paginatedProducts,
        pagination: {
          page_count: pageCount,
          current_page: currentPage,
          total_count: totalCount,
          per_page: PER_PAGE,
        },
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error reading products file:", error);
    return NextResponse.json(
      { message: "Failed to load products" },
      { status: 500 },
    );
  }
}
