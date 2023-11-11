"use client";

import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { FormEvent, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { FiMail } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function SubscribePageComponent() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const isInvalid = useMemo(() => {
    return validateEmail(email) ? false : true;
  }, [email]);
  const subscribeButton = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await axios.post("/api/blogs/subscribe", {
        email,
      });
      return router.push("/blogs/subscribe/validate");
    } catch (error: any) {
      console.log("Saving failed", error.message);
      toast.error("Error subscribing!");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-[340px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-blue-500 to-violet-500 text-white shadow-lg container mx-auto mt-[10%]">
        <Input
          label="Email"
          radius="lg"
          endContent={
            <FiMail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          classNames={{
            label: "text-black",
            input: ["bg-transparent", "text-black", "placeholder:text-black"],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/70",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "group-data-[focused=true]:bg-default-200/70",
              "!cursor-text",
            ],
          }}
          placeholder="Enter your Email"
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "success"}
          onValueChange={setEmail}
        />
      </div>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-red-500 to-rose-500 text-white shadow-lg mt-6"
        onClick={subscribeButton}
        isDisabled={isInvalid}
      >
        Subscribe
      </Button>
    </div>
  );
}
