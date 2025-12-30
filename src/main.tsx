import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Root element not found");

  createRoot(rootElement).render(<App />);
  console.log("App mounted successfully");
} catch (error) {
  console.error("FATAL APP ERROR:", error);
  document.body.innerHTML = `
        <div style="padding: 2rem; color: #ef4444; font-family: system-ui, sans-serif; max-width: 800px; margin: 0 auto;">
            <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem;">Application Failed to Start</h1>
            <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;">
                <p style="font-weight: semibold; margin-bottom: 0.5rem;">Error Details:</p>
                <pre style="font-size: 0.875rem; white-space: pre-wrap;">${error instanceof Error ? error.message : String(error)}</pre>
                ${error instanceof Error && error.stack ? `<pre style="font-size: 0.75rem; margin-top: 1rem; color: #991b1b;">${error.stack}</pre>` : ''}
            </div>
            <p style="margin-top: 1rem; color: #666;">Please check the browser console for more details.</p>
        </div>
    `;
}
