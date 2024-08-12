import { z } from "zod";

export const flashcardSchema = z.object({
  correctResponse: z.string().describe("What the user got right."),
  incorrectResponse: z.string().describe("What the user got wrong."),
  moreInfo: z.string().describe("More info about the response."),
});
