import { Trophy, Share2, Bell, BarChart2, Settings, Layout, Award, Users, Smartphone, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Streak Tracking",
    description: "Track your daily habits and build consistent streaks",
    icon: Trophy,
  },
  {
    title: "XP & Rewards",
    description: "Earn XP and level up as you maintain your habits",
    icon: Award,
  },
  {
    title: "Social Sharing",
    description: "Share your achievements with friends and social media",
    icon: Share2,
  },
  {
    title: "Smart Notifications",
    description: "Get reminded at the right time to maintain your streak",
    icon: Bell,
  },
  {
    title: "Detailed Analytics",
    description: "View your progress with beautiful charts and insights",
    icon: BarChart2,
  },
  {
    title: "Customization",
    description: "Personalize your habits and tracking preferences",
    icon: Settings,
  },
  {
    title: "Widgets",
    description: "Quick access to your habits right from your home screen",
    icon: Layout,
  },
  {
    title: "Leaderboards",
    description: "Compete with friends and climb the global rankings",
    icon: Users,
  },
  {
    title: "Premium Features",
    description: "Unlock advanced features with Streakly Premium",
    icon: Zap,
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="w-[90%] mx-auto  space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to build and maintain healthy habits
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

