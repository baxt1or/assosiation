import Image from "next/image";
import Link from "next/link";
import { links } from "./Navbar";
import { data } from "@/app/(main)/contacts/page";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const Footers = () => {
  return (
    <footer className="text-white bg-[#001561] pt-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 bg-[#001561]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={54} height={54} />
              <p className="text-sm max-w-xs text-center md:text-left">
                Ассоциация представительств иностранных фармацевтических
                компаний и производителей в Республике Узбекистан
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-y-2 items-center md:items-start">
                {data.numbers.map((number) => (
                  <p className="flex items-center gap-2 text-sm" key={number}>
                    <Phone className="h-4 w-4" aria-label="Phone icon" />
                    {number}
                  </p>
                ))}
                <h1 className="flex items-center gap-2 text-sm font-semibold ">
                  <Mail className="w-4 h-4" aria-label="Mail icon" />
                  {data.email}
                </h1>
                <h1 className="flex items-center gap-2 text-sm font-semibold ">
                  <MapPin className="w-5 h-5" aria-label="Map pin icon" />
                  {data.address}
                </h1>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-y-2 items-center md:items-start">
            <h1 className="text-lg font-bold">Навигация</h1>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-white hover:underline"
                aria-label={link.title}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex flex-col gap-4 items-center">
            <p className="text-lg font-bold">Социальные сети</p>
            <div className="flex items-center gap-2 justify-center">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-blue-500 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 items-center md:items-start">
            <p className="text-center md:text-left text-sm">
              &copy; {new Date().getFullYear()} Baxtiyor Bekmurodov. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="hover:underline text-sm"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:underline text-sm"
                aria-label="Terms of Service"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
