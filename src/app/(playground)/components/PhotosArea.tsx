'use client';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

interface PhotosAreaProps {
  leftMenuOpen: boolean;
  rightMenuOpen: boolean;
}

export function PhotosArea({ leftMenuOpen, rightMenuOpen }: PhotosAreaProps) {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100';

  const photos = [
    // Replace with your own photo URLs or import images
    'https://via.placeholder.com/540x960', // 9:16 aspect ratio
    'https://via.placeholder.com/540x960',
    'https://via.placeholder.com/540x960',
    'https://via.placeholder.com/540x960',
    'https://via.placeholder.com/540x960',
    'https://via.placeholder.com/540x960',
    'https://via.placeholder.com/540x960',
    'https://via.placeholder.com/540x960',
    'https://via.placeholder.com/540x960',
    // Add more as needed
  ];

  const maxRows = 3;
  const maxCols = 3;
  const totalPhotos = Math.min(photos.length, maxRows * maxCols);
  const displayPhotos = photos.slice(0, totalPhotos);

  return (
    <main
  className={`flex-1 ${bgColor} flex flex-col overflow-hidden transition-[margin] duration-300 ease-in-out
    ${leftMenuOpen ? 'ml-64' : 'ml-16'}
    ${rightMenuOpen ? 'mr-96' : 'mr-16'}`}
    >
      <div className="flex-1 overflow-y-auto p-4 flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4" style={{ maxWidth: '400px' }}>
          {displayPhotos.map((photoUrl, index) => (
            <div key={index} className="w-full">
              <div className="aspect-[9/16]">
                <Image
                  src={photoUrl}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}