"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [hover, setHover] = React.useState(false);
  return (
    <>
      <section id="experience" ref={ref} className="scroll-mt-28 mb-28">
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline>
          {experiencesData.map((item, index) => (
            <div key={index} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <VerticalTimelineElement
                contentStyle={{
                  background: hover ? "#DBEAFE" : "#F0F6FE",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                visible={true}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "#F0F6FE",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize underline underline-offset-2">{item.title}</h3>
                <p className="font-normal !mt-0">{item.company}</p>
                <p className="!mt-1 !font-semibold">{item.description}</p>
              </VerticalTimelineElement>
            </div>
          ))}
        </VerticalTimeline>
      </section>
    </>
  );
}
