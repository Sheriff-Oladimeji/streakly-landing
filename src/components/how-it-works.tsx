import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, CheckCircle, Share } from 'lucide-react'

const steps = [
  {
    title: "Create a habit",
    description: "Choose from popular habits or create your own custom habit to track",
    icon: Plus,
  },
  {
    title: "Track daily progress",
    description: "Check in daily to maintain your streak and earn XP",
    icon: CheckCircle,
  },
  {
    title: "Share achievements",
    description: "Celebrate your progress and share with friends",
    icon: Share,
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-[90%] mx-auto  space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          How It Works
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Get started with Streakly in three simple steps
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={step.title}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {index + 1}
                </span>
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{step.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

