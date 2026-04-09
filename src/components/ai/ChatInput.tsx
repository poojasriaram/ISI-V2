import React, { useState, useRef, useCallback } from 'react';
import { Send, Paperclip, X, Image as ImageIcon, Video, FileText } from 'lucide-react';
import { ChatAttachment } from '@/types/chatbot';

interface ChatInputProps {
    onSend: (message: string, attachments?: ChatAttachment[]) => void;
    disabled?: boolean;
}

export const ChatInput = React.forwardRef<{ processFiles: (files: FileList | File[]) => void }, ChatInputProps>(
    ({ onSend, disabled }, ref) => {
    const [input, setInput] = useState('');
    const [attachments, setAttachments] = useState<ChatAttachment[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const processFiles = useCallback((files: FileList | File[]) => {
        const newAttachments: ChatAttachment[] = [];
        Array.from(files).forEach(file => {
            const url = URL.createObjectURL(file);
            let type: 'image' | 'video' | 'file' = 'file';
            if (file.type.startsWith('image/')) type = 'image';
            else if (file.type.startsWith('video/')) type = 'video';

            newAttachments.push({
                url,
                type,
                name: file.name
            });
        });

        if (newAttachments.length > 0) {
            setAttachments(prev => [...prev, ...newAttachments]);
        }
    }, []);

    // Expose processFiles to parent
    React.useImperativeHandle(ref, () => ({
        processFiles
    }));

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if ((input.trim() || attachments.length > 0) && !disabled) {
            onSend(input.trim(), attachments);
            setInput('');
            setAttachments([]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    const handlePaste = useCallback((e: React.ClipboardEvent) => {
        // Take full control: Stop default browser logic
        e.preventDefault();
        e.stopPropagation();

        const items = e.clipboardData.items;
        const files = e.clipboardData.files;
        const text = e.clipboardData.getData('text/plain');
        
        let hasFiles = false;

        // 1. Handle Files (Explorer)
        if (files && files.length > 0) {
            processFiles(files);
            hasFiles = true;
        } 
        
        // 2. Handle Items (Screenshots/Browser)
        if (items && items.length > 0) {
            const foundFiles: File[] = [];
            for (let i = 0; i < items.length; i++) {
                if (items[i].kind === 'file') {
                    const file = items[i].getAsFile();
                    if (file) {
                        foundFiles.push(file);
                        hasFiles = true;
                    }
                }
            }
            if (foundFiles.length > 0) {
                processFiles(foundFiles);
            }
        }

        // 3. Handle Text (Insert at cursor position)
        if (text) {
            const start = inputRef.current?.selectionStart || 0;
            const end = inputRef.current?.selectionEnd || 0;
            const newVal = input.substring(0, start) + text + input.substring(end);
            setInput(newVal);
            
            // Re-focus and set cursor position after paste
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                    const newPos = start + text.length;
                    inputRef.current.setSelectionRange(newPos, newPos);
                }
            }, 0);
        }
    }, [processFiles, input]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            processFiles(e.target.files);
            // Reset input so the same file can be picked again
            e.target.value = '';
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const removeAttachment = (index: number) => {
        setAttachments(prev => {
            const newAttachments = [...prev];
            URL.revokeObjectURL(newAttachments[index].url);
            newAttachments.splice(index, 1);
            return newAttachments;
        });
    };

    const getAttachmentIcon = (type: string) => {
        switch (type) {
            case 'image': return <ImageIcon size={14} />;
            case 'video': return <Video size={14} />;
            default: return <FileText size={14} />;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative" onPaste={handlePaste}>
            <input 
                type="file" 
                multiple 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleFileChange}
                accept="image/*,video/*,.pdf,.doc,.docx,.txt"
            />
            {attachments.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3 px-2">
                    {attachments.map((file, idx) => (
                        <div key={idx} className="relative group animate-in fade-in zoom-in duration-200">
                            {file.type === 'image' ? (
                                <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-200 shadow-sm ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                                    <img src={file.url} alt="upload" className="w-full h-full object-cover" />
                                </div>
                            ) : (
                                <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center gap-1 p-1 shadow-sm ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                                    {getAttachmentIcon(file.type)}
                                    <span className="text-[8px] font-bold text-slate-500 uppercase truncate w-full text-center px-1">
                                        {file.name}
                                    </span>
                                </div>
                            )}
                            <button
                                type="button"
                                onClick={() => removeAttachment(idx)}
                                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg scale-0 group-hover:scale-100 transition-transform hover:bg-red-600"
                            >
                                <X size={12} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="relative flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full p-1 focus-within:bg-white focus-within:border-primary focus-within:ring-[4px] focus-within:ring-primary/5 transition-all duration-300">
                <button
                    type="button"
                    onClick={triggerFileInput}
                    className="ml-2 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-primary transition-all"
                >
                    <Paperclip size={18} />
                </button>
                <input
                    ref={inputRef}
                    id="aria-chat-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask Arya or paste files..."
                    disabled={disabled}
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none py-2.5 px-1 text-sm text-slate-700 placeholder:text-slate-400 outline-none"
                />
                <button
                    type="submit"
                    disabled={(!input.trim() && attachments.length === 0) || disabled}
                    className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 disabled:bg-slate-200 disabled:text-slate-400 transition-all flex items-center justify-center shrink-0 hover:scale-105 active:scale-95"
                >
                    <Send size={18} />
                </button>
            </div>
        </form>
    );
});
