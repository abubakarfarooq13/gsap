"use client";
import { Button } from "@/components/ui/button";
import { getContrastColor } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Our projects", href: "#" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto container ">
        <nav
          className={`flex h-16 items-center justify-between text-white`}
          aria-label="Primary"
        >
          <a href="#" className="text-lg font-semibold tracking-tight">
            Akaltic
          </a>

          <div className="">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="fullpage-menu"
              onClick={() => setOpen((v) => !v)}
              className="group inline-flex items-center gap-2 rounded-full hover:px-0 duration-300  px-4 py-2 shadow-sm backdrop-blur transition-all text-white cursor-pointer"
            >
              <span
                aria-hidden="true"
                className="relative block h-4 w-5 group-hover:translate-x-6 transition-all duration-300"
              >
                <span
                  className={
                    "absolute inset-x-0 top-0 h-0.5 rounded  transition-all duration-300 bg-white " +
                    (open ? "translate-y-[7px] rotate-45" : "")
                  }
                />
                <span
                  className={
                    "absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded  bg-white transition-opacity duration-300 " +
                    (open ? "opacity-0" : "opacity-100")
                  }
                />
                <span
                  className={
                    "absolute inset-x-0 bottom-0 h-0.5 rounded transition-all duration-300  bg-white" +
                    (open ? "-translate-y-[7px] -rotate-45" : "")
                  }
                />
              </span>

              <span className="text-sm font-medium  transition-all duration-200 group-hover:opacity-0 group-hover:-translate-x-1">
                Menu
              </span>
            </button>
          </div>
          <div>
            <Button className="font-bold">Reach Out</Button>{" "}
          </div>
        </nav>
      </div>

      <div
        id="fullpage-menu"
        role="dialog"
        aria-modal="true"
        className={
          "fixed inset-0 z-40 bg-white transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] " +
          (open ? "translate-y-0" : "-translate-y-full")
        }
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <button
          className="absolute right-4 top-4 rounded-full border border-neutral-300/70 bg-white/80 px-3 py-1 text-sm shadow-sm hover:bg-white"
          onClick={() => setOpen(false)}
        >
          Close
        </button>

        <div className="flex h-full items-center justify-center">
          <ul className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map((item, idx) => (
              <li
                key={item.label}
                className={
                  "text-3xl font-semibold tracking-tight transform transition-all duration-500 " +
                  (open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4")
                }
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-neutral-900 hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
