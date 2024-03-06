import Refractor from "react-refractor";
import typescript from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import { Fira_Code } from "next/font/google";
import "./code-component.css";

const fc = Fira_Code({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  const prismWindow = window as any;
  prismWindow.Prism = prismWindow.Prism || {};
  prismWindow.Prism.manual = true;
}

Refractor.registerLanguage(typescript);
Refractor.registerLanguage(tsx);

export interface CodeBlock {
  _type: "code";
  code: string;
  language?: string;
}

export const CodeComponent = ({ value }: { value: any }) => {
  return <Refractor language={value.language || "js"} value={value.code || ""} className={`${fc.className}`} />;
};
