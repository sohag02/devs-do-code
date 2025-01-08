import {
  SettingsPanel,
  type SettingsPanelProps,
} from "@/app/playground/components/settings/settings-panel";
import { Sidebar } from "@/app/playground/components/sidebar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Menu, Settings, PenBox } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MobileNavbar({ models, voices }: SettingsPanelProps) {
  return (
    <div className="fixed w-full top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-[#121212] px-4 shadow-sm md:hidden">
      <div className="flex w-full items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="text-[#B9B3A9] w-6 h-6" />
          </SheetTrigger>
          <SheetContent side={"left"} className="w-1/2 h-screen m-0">
            <Sidebar />
          </SheetContent>
        </Sheet>

        <div className="text-[#B9B3A9] font-bold text-large">DevsDoCode</div>

        <div className="flex items-center gap-2">
          <Link href="/playground" className="hover:bg-red-400">
            <PenBox className="text-[#B9B3A9] w-6 h-6" />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Settings className="text-[#B9B3A9] w-6 h-6" />
            </SheetTrigger>
            <SheetContent side={"right"} className="h-screen">
              <SettingsPanel models={models} voices={voices} />
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
