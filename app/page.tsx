"use client";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className=" flex justify-center items-center">
      <h1 className=" text-emerald-500 text-4xl">Hello, Next.js!</h1>
      <div>
        <Button>Click me</Button>
      </div>
    </div>
  );
}
