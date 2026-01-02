/**
 * Centralized Error Handler
 * Provides secure error handling that doesn't expose sensitive information
 */

export interface ErrorLog {
    timestamp: string;
    message: string;
    stack?: string;
    userAgent?: string;
    url?: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
}

class ErrorHandler {
    private errors: ErrorLog[] = [];
    private maxErrors = 100; // Keep last 100 errors in memory

    /**
     * Log an error securely without exposing sensitive details to users
     */
    logError(error: Error | string, severity: ErrorLog['severity'] = 'medium'): void {
        const errorLog: ErrorLog = {
            timestamp: new Date().toISOString(),
            message: typeof error === 'string' ? error : error.message,
            stack: typeof error === 'object' ? error.stack : undefined,
            userAgent: navigator.userAgent,
            url: window.location.href,
            severity,
        };

        this.errors.push(errorLog);

        // Keep only the last maxErrors entries
        if (this.errors.length > this.maxErrors) {
            this.errors.shift();
        }

        // Log to console in development only
        if (import.meta.env.DEV) {
            console.error('[ErrorHandler]', errorLog);
        }

        // In production, you would send this to a logging service
        // Example: this.sendToLoggingService(errorLog);
    }

    /**
     * Get user-friendly error message without exposing technical details
     */
    getUserMessage(error: Error | string): string {
        // Never expose stack traces or technical details to users
        const genericMessages: Record<string, string> = {
            NetworkError: 'Unable to connect to the server. Please check your internet connection.',
            ValidationError: 'Please check your input and try again.',
            AuthenticationError: 'Authentication failed. Please log in again.',
            AuthorizationError: 'You do not have permission to perform this action.',
            NotFoundError: 'The requested resource was not found.',
            ServerError: 'An unexpected error occurred. Please try again later.',
        };

        const errorMessage = typeof error === 'string' ? error : error.message;

        // Check if error message matches known patterns
        for (const [key, message] of Object.entries(genericMessages)) {
            if (errorMessage.includes(key)) {
                return message;
            }
        }

        // Default generic message
        return 'An error occurred. Please try again.';
    }

    /**
     * Get all logged errors (for debugging in development)
     */
    getErrors(): ErrorLog[] {
        return [...this.errors];
    }

    /**
     * Clear all logged errors
     */
    clearErrors(): void {
        this.errors = [];
    }

    /**
     * Get errors by severity
     */
    getErrorsBySeverity(severity: ErrorLog['severity']): ErrorLog[] {
        return this.errors.filter(error => error.severity === severity);
    }

    /**
     * Handle global errors
     */
    setupGlobalErrorHandling(): void {
        // Handle uncaught errors
        window.addEventListener('error', (event) => {
            this.logError(event.error || event.message, 'high');
            event.preventDefault(); // Prevent default browser error handling
        });

        // Handle unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            this.logError(
                event.reason instanceof Error ? event.reason : String(event.reason),
                'high'
            );
            event.preventDefault();
        });
    }
}

// Export singleton instance
export const errorHandler = new ErrorHandler();

/**
 * React Error Boundary compatible error handler
 */
export const handleReactError = (error: Error, errorInfo: { componentStack: string }): void => {
    errorHandler.logError(error, 'high');

    // Log component stack in development
    if (import.meta.env.DEV) {
        console.error('Component Stack:', errorInfo.componentStack);
    }
};

/**
 * API Error Handler
 */
export const handleAPIError = (error: any): string => {
    // Log the actual error
    errorHandler.logError(error, 'medium');

    // Return user-friendly message
    if (error.response) {
        // Server responded with error status
        switch (error.response.status) {
            case 400:
                return 'Invalid request. Please check your input.';
            case 401:
                return 'Authentication required. Please log in.';
            case 403:
                return 'You do not have permission to access this resource.';
            case 404:
                return 'The requested resource was not found.';
            case 429:
                return 'Too many requests. Please try again later.';
            case 500:
            case 502:
            case 503:
                return 'Server error. Please try again later.';
            default:
                return 'An unexpected error occurred.';
        }
    } else if (error.request) {
        // Request was made but no response received
        return 'Unable to reach the server. Please check your connection.';
    } else {
        // Something else happened
        return 'An error occurred while processing your request.';
    }
};

/**
 * Form Validation Error Handler
 */
export const handleValidationError = (field: string, error: string): void => {
    errorHandler.logError(`Validation error in ${field}: ${error}`, 'low');
};

/**
 * Security Event Logger
 */
export const logSecurityEvent = (event: string, details?: any): void => {
    const securityLog: ErrorLog = {
        timestamp: new Date().toISOString(),
        message: `Security Event: ${event}`,
        severity: 'high',
        userAgent: navigator.userAgent,
        url: window.location.href,
    };

    errorHandler.logError(JSON.stringify({ ...securityLog, details }), 'high');

    // In production, send to security monitoring service
    if (!import.meta.env.DEV) {
        // Example: sendToSecurityMonitoring(securityLog);
    }
};
