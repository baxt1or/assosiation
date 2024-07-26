import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "ru"] as const;

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    ru: "/about",
  },

  "/news": {
    en: "/news",
    ru: "/news",
  },

  "/director": {
    en: "/director",
    ru: "/director",
  },
  "/membership": {
    en: "/membership",
    ru: "/membership",
  },
  "/legislation": {
    en: "/legislation",
    ru: "/legislation",
  },

  "/contacts": {
    en: "/contacts",
    ru: "/contacts",
  },
  "/members": {
    en: "/members",
    ru: "/members",
  },
  "/news/[newsId]": {
    en: `/news/[newsId]`,
    ru: `/news/[newsId]`,
  },
  "/legislation/[documentId]": {
    en: `/legislation/[documentId]`,
    ru: `/legislation/[documentId]`,
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
