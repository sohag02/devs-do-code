"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { createAPIKey } from "@/app/actions/apikey";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

export function CreateApiKeyDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateKey = async () => {
    if (name.trim() === "") return;

    setIsLoading(true);
    try {
      await createAPIKey(name);
    } catch (error) {
      console.error("Failed to create API key:", error);
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button disabled={false} className="flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Create API Key
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#232627] text-white border border-white/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className=""
        >
          <DialogHeader>
            <DialogTitle>Create New API Key</DialogTitle>
            <DialogDescription className="font-thin">
              Enter a name for your new API key. The key will be generated
              automatically.
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-white/10 bg-[#232627] text-white focus:border-primary"
            />
          </div>
          <DialogFooter className="flex justify-end mt-2">
            <Button
              onClick={handleClose}
              disabled={isLoading}
              className="bg-[#373C3E] hover:bg-[#373C3E]/80 text-white"
            >
              Close
            </Button>
            <Button onClick={handleCreateKey} disabled={isLoading}>
              {isLoading ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
