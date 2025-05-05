import { z } from "zod";

export const DonorSearchFilters = z.object({
  artistic_ability: z
    .enum(["0", "1", "2", "3", "4", "5"])
    .nullable()
    .optional(),
  athletic_ability: z
    .enum(["0", "1", "2", "3", "4", "5"])
    .nullable()
    .optional(),
  mathematical_ability: z
    .enum(["0", "1", "2", "3", "4", "5"])
    .nullable()
    .optional(),
  scientific_ability: z
    .enum(["0", "1", "2", "3", "4", "5"])
    .nullable()
    .optional(),
  singing_ability: z.enum(["0", "1", "2", "3", "4", "5"]).nullable().optional(),
  hair_type: z
    .enum(["wavy", "curly", "coily", "straight"])
    .nullable()
    .optional(),
  hair_color: z
    .enum(["black", "brown", "blonde", "red", "strawberry_blonde"])
    .nullable()
    .optional(),
  education_level: z
    .enum(["associate_degree", "bachelors_degree", "masters_degree"])
    .nullable()
    .optional(),
  jewish_ancestry: z
    .enum(["no", "yes_maternal_side", "yes_both_sides", "yes_paternal_side"])
    .nullable()
    .optional(),
  height_ft: z.string().nullable().optional(),
  height_in: z.string().nullable().optional(),
  logical_creative: z.enum(["logical", "creative"]).nullable().optional(),
  serious_silly: z.enum(["serious", "silly"]).nullable().optional(),
  introvert_extrovert: z
    .enum(["introverted", "extroverted", "ambiverted"])
    .nullable()
    .optional(),
  relationship_preferences: z
    .enum(["either", "disclosed", "undisclosed"])
    .nullable()
    .optional(),
});
