import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Loader2 className="w-5 h-5 animate-spin" />
    </div>
  );
};

export default Loading;
