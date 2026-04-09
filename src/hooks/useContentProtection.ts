import { useEffect } from 'react';

/**
 * Custom hook to protect page content from copying, right-click, and other actions
 * Prevents:
 * - Right-click context menu
 * - Text selection
 * - Copy/Cut/Paste
 * - Print screen
 * - Drag and drop
 * - Developer tools shortcuts (F12, Ctrl+Shift+I, etc.)
 */
export const useContentProtection = () => {
    useEffect(() => {
        // Content protection disabled
    }, []);
};
