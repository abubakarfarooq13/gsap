/*eslint-disable*/
//@ts-nocheck
let gsapPromise: Promise<any> | null = null;

export function loadGSAP(plugins: (() => Promise<any>)[] = []) {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (!gsapPromise) {
    gsapPromise = import("gsap").then(async (mod) => {
      const gsap = mod.default || mod; // ESM/CJS safe
      for (const getPlugin of plugins) {
        const plugin = await getPlugin();
        gsap.registerPlugin?.(plugin);
      }
      return gsap;
    });
  }
  return gsapPromise;
}
