import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-3xl font-semibold capitalize mb-8 text-center underline">{children}</h2>;
}

export default SectionHeading;
