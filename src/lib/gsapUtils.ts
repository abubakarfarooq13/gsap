export const stagger = (
  each = 0.06,
  from: "start" | "center" | "end" = "start"
) => ({ stagger: { each, from } });

export const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
