import { KeyboardEvent } from "react";

import { State } from "@/services/states/types";

export const preventSymbolsAndLimitDigits = (
  e: KeyboardEvent<HTMLInputElement>,
) => {
  const target = e.target as HTMLInputElement;

  if (["e", "E", "+", "-"].includes(e.key)) {
    e.preventDefault();
  }

  const currentValue = target.value;
  const digitCount = currentValue.replace(/\D/g, "").length;

  if (digitCount >= 2 && /\d/.test(e.key)) {
    e.preventDefault();
  }
};

export const transformAndSortStates = (
  states?: State[],
): { label: string; value: string }[] => {
  if (!states) return [];
  return states
    .map((state) => ({
      label: state.nome,
      value: state.nome.toLowerCase(),
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
};
