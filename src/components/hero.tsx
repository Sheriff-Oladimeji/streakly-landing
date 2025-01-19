import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import Link from "next/link";

const andriodApk = "https://expo.dev/artifacts/eas/vKy8Xa7AmkfcYffNfg71M7.apk";

export default function Hero() {
  return (
    <section className="w-[90%] mx-auto flex flex-col items-center justify-center gap-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Track, Improve, and Celebrate Your Habits Every Day
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Streakup helps you track daily habits, earn XP, unlock badges, and
          share your progress with friends!
        </p>
        <div className="flex flex-col gap-4 sm:flex-row mt-8">
          <Link href={andriodApk}>
            <Button
              size="lg"
              className="relative group hover:bg-blue-600 transition-colors bg-blue-500 text-white min-w-[200px] h-14"
            >
              <div className="flex items-center justify-center space-x-3">
                <FaGooglePlay className="w-6 h-6" />
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-80">GET IT ON</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </div>
            </Button>
          </Link>
          <Button
            size="lg"
            className="relative group hover:bg-gray-800 transition-colors bg-gray-900 text-white min-w-[200px] h-14"
          >
            <div className="flex items-center justify-center space-x-3">
              <FaAppStore className="w-6 h-6" />
              <div className="flex flex-col items-start">
                <span className="text-xs opacity-80">Download on the</span>
                <span className="font-semibold">App Store</span>
              </div>
              <Badge
                variant="secondary"
                className="absolute -right-2 -top-2 bg-blue-500 text-white"
              >
                Soon
              </Badge>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
