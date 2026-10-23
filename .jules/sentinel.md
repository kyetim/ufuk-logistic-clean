## 2026-10-23 - XSS Vulnerability in dangerouslySetInnerHTML
**Vulnerability:** Unsanitized raw HTML content (from translations and CMS data) was passed directly to React's `dangerouslySetInnerHTML`.
**Learning:** `dangerouslySetInnerHTML` does not sanitize input natively. Even internal sources like translation files or mock CMS data can become vectors if they load external dynamic content.
**Prevention:** Always wrap `dangerouslySetInnerHTML` inputs with `DOMPurify.sanitize()` to ensure any HTML is safe before rendering.
