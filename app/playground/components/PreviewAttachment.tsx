import type { Attachment } from 'ai';

import { Loader, File } from 'lucide-react';

export const PreviewAttachment = ({
  attachment,
  isUploading = false,
}: {
  attachment: Attachment;
  isUploading?: boolean;
}) => {
  const { name, url, contentType } = attachment;

  return (
    <div className="flex flex-row gap-2 bg-[#191B1C] rounded-xl p-2 items-center justify-start">
      <div className="w-10 h-10  bg-muted rounded-md relative flex flex-col items-center justify-center">
        {contentType ? (
          contentType.startsWith('image') ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={url}
              src={url}
              alt={name ?? 'An image attachment'}
              className="rounded-md size-full object-cover"
            />
          ) : (
            <div className='bg-[#A82B00] p-3 rounded-md'>
              <File key={url} className="w-6 h-6 text-white" />
            </div>
          )
        ) : (
          <div className="" />
        )}

        {isUploading && (
          <div className="animate-spin absolute text-zinc-500">
            <Loader className="w-6 h-6" />
          </div>
        )}
      </div>
      <div>
        <div className="text-xs text-white font-semibold w-24 truncate">{name}</div>
        <div className="text-xs text-gray-200 font-thin max-w-16 truncate">{contentType}</div>
      </div>
    </div>
  );
};