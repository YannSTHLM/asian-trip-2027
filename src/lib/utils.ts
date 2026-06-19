import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CURRENCY_RATES } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToSEK(amount: number, currency: string): number {
  const rate = CURRENCY_RATES[currency];
  if (!rate) return amount;
  return Math.round(amount * rate * 100) / 100;
}

export function formatSEK(amount: number): string {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}

export function formatDateShort(date: Date | string): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
  }).format(d);
}

export function formatTime(date: Date | string): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export function daysBetween(start: Date | string, end: Date | string): number {
  const s = new Date(start);
  const e = new Date(end);
  return Math.ceil((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
}

export function daysRemaining(start: Date | string, end: Date | string): number {
  const today = new Date();
  const e = new Date(end);
  if (today > e) return 0;
  return daysBetween(today, e);
}

export function daysElapsed(start: Date | string): number {
  const today = new Date();
  const s = new Date(start);
  if (today < s) return 0;
  return daysBetween(s, today);
}
