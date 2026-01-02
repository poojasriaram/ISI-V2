# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

1. **Do NOT** open a public issue
2. Email security concerns to: [security contact email]
3. Include detailed information about the vulnerability
4. Allow reasonable time for the issue to be addressed before public disclosure

## Security Measures Implemented

### 1. Security Headers

This application implements comprehensive security headers:

- **Content-Security-Policy (CSP)**: Prevents XSS attacks by controlling resource loading
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **Referrer-Policy**: Controls referrer information leakage
- **Permissions-Policy**: Restricts browser features
- **Strict-Transport-Security (HSTS)**: Forces HTTPS connections

### 2. CORS Protection

- Access-Control-Allow-Origin is restricted to specific trusted domains
- No wildcard (*) CORS configuration in production

### 3. Source Code Protection

- Source maps are disabled in production builds
- .git directory access is blocked
- Environment files are protected

### 4. Client-Side Security

- Input sanitization for all user inputs
- XSS prevention utilities
- URL validation to prevent javascript: and data: URI attacks
- Secure storage wrapper for localStorage

### 5. Rate Limiting

- Client-side rate limiting for form submissions
- Debouncing and throttling for API calls
- Protection against brute force attempts

### 6. Error Handling

- Secure error handling that doesn't expose sensitive information
- User-friendly error messages
- Detailed logging for debugging (development only)

## Best Practices for Contributors

### Input Validation

Always validate and sanitize user input:

```typescript
import { sanitizeInput, isValidEmail } from '@/utils/security';

const userInput = sanitizeInput(rawInput);
if (isValidEmail(email)) {
  // Process email
}
```

### Rate Limiting

Use rate limiting hooks for forms:

```typescript
import { useFormRateLimit } from '@/hooks/useRateLimiting';

const { handleSubmit, isAllowed } = useFormRateLimit('contact-form');

const onSubmit = () => {
  handleSubmit(async () => {
    // Submit form
  });
};
```

### Error Handling

Use the centralized error handler:

```typescript
import { errorHandler, handleAPIError } from '@/utils/errorHandler';

try {
  // API call
} catch (error) {
  const userMessage = handleAPIError(error);
  // Show user message
}
```

### URL Validation

Always validate URLs before using them:

```typescript
import { isValidURL } from '@/utils/security';

if (isValidURL(userProvidedUrl)) {
  window.location.href = userProvidedUrl;
}
```

## Security Checklist for Pull Requests

- [ ] All user inputs are validated and sanitized
- [ ] No sensitive information in error messages
- [ ] No hardcoded credentials or API keys
- [ ] HTTPS is used for all external resources
- [ ] Rate limiting is implemented for user actions
- [ ] Error handling doesn't expose stack traces
- [ ] No eval() or dangerous functions used
- [ ] Dependencies are up to date
- [ ] No console.log statements with sensitive data

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| Older   | :x:                |

## Security Updates

We regularly update dependencies and security measures. Please ensure you're using the latest version of the application.

## Third-Party Dependencies

We use automated tools to monitor dependencies for known vulnerabilities:

- Regular npm audit checks
- Dependabot alerts enabled
- Manual security reviews for critical dependencies

## Incident Response

In case of a security incident:

1. Immediate assessment of the impact
2. Containment and mitigation
3. Investigation and root cause analysis
4. Communication with affected parties
5. Implementation of preventive measures
6. Post-incident review

## Contact

For security-related questions or concerns, please contact:
- Security Team: [security email]
- General Inquiries: [general email]

---

**Last Updated**: 2026-01-02
