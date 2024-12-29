import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ellipsis, Loader2 } from "lucide-react";
import { useSession } from "@/context/SessionContext";
import { menuItemVariants } from "./sidebar";
import useSWR from "swr";
import { usePathname } from "next/navigation";

export interface Chat {
  id: string;
  title: string;
  userId: string;
  createdAt: string;
}

const fetcher = (url: string): Promise<Chat[]> =>
  fetch(url).then((res) => res.json());

export function ChatHistory({ isExpanded }: { isExpanded: boolean }) {
  const { user } = useSession();
  const pathname = usePathname();
  const { data: chats, isLoading } = useSWR(
    `/api/history?id=${user?.userid}`,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="px-2 text-zinc-500 w-full flex flex-row justify-center items-center text-sm gap-2">
        <Loader2 className="animate-spin" />
        <span>Loading chats...</span>
      </div>
    );
  }

  if (chats?.length === 0) {
    return (
      <div className="px-2 text-zinc-500 w-full flex flex-row justify-center items-center text-sm gap-2">
        Your conversations will appear here once you start chatting!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 mt-2">
      <nav className="space-y-1">
        <AnimatePresence>
          {chats!.map((chat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={`/playground/${chat.id}`}
                className={`flex items-center justify-between gap-4 px-2 py-1 rounded-lg ${
                  pathname === `/playground/${chat.id}` && isExpanded
                    ? "bg-white/5"
                    : "hover:bg-white/5"
                } transition-colors group`}
              >
                <motion.span
                  className={`text-gray-300 text-sm whitespace-nowrap ${
                    pathname === `/playground/${chat.id}` && isExpanded
                      ? "text-white"
                      : "group-hover:text-white"
                  } transition-colors`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {chat.title}
                </motion.span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button size={"default"} variant={"ghost"}>
                    <Ellipsis className="w-6 h-6 shrink-0 text-gray-400 hover:text-white" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </nav>
    </div>
  );
}
