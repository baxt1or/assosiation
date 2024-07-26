import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center z-50">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-gray-500 border-solid"></div>
    </div>
  );
};

export default LoadingSpinner;
