"use server";

import { ChefProfile, ChefResponse } from "../types/chefs.types";

export async function getChefs(page: number = 1): Promise<ChefResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/public/freelances?page=${page}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const chefs = await response.json();
  return chefs;
}

export async function getChefBySlug(slug: string): Promise<ChefProfile | null> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/public/freelances/${slug}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const chef = await response.json();
  return chef;
}
