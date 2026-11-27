import { z } from "zod";

const potholeSchema = z.object({

  name: z
    .string()
    .min(4, "Name must contain at least 4 characters")
    .max(30, "Name should not exceed 30 characters")
    .trim()
    .regex(/^[A-Za-z ]+$/, "Only letters and spaces are allowed"),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address"),

  location: z
    .string()
    .trim()
    .min(5, "Enter a valid road location")
    .max(100, "Location is too long"),

  severity: z.enum(["Low", "Medium", "High"], {
    message: "Please select pothole severity",
  }),

  description: z
    .string()
    .trim()
    .min(10, "Description must contain at least 10 characters")
    .max(200, "Description should not exceed 200 characters"),

});

export default potholeSchema;