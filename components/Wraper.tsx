import { Companies } from "./companies";
import { About } from "./About";

import { Home } from "./home";
import { MembersList } from "./member/MemberList";
import { NewsSection } from "./news/NewsSection";

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
