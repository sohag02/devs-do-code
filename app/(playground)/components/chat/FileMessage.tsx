'use client';
import {
  Download,
  X,
  Image as ImageIcon,
  Archive,
  FileCode,
  File,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn'

interface FileMessageProps {
  message: {
    id: string;
    sender: 'user' | 'ai';
    timestamp: Date;
    file: {
      name: string;
      type: string;
      url: string;
      size?: number;
    };
  };
  onDelete?: () => void;
}

const FileIcon = ({ fileType, fileName }: { fileType: string; fileName: string }) => {
  const iconClass = "w-8 h-8";
  
  if (fileType.startsWith('image/')) return <ImageIcon className={iconClass} />;
  if (fileType === 'application/zip' || /\.(zip|rar)$/i.test(fileName)) 
    return <Archive className={iconClass} />;
  if (fileType.startsWith('text/') || /\.(txt|md|py|js|ts|jsx|tsx|css|html|java|cpp)$/i.test(fileName))
    return <FileCode className={iconClass} />;
  return <File className={iconClass} />;
};

const formatFileSize = (bytes?: number): string => {
  if (!bytes) return 'Unknown size';
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`;
};

export function FileMessage({ message, onDelete }: FileMessageProps) {
  const { theme } = useTheme();

  const isUser = message.sender === 'user';
  const { name: fileName, type: fileType, size: fileSize } = message.file;

  const styles = {
    base: cn(
      'relative flex items-center rounded-lg border transition-all duration-200',
      'p-4 w-full group',
      theme === 'dark' 
        ? 'bg-gray-700/50 border-gray-600 hover:bg-gray-700/70' 
        : 'bg-white/50 border-gray-200 hover:bg-gray-50/70'
    ),
    iconWrapper: cn(
      'flex-shrink-0 w-12 h-12 rounded-md flex items-center justify-center mr-4',
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    ),
    fileName: cn(
      'text-base font-medium line-clamp-1',
      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
    ),
    fileInfo: 'text-sm text-gray-500',
    actionButton: cn(
      'p-1.5 rounded-full transition-colors duration-200',
      'opacity-0 group-hover:opacity-100',
      theme === 'dark' 
        ? 'hover:bg-gray-600 text-gray-400 hover:text-gray-200' 
        : 'hover:bg-gray-200 text-gray-500 hover:text-gray-700'
    )
  };

  const truncateFileName = (name: string, maxLength: number = 30) => {
    if (name.length <= maxLength) return name;
    const extIndex = name.lastIndexOf('.');
    const extension = extIndex !== -1 ? name.slice(extIndex) : '';
    const baseName = extIndex !== -1 ? name.slice(0, extIndex) : name;
    return `${baseName.slice(0, maxLength - extension.length - 3)}...${extension}`;
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = message.file.url;
    link.download = fileName;
    link.click();
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className="relative flex items-start max-w-[calc(100%-56px)]"
        style={{
          marginRight: isUser ? '7rem' : undefined,
          marginLeft: !isUser ? '7rem' : undefined,
        }}
      >
        <div 
          className={styles.base}
          role="article"
          aria-label={`File attachment: ${fileName}`}
        >
          <div className="flex items-start w-full">
            <div className={styles.iconWrapper}>
              <FileIcon fileType={fileType} fileName={fileName} />
            </div>
            <div className="flex-1 min-w-0">
              <p className={styles.fileName} title={fileName}>
                {truncateFileName(fileName)}
              </p>
              <div className={styles.fileInfo}>
                <span>{fileType || 'Unknown type'}</span>
                <span className="mx-2">•</span>
                <span>{formatFileSize(fileSize)}</span>
              </div>
            </div>
          </div>

          <div className="absolute top-2 right-2 flex space-x-1">
            <button
              onClick={handleDownload}
              className={styles.actionButton}
              aria-label="Download file"
              title="Download"
            >
              <Download className="w-5 h-5" />
            </button>
            {onDelete && (
              <button
                onClick={onDelete}
                className={styles.actionButton}
                aria-label="Delete file"
                title="Delete"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}