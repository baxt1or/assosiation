import { About } from "@/components/About";
import { Companies } from "@/components/Companies";

import { Home } from "@/components/Home";

import { MembersList } from "@/components/MembersList";
import { NewsList } from "@/components/NewsList";

const HomePage = () => {
  return (
    <>
      <Home />
      <div className="max-w-7xl mx-auto px-8">
        <Companies />
        <About />
        <MembersList />
        <NewsList />
      </div>
    </>
  );
};

export default HomePage;
