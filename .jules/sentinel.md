## 2026-09-20 - Critical XSS Vulnerability in dynamically injected HTML
**Vulnerability:** Found unsanitized HTML being injected using `dangerouslySetInnerHTML` with dynamic CMS and translation data.
**Learning:** Using `dangerouslySetInnerHTML` directly with translation strings or CMS content without sanitization can easily lead to Cross-Site Scripting (XSS).
**Prevention:** Always wrap any dynamic HTML content (translations, API responses, etc.) with `DOMPurify.sanitize()` before passing it to `dangerouslySetInnerHTML`.
