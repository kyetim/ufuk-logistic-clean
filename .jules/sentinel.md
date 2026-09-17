## 2025-02-18 - High Severity XSS via dangerouslySetInnerHTML in translations/dynamic data
**Vulnerability:** XSS vulnerability where untrusted input from dynamic translations `t()` or raw HTML arrays was passed directly into `dangerouslySetInnerHTML` across `kvk.tsx`, `event-detail.tsx`, and `press-news-detail.tsx`.
**Learning:** Using React's `dangerouslySetInnerHTML` without rigorous sanitization on i18n content or dynamic CMS data leaves applications highly vulnerable to XSS.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()`. Ensure `@types/dompurify` is installed for TypeScript type checks.
