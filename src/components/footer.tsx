"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FlameIcon as Fire, Twitter, Instagram, Github } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Footer() {
  const { scrollToSection } = useScrollAnimation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id.replace("#", ""));
  };

  const handleDownloadClick = () => {
    scrollToSection('hero')
  };

  return (
    <footer className="border-t bg-background">
      <div className="w-[90%] mx-auto flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Fire className="h-6 w-6 text-primary" />
              <span className="font-bold">Streakup</span>
            </div>
            <p className="max-w-[250px] text-sm text-muted-foreground">
              Track your habits, earn rewards, and build a better you with
              streakup.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="#features"
                    onClick={(e) => handleClick(e, "features")}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    onClick={(e) => handleClick(e, "how-it-works")}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    onClick={(e) => handleClick(e, "pricing")}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    onClick={(e) => handleClick(e, "about")}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    onClick={(e) => handleClick(e, "blog")}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    onClick={(e) => handleClick(e, "privacy")}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    onClick={(e) => handleClick(e, "terms")}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Download</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground"
                    onClick={handleDownloadClick}
                  >
                    Download App
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Stay Updated</h4>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" type="email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} streakup. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="https://twitter.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://instagram.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://github.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
