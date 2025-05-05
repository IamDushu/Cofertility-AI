import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { DonorSearchFilters } from "@/lib/zodSchemas";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getFiltersFromSearchTerm(term: string) {
  const response = await openai.responses.parse({
    model: "gpt-4o-2024-08-06",
    input: [
      {
        role: "system",
        content:
          "Extract donor search filters from the user's query. Only include the fields that are explicitly mentioned or implied.",
      },
      {
        role: "user",
        content: term,
      },
    ],
    text: {
      format: zodTextFormat(DonorSearchFilters, "filters"),
    },
  });

  return response.output_parsed;
}
