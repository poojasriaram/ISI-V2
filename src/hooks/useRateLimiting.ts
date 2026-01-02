import { useState, useCallback, useRef } from 'react';

interface RateLimitConfig {
    maxAttempts: number;
    windowMs: number;
    onLimitExceeded?: () => void;
}

interface RateLimitState {
    isAllowed: boolean;
    remainingAttempts: number;
    resetTime: number | null;
}

/**
 * Custom hook for client-side rate limiting
 * Prevents excessive form submissions and API calls
 */
export const useRateLimiting = (
    key: string,
    config: RateLimitConfig = { maxAttempts: 5, windowMs: 60000 }
): [() => boolean, () => void, RateLimitState] => {
    const attemptsRef = useRef<number[]>([]);
    const [state, setState] = useState<RateLimitState>({
        isAllowed: true,
        remainingAttempts: config.maxAttempts,
        resetTime: null,
    });

    const checkLimit = useCallback((): boolean => {
        const now = Date.now();

        // Filter out attempts outside the time window
        attemptsRef.current = attemptsRef.current.filter(
            time => now - time < config.windowMs
        );

        const remaining = config.maxAttempts - attemptsRef.current.length;

        if (remaining <= 0) {
            const oldestAttempt = attemptsRef.current[0];
            const resetTime = oldestAttempt + config.windowMs;

            setState({
                isAllowed: false,
                remainingAttempts: 0,
                resetTime,
            });

            if (config.onLimitExceeded) {
                config.onLimitExceeded();
            }

            return false;
        }

        // Record this attempt
        attemptsRef.current.push(now);

        setState({
            isAllowed: true,
            remainingAttempts: remaining - 1,
            resetTime: null,
        });

        return true;
    }, [config]);

    const reset = useCallback((): void => {
        attemptsRef.current = [];
        setState({
            isAllowed: true,
            remainingAttempts: config.maxAttempts,
            resetTime: null,
        });
    }, [config.maxAttempts]);

    return [checkLimit, reset, state];
};

/**
 * Debounce hook for rate limiting user input
 */
export const useDebounce = <T,>(value: T, delay: number = 500): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useState(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    });

    return debouncedValue;
};

/**
 * Throttle hook for rate limiting function calls
 */
export const useThrottle = <T extends (...args: any[]) => any>(
    callback: T,
    delay: number = 1000
): ((...args: Parameters<T>) => void) => {
    const lastRun = useRef<number>(Date.now());

    return useCallback(
        (...args: Parameters<T>) => {
            const now = Date.now();

            if (now - lastRun.current >= delay) {
                callback(...args);
                lastRun.current = now;
            }
        },
        [callback, delay]
    );
};

/**
 * Form submission rate limiter hook
 */
export const useFormRateLimit = (
    formId: string,
    maxSubmissions: number = 3,
    windowMs: number = 60000
) => {
    const [checkLimit, reset, state] = useRateLimiting(
        `form-${formId}`,
        {
            maxAttempts: maxSubmissions,
            windowMs,
            onLimitExceeded: () => {
                console.warn(`Form submission limit exceeded for ${formId}`);
            },
        }
    );

    const handleSubmit = useCallback(
        (submitFn: () => void | Promise<void>) => {
            if (checkLimit()) {
                return submitFn();
            } else {
                const resetIn = state.resetTime
                    ? Math.ceil((state.resetTime - Date.now()) / 1000)
                    : 0;
                throw new Error(
                    `Too many submissions. Please try again in ${resetIn} seconds.`
                );
            }
        },
        [checkLimit, state.resetTime]
    );

    return {
        handleSubmit,
        reset,
        isAllowed: state.isAllowed,
        remainingAttempts: state.remainingAttempts,
        resetTime: state.resetTime,
    };
};
