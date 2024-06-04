export type Expense = {
  amount: number | null;
  category?: "Option1" | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  updatedAt: Date;
};
