import { z } from "zod";

export const transactionStatusSchema = z.enum([
    "PENDING",
    "COMPLETED",
    "FAILED",
    "CANCELED",
]);

export type TransactionStatus = z.infer<typeof transactionStatusSchema>;

export const transactionTypeSchema = z.enum(["INCOME", "EXPENSE", "TRANSFER"]);
export type TransactionType = z.infer<typeof transactionTypeSchema>;

export const transactionSchema = z.object({
    id: z.union([z.string(), z.number()]).transform(String),
    amount: z.number().nonnegative(),
    date: z.string(),
    type: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    status: z.string().optional(),
});

export type Transaction = z.infer<typeof transactionSchema>;
