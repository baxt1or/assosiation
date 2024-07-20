import { Companies } from "./companies";
import { About } from "./About";
import { MembersList } from "./MembersList";
import { NewsSection } from "./NewsSection";
import { Home } from "./home";

const Wraper = () => {
  return (
    <div>
      <Home />
      <div className="max-w-7xl mx-auto px-8 min-h-screen flex flex-col">
        <Companies />
        <About />
        <MembersList />
        <NewsSection />
      </div>
    </div>
  );
};

export default Wraper;
