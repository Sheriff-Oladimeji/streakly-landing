import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const tiers = [
  {
    name: "Free",
    description: "Essential habit tracking features",
    price: "$0",
    features: [
      "Unlimited habits",
      "Basic streak tracking",
      "Daily reminders",
      "Basic statistics",
    ],
  },
  {
    name: "Premium",
    description: "Advanced features for power users",
    price: "Coming Soon",
    features: [
      "Everything in Free",
      "Advanced analytics",
      "Custom widgets",
      "Priority support",
      "Streak recovery",
      "Multiple reminders",
      "Export data",
    ],
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="w-[90%] mx-auto  space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Simple Pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the perfect plan for your habit tracking needs
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {tiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-3xl font-bold">{tier.price}</div>
              <ul className="mt-4 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={tier.name === "Premium" ? "default" : "outline"}
              >
                {tier.name === "Premium" ? "Join Waitlist" : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

