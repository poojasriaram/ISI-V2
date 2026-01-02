import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { errorHandler } from "./utils/errorHandler";

// Setup global error handling
errorHandler.setupGlobalErrorHandling();

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Root element not found");

  createRoot(rootElement).render(<App />);

  // Only log in development
  if (import.meta.env.DEV) {
    console.log("App mounted successfully");
  }
} catch (error) {
  errorHandler.logError(error instanceof Error ? error : String(error), 'critical');

  // In production, show generic error message
  const errorMessage = import.meta.env.DEV && error instanceof Error
    ? error.message
    : 'Application failed to start. Please refresh the page.';

  const errorStack = import.meta.env.DEV && error instanceof Error && error.stack
    ? `<pre style="font-size: 0.75rem; margin-top: 1rem; color: #991b1b;">${error.stack}</pre>`
    : '';

  document.body.innerHTML = `
        <div style="padding: 2rem; color: #ef4444; font-family: system-ui, sans-serif; max-width: 800px; margin: 0 auto;">
            <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem;">Application Failed to Start</h1>
            <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;">
                <p style="font-weight: semibold; margin-bottom: 0.5rem;">Error Details:</p>
                <pre style="font-size: 0.875rem; white-space: pre-wrap;">${errorMessage}</pre>
                ${errorStack}
            </div>
            <p style="margin-top: 1rem; color: #666;">Please refresh the page or contact support if the problem persists.</p>
        </div>
    `;
}
