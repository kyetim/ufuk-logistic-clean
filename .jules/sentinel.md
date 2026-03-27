# Sentinel Journal

## 2026-03-27 - Unsanitized HTML injection via DangerouslySetInnerHTML
**Vulnerability:** Found multiple instances of XSS vulnerabilities via `dangerouslySetInnerHTML` injecting raw dynamic content without sanitization in `event-detail.tsx`, `press-news-detail.tsx`, and `kvk.tsx`.
**Learning:** Using `dangerouslySetInnerHTML` directly with unsanitized content from external sources or translation files creates a severe Cross-Site Scripting (XSS) risk, bypassing React's built-in protections.
**Prevention:** Always use `DOMPurify.sanitize()` when using `dangerouslySetInnerHTML` to render dynamic HTML. Make DOMPurify the standard practice for rendering rich text across the entire codebase.
