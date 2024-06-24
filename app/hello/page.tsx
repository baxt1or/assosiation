import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Companies } from "@/components/companies";
import Image from "next/image";
import { MembersList } from "@/components/MembersList";
import { NewsList } from "@/components/NewsList";

const buttons = [
  {
    label: "UI/UX Design",
    href: "/design",
  },
  {
    label: "Development",
    href: "/development",
  },
  {
    label: "Mobile",
    href: "/mobile",
  },
  {
    label: "ML & AI Development",
    href: "/ml-ai",
  },
];
const links = [
  {
    label: "Об Ассоциации",
    href: "/work",
  },
  {
    label: "Членство",
    href: "/about",
  },
  {
    label: "Новости",
    href: "/services",
  },
  {
    label: "Законодательство",
    href: "/contact",
  },
  {
    label: "Контакты",
    href: "/",
  },
];

const Home = () => {
  return (
    <div>
      <header className="fixed top-0 right-0 left-0 h-12 p-4 bg-white">
        <nav className="flex items-center justify-between">
          <Link
            href={"/"}
            className="text-sm tracking-tight font-bold text-black hover:opacity-50"
          >
            Uzpharmassosiation
          </Link>

          <div className="hidden md:flex items-center gap-4 ">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn("text-sm font-bold text-black cursor-pointer ")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <h1 className="text-sm font-bold text-black hover:opacity-50 cursor-pointer">
            Ташкент,Узбекистан
          </h1>

          <Link
            href={"/"}
            className="hidden md:block underline font-semibold text-black text-sm hover:opacity-50 underline-offset-1"
          >
            Оставить заявку
          </Link>

          {/* Mobile Navbar */}
        </nav>
      </header>

      <section className="mt-16 bg-white">
        <div className="flex flex-col gap-y-8 px-4">
          <div className="flex items-center justify-between">
            {/* Corrected typographical errors in the heading */}
            <h1 className="text-3xl text-black max-w-lg font-semibold">
              Ассоциация представительств иностранных фармацевтических компаний
              и производителей в Республике Узбекистан
            </h1>

            {/* <h1 className="hidden md:block max-w-[200px] text-sm mx-auto text-black font-normal pl-8">
              Trusted by 50+ leading brands for exceptional design solutions
            </h1> */}
          </div>

          <div className="mt-5 flex flex-col md:flex-row items-center justify-between">
            <div className="flex gap-2 md:gap-4">
              {buttons.map((button) => (
                <Link
                  href={button.href}
                  key={button.label}
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "rounded-2xl bg-gray-100 text-xs font-normal text-black block md:inline-block w-full md:w-auto"
                  )}
                >
                  {button.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex gap-2 max-w-[200px] mx-auto mt-4 md:mt-0">
              <Button className="rounded-2xl w-full">Оставить заявку</Button>
              <Button variant="outline" className="rounded-2xl w-full">
                Meet the team
              </Button>
            </div>
          </div>
        </div>

        <div className="px-4 mt-5 relative">
          <video
            loop
            autoPlay
            muted
            src="/hello.mp4"
            className="w-full rounded-2xl h-[600px] object-cover"
          />

          <div className="absolute top-4 right-6 w-[250px] h-auto bg-white rounded-lg p-4 shadow-lg">
            <h1 className="font-bold text-black">Baxtior Farhodov</h1>
            <p className="font-light text-muted-foreground text-sm mt-2">
              Engineer
            </p>

            <p className="text-xs text-black font-light uppercase mt-4">
              He is always ready to turn complex ideas into user-friendly
              digital experiences
            </p>
          </div>
        </div>
      </section>
      <Companies />
      <NewsList />
    </div>
  );
};

export default Home;
