/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Section,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function VerificationEmail() {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Please click on the link below to verify your email
              </Heading>
              <Hr />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
