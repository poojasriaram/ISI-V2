import React from 'react';
import { ChatMessage as ChatMessageType, ChatAction } from '@/types/chatbot';
import { cn } from '@/lib/utils';
import { Shield, User, ExternalLink, ArrowRight, FileText, Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatMessageProps {
    message: ChatMessageType;
    onActionClick: (action: ChatAction) => void;
}

export const ChatMessage = ({ message, onActionClick }: ChatMessageProps) => {
    const isBot = message.type === 'bot';

    return (
        <div className={cn(
            "flex w-full mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300",
            isBot ? "justify-start" : "justify-end"
        )}>
            <div className={cn(
                "flex max-w-[85%] gap-3",
                isBot ? "flex-row" : "flex-row-reverse"
            )}>
                {/* Clean Avatar */}
                <div className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-1 shadow-sm",
                    isBot ? "bg-primary text-white" : "bg-slate-200 text-slate-600"
                )}>
                    {isBot ? <Shield size={16} /> : <User size={16} />}
                </div>

                {/* Professional Message Bubble */}
                <div className="flex flex-col gap-2">
                    <div className={cn(
                        "p-4 rounded-2xl transition-all shadow-sm flex flex-col gap-3",
                        isBot
                            ? "bg-white border border-slate-100 text-slate-700 rounded-tl-none text-sm leading-relaxed"
                            : "bg-primary text-white rounded-tr-none text-sm leading-relaxed"
                    )}>
                        {/* Attachments rendering */}
                        {message.attachments && message.attachments.length > 0 && (
                            <div className="flex flex-col gap-2 mb-1">
                                {message.attachments.map((file, idx) => (
                                    <div key={idx} className="rounded-xl overflow-hidden bg-slate-50/10 border border-white/20">
                                        {file.type === 'image' ? (
                                            <img loading="lazy" src={file.url} alt={file.name} className="max-w-full h-auto object-cover rounded-lg" />
                                        ) : file.type === 'video' ? (
                                            <div className="relative group flex flex-col">
                                                <video src={file.url} className="w-full rounded-lg" />
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all pointer-events-none">
                                                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40">
                                                        <Play size={20} className="text-white fill-white ml-0.5" />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <a 
                                                href={file.url} 
                                                download={file.name}
                                                className={cn(
                                                    "flex items-center gap-3 p-3 rounded-lg transition-colors",
                                                    isBot ? "bg-slate-50 hover:bg-slate-100" : "bg-white/10 hover:bg-white/20"
                                                )}
                                            >
                                                <div className={cn(
                                                    "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                                                    isBot ? "bg-white border border-slate-200" : "bg-white/20"
                                                )}>
                                                    <FileText size={18} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs font-bold truncate">{file.name}</p>
                                                    <p className="text-[10px] opacity-70">Download File</p>
                                                </div>
                                                <Download size={14} className="shrink-0 opacity-70" />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {message.content && (
                            message.content.startsWith('[') ? (
                                // Remove internal protocol tags for user display
                                <p>{message.content.replace(/\[.*?\]\s*/, '')}</p>
                            ) : (
                                <p>{message.content}</p>
                            )
                        )}
                    </div>

                    {/* Actions / Quick Replies - Clean Style */}
                    {isBot && message.actions && message.actions.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-1">
                            {message.actions.map((action, i) => (
                                <Button
                                    key={i}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => onActionClick(action)}
                                    className="rounded-full bg-white border-slate-200 text-slate-600 hover:text-primary hover:border-primary hover:bg-primary/5 h-9 px-5 text-xs font-bold transition-all shadow-sm"
                                >
                                    {action.type === 'link' ? <ExternalLink size={14} className="mr-2" /> : null}
                                    {action.label}
                                    {action.type === 'contact' ? <ArrowRight size={14} className="ml-2" /> : null}
                                </Button>
                            ))}
                        </div>
                    )}

                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-1 px-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            </div>
        </div>
    );
};
