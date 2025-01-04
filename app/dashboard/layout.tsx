import { Sidebar } from "./sidebar";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#202123] text-white">
      <Navbar />
      <div className="flex min-h-screen pt-20">
        <Sidebar />
        <main className="flex-1 px-8 py-6">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-xl border-none  ">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
