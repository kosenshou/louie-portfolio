import { Button } from "@/components/ui/button";
import { GithubLogo, Linkedin } from "../icons";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <div className="flex gap-2 items-center">
          <Logo />
          <div className="font-bold">louie.aroy</div>
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="hidden sm:inline-flex rounded-full shadow-none"
            size="icon"
          >
            <Link href="https://linkedin.com/in/louie-aroy" target="_blank">
              <Linkedin />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
          >
            <Link href="https://github.com/kosenshou" target="_blank">
              <GithubLogo className="h-5! w-5!" />
            </Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
