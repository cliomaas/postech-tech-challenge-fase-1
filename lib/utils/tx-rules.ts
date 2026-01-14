import { AnyTransaction } from "../types";
import { dayStartTsFromAny, getTodayISO } from "./date";

export function canEditTransaction(t: AnyTransaction, now = new Date()) {
    if (t.status === "scheduled") return true;
    if (t.status === "processing") return true;
    return false
}

export function canDeleteTransaction(t: AnyTransaction) {
    if (t.status === "scheduled") return true;
    if (t.status === "processing") return true;
    return t.status === "cancelled" || t.status === "failed";
}


export function isExpiredScheduled(tx: any) {
    if (tx.status !== "scheduled") return false;
    if (!tx.scheduledFor) return false;

    const todayStart = dayStartTsFromAny(getTodayISO());
    const scheduledStart = dayStartTsFromAny(tx.scheduledFor);

    return scheduledStart < todayStart;
}
