"use server";

import { redirect } from "next/navigation";

export async function searchAction(formData: FormData) {
  const searchTerm = formData.get("searchTerm") as string;
  redirect(`/search/${encodeURIComponent(searchTerm)}`);
}
