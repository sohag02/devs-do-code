'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, Paperclip } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useModel } from '../../context/ModelContext';
import { FilePreview } from './FilePreview';
import Image from 'next/image';

interface ChatInputProps {
  onSendMessage: (message: string, attachments: File[]) => void;
  onFileUpload?: (files: File[]) => void;
  className?: string;
  initialValue?: string;
  onChange?: (text: string) => void;
  inputRef?: React.RefObject<HTMLTextAreaElement>;
  inputWidthClass?: string;
  isDisabled?: boolean;
  isGenerating?: boolean;
  onStopGeneration?: () => void;
}

export function ChatInput({
  onSendMessage,
  className = '',
  initialValue = '',
  onChange,
  inputRef: externalInputRef,
  inputWidthClass = '',
  isDisabled = false,
  isGenerating = false,
  onStopGeneration,
}: ChatInputProps) {
  const { theme } = useTheme();
  const { selectedProvider } = useModel();
  const [message, setMessage] = useState(initialValue);
  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const localInputRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = externalInputRef || localInputRef;

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const bgColor = theme === 'dark' ? 'bg-[#545454]' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-600' : 'border-gray-200';
  const buttonHoverColor =
    theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100';

  useEffect(() => {
    setMessage(initialValue || '');
  }, [initialValue]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [message, inputRef]);

  const handleSubmit = () => {
    if (message.trim() || attachments.length > 0) {
      onSendMessage(message.trim(), attachments);
      setMessage('');
      setAttachments([]);
      if (onChange) {
        onChange('');
      }
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
      }
    }
  };

  const handleAttachment = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setAttachments((prev) => [...prev, ...files]);
  };

  const removeAttachment = (fileName: string) => {
    setAttachments((prev) => prev.filter((file) => file.name !== fileName));
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setMessage(text);
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <div className={`p-3 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {attachments.length > 0 && (
          <div className="mb-3 space-y-1">
            {attachments.map((file) => (
              <FilePreview
                key={file.name}
                file={file}
                onRemove={() => removeAttachment(file.name)}
              />
            ))}
          </div>
        )}

        <div className="relative flex items-center gap-2 justify-center">
          {/* Files Button */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleAttachment}
          />
          <button
            className={`p-2 rounded-lg ${buttonHoverColor} ${textColor} transition-colors flex-shrink-0`}
            onClick={() => fileInputRef.current?.click()}
            disabled={isDisabled}
          >
            <Paperclip className="w-5 h-5" />
          </button>

          {/* Text Input */}
          <div className={`relative ${inputWidthClass}`}>
            <textarea
              ref={inputRef}
              value={message}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (
                    e.ctrlKey ||
                    (!e.shiftKey && !e.altKey && !e.metaKey)
                  ) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }
              }}
              placeholder="Type your message..."
              rows={1}
              className={`w-full px-3 py-2 rounded-lg resize-none ${bgColor} ${textColor}
                          border ${borderColor} focus:outline-none focus:ring-2
                          focus:ring-indigo-500 dark:focus:ring-indigo-400
                          min-h-[36px] max-h-[160px] text-sm`}
              style={{ overflow: 'hidden' }}
              disabled={isDisabled}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <Image
                src={selectedProvider.logoUrl}
                alt={selectedProvider.name}
                className="w-5 h-5 object-contain opacity-50"
                width={5}
                height={5}
              />
            </div>
          </div>

          {/* Send/Stop Button */}
          <button
            onClick={isGenerating ? onStopGeneration : handleSubmit}
            disabled={isDisabled || (!isGenerating && !message.trim() && attachments.length === 0)}
            className={`p-2 rounded-lg flex-shrink-0 ${
              isGenerating
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : message.trim() || attachments.length > 0
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                : 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed'
            } transition-colors`}
          >
            {isGenerating ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="6" y="6" width="12" height="12" strokeWidth="2" />
              </svg>
            ) : (
              <ArrowUp className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}