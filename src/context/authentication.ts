import { atom } from "jotai";

const isLoggedIn = (typeof window !== "undefined" && window.localStorage?.getItem("isLoggedIn") === "true") ?? false;

export const isLoggedInAtom = atom(isLoggedIn);
