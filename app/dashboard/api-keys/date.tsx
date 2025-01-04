import React from 'react';

const DateComponent = ({ dateString }: { dateString: string }) => {
  const date = new Date(dateString);
  const now = new Date();

  // Check if the date is today
  const isToday = date.toDateString() === now.toDateString();

  // Check if the date is yesterday
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = date.toDateString() === yesterday.toDateString();

  // Format older dates to "1 Jan 2025"
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  // Determine what to display
  let displayDate;
  if (isToday) {
    displayDate = 'Today';
  } else if (isYesterday) {
    displayDate = 'Yesterday';
  } else {
    displayDate = formattedDate;
  }

  return <p>{displayDate}</p>;
};

export default DateComponent;
