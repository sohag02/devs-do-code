import React from 'react';
import { ChatArea } from './ChatArea';
import { LeftMenu } from './LeftMenu';
import { RightMenu } from './RightMenu';

interface ChatInterfaceProps {
  onSendMessage: (message: string) => void;
}

export function ChatInterface({ onSendMessage }: ChatInterfaceProps) {
  const [leftMenuOpen, setLeftMenuOpen] = React.useState(false);
  const [rightMenuOpen, setRightMenuOpen] = React.useState(false);

  return (
    <div className="flex h-screen">
      {/* Left Menu */}
      <LeftMenu isOpen={leftMenuOpen} onToggle={() => setLeftMenuOpen(!leftMenuOpen)} />

      {/* Main Chat Area */}
      <ChatArea />

      {/* Right Menu */}
      <RightMenu isOpen={rightMenuOpen} onToggle={() => setRightMenuOpen(!rightMenuOpen)} />
    </div>
  );
}
