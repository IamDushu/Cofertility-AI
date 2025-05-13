import { z } from "zod";

export const DonorSearchFilters = z.object({
  hair_type: z
    .enum(["wavy", "curly", "coily", "straight"])
    .nullable()
    .optional(),
  hair_color: z
    .enum(["black", "brown", "blonde", "red", "strawberry_blonde"])
    .nullable()
    .optional(),
  hair_texture: z.enum(["average", "thick", "thin"]).nullable().optional(),
  eye_color: z
    .enum(["black", "brown", "green", "hazel", "blue"])
    .nullable()
    .optional(),
  dimples: z.enum(["yes", "no"]).nullable().optional(),
  siblings: z.enum(["yes", "no"]).nullable().optional(),
  dominant_hand: z
    .enum(["ambidextrous", "left", "right"])
    .nullable()
    .optional(),
  freckles: z.enum(["yes", "no"]).nullable().optional(),
  marital_status: z
    .enum([
      "single_never_married",
      "separated",
      "divorced",
      "married_or_in_a_domestic_partnership",
    ])
    .nullable()
    .optional(),
  complexion: z
    .enum(["light_brown", "dark_brown", "fair", "very_fair", "medium", "olive"])
    .nullable()
    .optional(),
  education_level: z
    .enum([
      "associate_degree",
      "bachelors_degree",
      "masters_degree",
      "professional_degree",
      "some_college_no_degree",
      "doctorate",
    ])
    .nullable()
    .optional(),
  jewish_ancestry: z
    .enum(["no", "yes_maternal_side", "yes_both_sides", "yes_paternal_side"])
    .nullable()
    .optional(),
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
  allergies: z.enum(["yes", "no"]).nullable().optional(),
  dental_work: z.enum(["yes", "no"]).nullable().optional(),
  egg_retrieval: z.enum(["yes", "no"]).nullable().optional(),
  vision_quality: z
    .enum(["excellent", "good", "fair", "poor"])
    .nullable()
    .optional(),
  diet: z
    .enum([
      "meat_eater_non_vegetarian",
      "vegetarian",
      "vegan",
      "pescatarian",
      "other",
    ])
    .nullable()
    .optional(),
});
