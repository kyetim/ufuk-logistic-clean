## 2026-10-19 - Prevent XSS in dynamically injected HTML

**Vulnerability:** Raw HTML strings (like translations and CMS content) were being passed directly to `dangerouslySetInnerHTML` without sanitization.
**Learning:** React's `dangerouslySetInnerHTML` is inherently dangerous if the input is not strictly controlled or sanitized. Even translations and static CMS content can be vectors if compromised.
**Prevention:** Always use `DOMPurify.sanitize()` to wrap any dynamic HTML content before passing it to `dangerouslySetInnerHTML`.
