"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Ellipsis, Loader2, Pencil, Trash2 } from "lucide-react";
import { useSession } from "@/context/SessionContext";
import useSWR from "swr";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { renameChat, deleteChat } from "@/app/actions/chat";

export interface Chat {
  id: string;
  title: string;
  userId: string;
  createdAt: string;
}

const fetcher = (url: string): Promise<Chat[]> =>
  fetch(url).then((res) => res.json());

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.2,
    },
  }),
};

export function ChatHistory({ isExpanded }: { isExpanded: boolean }) {
  const { user } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [renamingChat, setRenamingChat] = useState<Chat | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [deletingChat, setDeletingChat] = useState<Chat | null>(null);
  const {
    data: chats,
    isLoading,
    mutate,
  } = useSWR(`/api/history?id=${user?.userid}`, fetcher);

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
      <div
        className={`px-2 text-zinc-500 w-full flex flex-row justify-center items-center text-sm gap-2 ${
          isExpanded ? "" : "hidden"
        }`}
      >
        Your conversations will appear here once you start chatting!
      </div>
    );
  }

  const handleRename = async () => {
    if (renamingChat) {
      const updatedChat = await renameChat(renamingChat.id, newTitle);
      mutate(
        (currentChats) =>
          currentChats?.map((chat) =>
            chat.id === updatedChat.id
              ? { ...chat, title: updatedChat.title }
              : chat
          ),
        false
      );
      setRenamingChat(null);
      setNewTitle("");
    }
  };

  const handleDelete = async () => {
    if (deletingChat) {
      const deletedChat = await deleteChat(deletingChat.id);
      mutate(
        (currentChats) =>
          currentChats?.filter((chat) => chat.id !== deletedChat.id),
        false
      );
      if (deletedChat.id === pathname.split("/")[2]) {
        router.push("/playground");
      }
      setDeletingChat(null);
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-2">
      <nav className="space-y-1">
        <AnimatePresence>
          {chats!.map((chat, index) => (
            <motion.div
              key={chat.id}
              custom={index}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={`/playground/${chat.id}`}
                className={`flex items-center justify-between gap-4 px-2 py-2 rounded-lg ${
                  pathname === `/playground/${chat.id}` && isExpanded
                    ? "bg-white/10"
                    : "hover:bg-white/5"
                } transition-colors group`}
              >
                <motion.span
                  className={`text-gray-300 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis flex-grow ${
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                      >
                        <Ellipsis className="h-4 w-4 text-gray-400 group-hover:text-white" />
                        <span className="sr-only">Chat options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="text-white bg-[#2F2F2F] border-none rounded-lg p-2 shadow-md">
                      <DropdownMenuItem
                        onSelect={() => setRenamingChat(chat)}
                        className="flex items-center px-2 py-1.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        <Pencil className="w-4 h-4 mr-2" />
                        <span>Rename</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => setDeletingChat(chat)}
                        className="flex items-center px-2 py-1.5 text-red-400 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </nav>

      <Dialog open={!!renamingChat} onOpenChange={() => setRenamingChat(null)}>
        <DialogContent className="sm:max-w-[425px] bg-[#2F2F2F] text-white">
          <DialogHeader>
            <DialogTitle>Rename Chat</DialogTitle>
            <DialogDescription>
              Enter a new title for your chat.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                id="name"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="col-span-3 bg-[#424242] border-none text-white"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleRename}>
              Rename
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!deletingChat} onOpenChange={() => setDeletingChat(null)}>
        <DialogContent className="sm:max-w-[425px] bg-[#2F2F2F] text-white">
          <DialogHeader>
            <DialogTitle>
              Delete Chat{" "}
              <span className="font-bold truncate">{deletingChat?.title}</span>
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this chat? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeletingChat(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete} className="bg-red-400 hover:bg-red-400/90"> 
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
