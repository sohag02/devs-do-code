"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Loader2, StopCircle, Paperclip, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Attachment } from "ai";
import { PreviewAttachment } from "./PreviewAttachment";

interface MessageInputProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
    files: Attachment[]
  ) => void;
  isLoading: boolean;
  stop: () => void;
}

export function MessageInput({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
}: MessageInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [uploadQueue, setUploadQueue] = useState<Array<string>>([]);
  const [attachments, setAttachments] = useState<Array<Attachment>>([]);

  const maxRows = 10;

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const newHeight = Math.min(textarea.scrollHeight, maxRows * 24); // Assuming 24px per row
      textarea.style.height = `${newHeight}px`;
    }
  }, [value, maxRows]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e, attachments);
      setValue("");
      setAttachments([]);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    handleInputChange(event);
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/file/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const { url, pathname, contentType } = data;

        return {
          url,
          name: pathname,
          contentType: contentType,
        };
      }
      const { error } = await response.json();
      console.error(error);
    } catch (error) {
      console.error("Failed to upload file, please try again!");
    }
  };

  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);

      setUploadQueue(files.map((file) => file.name));

      try {
        const uploadPromises = files.map((file) => uploadFile(file));
        const uploadedAttachments = await Promise.all(uploadPromises);
        const successfullyUploadedAttachments = uploadedAttachments.filter(
          (attachment) => attachment !== undefined
        );

        setAttachments((currentAttachments) => [
          ...currentAttachments,
          ...successfullyUploadedAttachments,
        ]);
      } catch (error) {
        console.error("Error uploading files!", error);
      } finally {
        setUploadQueue([]);
      }
    },
    [setAttachments]
  );

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, attachments);
        setAttachments([]);
      }}
      className=""
    >
      {/* Attachments */}
      {(attachments.length > 0 || uploadQueue.length > 0) && (
        <div className="flex flex-row gap-2 bg-[#2F2F2F] p-2 rounded-t-3xl">
          {attachments.map((attachment, index) => (
            <PreviewAttachment key={index} attachment={attachment} />
          ))}

          {uploadQueue.map((filename) => (
            <PreviewAttachment
              key={filename}
              attachment={{
                url: "",
                name: filename,
                contentType: "",
              }}
              isUploading={true}
            />
          ))}
          
        </div>
      )}

      <Textarea
        ref={textareaRef}
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        className={`${
          attachments.length > 0 ? "rounded-t-none" : "rounded-t-3xl"
        } resize-none rounded-b-none p-4 bg-[#2F2F2F] text-white  overflow-hidden transition-height duration-200 border-none`}
      />
      <div className="bottom-2 p-2 rounded-b-3xl bg-[#2F2F2F] px-4 flex items-center justify-between w-full">
        <div>
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            multiple
            hidden
            // ref={fileInputRef}
          />
          <label htmlFor="file-input" className="hover:cursor-pointer">
            {/* <Button size={"icon"}> */}
            <Paperclip className="h-5 w-5 text-white rotate-[315deg]" />
            {/* </Button> */}
          </label>
        </div>
        <div>
          {isLoading ? (
            <Button
              variant="destructive"
              onClick={stop}
              size="icon"
              className="bg-red-400"
            >
              <StopCircle className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              size="icon"
              disabled={input.length === 0 || isLoading}
              className="bg-white rounded-full"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowUp className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
