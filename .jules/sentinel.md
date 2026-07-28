## 2026-07-28 - Prevent XSS in dynamically injected HTML
**Vulnerability:** Unsanitized dynamic HTML content (translations and CMS data) was passed directly to `dangerouslySetInnerHTML`, exposing the app to XSS attacks.
**Learning:** In React, `dangerouslySetInnerHTML` bypasses built-in XSS protections. Any data from external sources or translation files must be explicitly sanitized before injection.
**Prevention:** Always use a standard library like DOMPurify to wrap variables passed to `dangerouslySetInnerHTML` (e.g., `DOMPurify.sanitize(content)`).
