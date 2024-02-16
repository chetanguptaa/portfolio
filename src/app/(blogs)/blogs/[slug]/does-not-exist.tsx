import React from "react";

const DoesNotExist = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center font-semibold text-blue-600">
        <p className="text-lg mb-4">This blog does not exist!</p>
        <div className="animate-pulse text-gray-500 text-lg">😑</div>{" "}
      </div>
    </div>
  );
};

export default DoesNotExist;
