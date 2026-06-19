"use client";

import { useState } from "react";
import { Plus, Trash2, ArrowLeft } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { formatDate, formatSEK } from "@/lib/utils";
import { EXPENSE_CATEGORIES } from "@/types";
import toast from "react-hot-toast";

interface BudgetContentProps {
  expenses: any[];
  legs: any[];
  countries: string[];
}

export default function BudgetContent({
  expenses,
  legs,
}: BudgetContentProps) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [category, setCategory] = useState("food");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("SEK");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [localExpenses, setLocalExpenses] = useState(expenses);

  const totalSEK = localExpenses.reduce((acc, e) => acc + e.sekAmount, 0);

  const byCategory = localExpenses.reduce((acc: any, e: any) => {
    acc[e.category] = (acc[e.category] || 0) + e.sekAmount;
    return acc;
  }, {} as Record<string, number>);

  const byLeg = legs.map((leg) => {
    const legStart = new Date(leg.startDate);
    const legEnd = new Date(leg.endDate);
    const legExpenses = localExpenses.filter((e: any) => {
      const d = new Date(e.date);
      return d >= legStart && d <= legEnd;
    });
    return {
      name: leg.name,
      color: leg.color,
      total: legExpenses.reduce((acc: number, e: any) => acc + e.sekAmount, 0),
    };
  });

  const handleAddExpense = async () => {
    try {
      const res = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          amount: parseFloat(amount),
          currency,
          description,
          date,
        }),
      });
      if (!res.ok) throw new Error("Failed to add expense");
      const newExpense = await res.json();
      setLocalExpenses((prev) => [newExpense, ...prev]);
      setShowAddModal(false);
      setAmount("");
      setDescription("");
      toast.success("Expense added");
    } catch {
      toast.error("Failed to add expense");
    }
  };

  const handleDeleteExpense = async (id: string) => {
    try {
      const res = await fetch(`/api/expenses/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setLocalExpenses((prev) => prev.filter((e) => e.id !== id));
      toast.success("Expense deleted");
    } catch {
      toast.error("Failed to delete expense");
    }
  };

  const totalByLeg = byLeg.reduce((acc, l) => acc + l.total, 0);

  const flights = localExpenses
    .filter((e: any) => e.category === "flights")
    .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const totalFlights = flights.reduce((acc: number, e: any) => acc + e.sekAmount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Budget</h1>
          <p className="text-muted text-sm mt-1">
            Total: {formatSEK(totalSEK)} &middot; {localExpenses.length} expenses
          </p>
        </div>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="h-4 w-4" /> Add Expense
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>By Category</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            {EXPENSE_CATEGORIES.map((cat) => {
              const amount = byCategory[cat.value] || 0;
              const pct = totalSEK > 0 ? (amount / totalSEK) * 100 : 0;
              return (
                <div key={cat.value}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>{cat.label}</span>
                    <span className="font-medium">
                      {formatSEK(amount)} ({pct.toFixed(0)}%)
                    </span>
                  </div>
                  <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>By Leg</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            {byLeg.map((leg) => {
              const pct = totalByLeg > 0 ? (leg.total / totalByLeg) * 100 : 0;
              return (
                <div key={leg.name}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full inline-block"
                        style={{ backgroundColor: leg.color }}
                      />
                      {leg.name}
                    </span>
                    <span className="font-medium">
                      {formatSEK(leg.total)}
                    </span>
                  </div>
                  <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: leg.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Flights</CardTitle>
          <span className="text-sm text-muted">
            {formatSEK(totalFlights)} total &middot; {flights.length} segments
          </span>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-2 px-3 font-medium text-muted">Route</th>
                <th className="text-right py-2 px-3 font-medium text-muted">Per person</th>
                <th className="text-right py-2 px-3 font-medium text-muted">Total (2 pax)</th>
                <th className="text-right py-2 px-3 font-medium text-muted w-20">% of flights</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((f: any) => {
                const perPerson = f.sekAmount / 2;
                const pct = totalFlights > 0 ? (f.sekAmount / totalFlights) * 100 : 0;
                return (
                  <tr key={f.id} className="border-b border-card-border hover:bg-foreground/5">
                    <td className="py-2.5 px-3 font-medium">{f.description}</td>
                    <td className="py-2.5 px-3 text-right">{formatSEK(Math.round(perPerson))}</td>
                    <td className="py-2.5 px-3 text-right font-medium">{formatSEK(f.sekAmount)}</td>
                    <td className="py-2.5 px-3 text-right text-muted">{pct.toFixed(0)}%</td>
                  </tr>
                );
              })}
              <tr className="border-t-2 border-foreground/20 font-semibold">
                <td className="py-2.5 px-3">Total</td>
                <td className="py-2.5 px-3 text-right">{formatSEK(Math.round(totalFlights / 2))}</td>
                <td className="py-2.5 px-3 text-right">{formatSEK(totalFlights)}</td>
                <td className="py-2.5 px-3 text-right">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Expenses</CardTitle>
          <span className="text-sm text-muted">
            {localExpenses.length} entries
          </span>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-2 px-3 font-medium text-muted">
                  Date
                </th>
                <th className="text-left py-2 px-3 font-medium text-muted">
                  Description
                </th>
                <th className="text-left py-2 px-3 font-medium text-muted">
                  Category
                </th>
                <th className="text-right py-2 px-3 font-medium text-muted">
                  Amount
                </th>
                <th className="text-right py-2 px-3 font-medium text-muted">
                  SEK
                </th>
                <th className="py-2 px-3" />
              </tr>
            </thead>
            <tbody>
              {localExpenses.map((expense: any) => (
                <tr
                  key={expense.id}
                  className="border-b border-card-border hover:bg-foreground/5"
                >
                  <td className="py-2.5 px-3 text-muted">
                    {formatDate(expense.date)}
                  </td>
                  <td className="py-2.5 px-3 font-medium">
                    {expense.description}
                  </td>
                  <td className="py-2.5 px-3">
                    <Badge variant="default">{expense.category}</Badge>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    {expense.amount.toLocaleString()} {expense.currency}
                  </td>
                  <td className="py-2.5 px-3 text-right font-medium">
                    {formatSEK(expense.sekAmount)}
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <button
                      onClick={() => handleDeleteExpense(expense.id)}
                      className="p-1 text-muted hover:text-danger transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Modal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add Expense"
      >
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-1 rounded-lg border border-card-border bg-background px-3 py-2 text-sm"
            >
              {EXPENSE_CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full mt-1 rounded-lg border border-card-border bg-background px-3 py-2 text-sm"
                placeholder="0"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full mt-1 rounded-lg border border-card-border bg-background px-3 py-2 text-sm"
              >
                <option value="SEK">SEK</option>
                <option value="CNY">CNY</option>
                <option value="VND">VND</option>
                <option value="JPY">JPY</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-1 rounded-lg border border-card-border bg-background px-3 py-2 text-sm"
              placeholder="What was this for?"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mt-1 rounded-lg border border-card-border bg-background px-3 py-2 text-sm"
            />
          </div>
          <Button onClick={handleAddExpense} className="w-full">
            Add Expense
          </Button>
        </div>
      </Modal>
    </div>
  );
}
