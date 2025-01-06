import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="w-[90%] mx-auto  flex flex-col items-center justify-center gap-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Track, Improve, and Celebrate Your Habits Every Day
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Streakly helps you track daily habits, earn XP, unlock badges, and
          share your progress with friends!
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="relative">
            <Image
              src="/playstore.svg"
              alt="Google Play"
              width={50}
              height={50}
              className="mr-2"
            />
            Google Play
            <Badge variant="secondary" className="absolute -right-2 -top-2">
              Soon
            </Badge>
          </Button>
          <Button size="lg" variant="outline" className="relative">
            <Image
              src="/appstore.png"
              alt="App Store"
              width={40}
              height={40}
              className="mr-2"
            />
            App Store
            <Badge variant="secondary" className="absolute -right-2 -top-2">
              Soon
            </Badge>
          </Button>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border bg-background shadow-xl max-w-[600px] w-full mx-auto mt-20">
        <Image
          src="/hero.jpg"
          alt="Streakly App Interface"
          width={600}
          height={320}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
