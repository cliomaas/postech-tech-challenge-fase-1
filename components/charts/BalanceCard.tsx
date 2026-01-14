"use client";
import Card from "@/components/ds/Card";
import Badge from "@/components/ds/Badge";
import { useTxStore } from "@/lib/store";
import { calcBalance } from "@/lib/utils/currency";
import { clsx } from "clsx";
import { formatBRL } from "@/src/core/money";

export default function BalanceCard() {
  const txs = useTxStore((s) => s.transactions);
  const balance = calcBalance(txs);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Saldo</p>
          <p
            className={clsx(
              "mt-1 text-3xl font-semibold",
              balance >= 0
                ? "text-green-600 dark:text-green-300"
                : "text-red-600 dark:text-red-300"
            )}
          >
            {formatBRL(balance)}
          </p>
        </div>

        <Badge color={balance >= 0 ? "green" : "red"}>
          {balance >= 0 ? "Positivo" : "Negativo"}
        </Badge>
      </div>
    </Card>
  );
}
