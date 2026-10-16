"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "xpvest-premium";

export type PlanId = "monthly" | "yearly";

type PremiumContextValue = {
  isPremium: boolean;
  plan: PlanId | null;
  subscribe: (plan: PlanId) => void;
  cancel: () => void;
};

const PremiumContext = createContext<PremiumContextValue>({
  isPremium: false,
  plan: null,
  subscribe: () => undefined,
  cancel: () => undefined,
});

/**
 * Tracks the simulated Premium membership. There is no backend yet, so the
 * chosen plan is persisted in localStorage.
 *
 * Server rendering always assumes the basic plan; the effect below upgrades the
 * client to premium a frame later. That keeps the default (basic) markup in the
 * HTML instead of a loading placeholder.
 */
export function PremiumProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<PlanId | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "monthly" || stored === "yearly") setPlan(stored);
    } catch {
      /* storage can be unavailable in private mode — ignore */
    }
  }, []);

  const subscribe = useCallback((next: PlanId) => {
    setPlan(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const cancel = useCallback(() => {
    setPlan(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <PremiumContext.Provider
      value={{ isPremium: plan !== null, plan, subscribe, cancel }}
    >
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  return useContext(PremiumContext);
}
