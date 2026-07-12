import React, { useRef, useEffect } from 'react';
import { useChatBot } from '@/hooks/useChatBot';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { X, Minus, MessageSquare, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const ChatBot = () => {
    const { isOpen, toggleChat, messages, isTyping, hasUnread, handleSendMessage, handleAction } = useChatBot();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = React.useState(false);
    const chatInputRef = useRef<{ processFiles: (files: FileList | File[]) => void }>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                const input = document.getElementById('aria-chat-input');
                input?.focus();
            }, 600);
        }
    }, [isOpen]);

    // Global Paste Listener (Redirects to chat if it's the active window)
    useEffect(() => {
        const handleGlobalPaste = (e: ClipboardEvent) => {
            if (!isOpen) return;
            
            // Don't intercept if user is typing in another input (rare in this app)
            const target = e.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                if (target.id !== 'aria-chat-input') return;
            }

            const files = e.clipboardData?.files;
            if (files && files.length > 0) {
                chatInputRef.current?.processFiles(files);
                e.preventDefault();
            }
        };

        window.addEventListener('paste', handleGlobalPaste);
        return () => window.removeEventListener('paste', handleGlobalPaste);
    }, [isOpen]);

    const handleDragOver = (e: React.DragEvent) => {
        if (!isOpen) return;
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        if (!isOpen) return;
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            chatInputRef.current?.processFiles(e.dataTransfer.files);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-none">

            {/* Clean Professional Chat Window */}
            <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={cn(
                    "bg-white border border-slate-200 shadow-2xl rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom-right mb-4 flex flex-col pointer-events-auto relative",
                    isOpen ? "w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] opacity-100 scale-100 translate-y-0" : "w-0 h-0 opacity-0 scale-95 translate-y-20 p-0"
                )}
            >
                {/* Drag Overlay */}
                {isDragging && (
                    <div className="absolute inset-0 z-[110] bg-primary/10 backdrop-blur-[2px] border-4 border-dashed border-primary m-4 rounded-[2rem] flex flex-col items-center justify-center gap-4 animate-in fade-in duration-300">
                        <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-xl animate-bounce">
                            <Sparkles size={40} />
                        </div>
                        <p className="text-primary font-bold text-xl">Drop files for Arya</p>
                    </div>
                )}

                {/* Header - Matching Site Primary Blue */}
                <div className="px-6 py-5 bg-primary relative overflow-hidden flex items-center justify-between">
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-primary"></span>
                            </span>
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-base leading-tight">Arya</h3>
                            <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest mt-0.5">
                                Senior Security Consultant
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 relative z-10">
                        <Button
                            aria-label="Minimize Chat"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full hover:bg-white/10 text-white transition-colors"
                            onClick={toggleChat}
                        >
                            <Minus size={18} />
                        </Button>
                    </div>
                </div>

                {/* Messages Feed */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 bg-gradient-to-b from-slate-50/50 to-white/50">
                    {messages.map((msg) => (
                        <ChatMessage
                            key={msg.id}
                            message={msg}
                            onActionClick={handleAction}
                        />
                    ))}

                    {isTyping && (
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 p-3 bg-white rounded-2xl border border-slate-100 w-fit animate-pulse">
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                            Arya is typing...
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-slate-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
                    <ChatInput ref={chatInputRef} onSend={handleSendMessage} disabled={isTyping} />
                    <p className="mt-2 text-[10px] text-slate-400 font-bold text-center uppercase tracking-widest">
                        Official ISI Security Support
                    </p>
                </div>
            </div>

            {/* Site-Aligned Toggle Button */}
            <button
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
                onClick={toggleChat}
                className={cn(
                    "h-16 w-16 rounded-[1.5rem] shadow-2xl flex items-center justify-center transition-all duration-300 active:scale-95 group relative overflow-hidden pointer-events-auto",
                    isOpen
                        ? "bg-slate-900 text-white"
                        : "bg-primary text-white shadow-primary/20"
                )}
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}

                {!isOpen && hasUnread && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full z-10"></span>
                )}
            </button>

        </div>
    );
};
