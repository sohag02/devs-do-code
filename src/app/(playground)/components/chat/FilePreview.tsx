'use client';
import React from 'react';
import {
  X,
  FileText,
  Image as ImageIcon,
  Archive,
  FileCode,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface FilePreviewProps {
  file: File;
  onRemove: () => void;
  uploadProgress?: number;
}

export function FilePreview({
  file,
  onRemove,
  uploadProgress,
}: FilePreviewProps) {
  const { theme } = useTheme();
  const [preview, setPreview] = React.useState<string | null>(null);

  const bgColor = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100';
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const borderColor = theme === 'dark' ? 'border-gray-600' : 'border-gray-300';

  React.useEffect(() => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [file]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileType: string, fileName: string) => {
    if (fileType.startsWith('image/'))
      return <ImageIcon className="w-6 h-6" />;
    else if (
      fileType === 'application/zip' ||
      fileName.endsWith('.zip') ||
      fileName.endsWith('.rar')
    )
      return <Archive className="w-6 h-6" />;
    else if (
      fileType.startsWith('text/') ||
      fileName.endsWith('.txt') ||
      fileName.endsWith('.md') ||
      fileName.endsWith('.py') ||
      fileName.endsWith('.js') ||
      fileName.endsWith('.css') ||
      fileName.endsWith('.html') ||
      fileName.endsWith('.java') ||
      fileName.endsWith('.cpp')
    )
      return <FileCode className="w-6 h-6" />;
    else return <FileText className="w-6 h-6" />;
  };

  return (
    <div
      className={`relative ${bgColor} rounded-lg p-3 mb-2 border ${borderColor} max-w-2xl mx-auto`}
    >
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded bg-gray-600 flex items-center justify-center flex-shrink-0">
            {getFileIcon(file.type, file.name)}
          </div>

          <div className="flex-1 min-w-0">
            <p
              className={`text-sm font-medium ${textColor} truncate`}
              title={file.name}
            >
              {file.name}
            </p>
            <p className="text-xs text-gray-500">
              {formatFileSize(file.size)}
            </p>

            {typeof uploadProgress === 'number' && (
              <div className="mt-1 h-1 w-full bg-gray-200 dark:bg-gray-600 rounded">
                <div
                  className="h-full bg-indigo-600 rounded transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <button
          onClick={onRemove}
          className="p-1 hover:bg-gray-600 rounded-full transition-colors flex-shrink-0 ml-2"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}

export default FilePreview;
