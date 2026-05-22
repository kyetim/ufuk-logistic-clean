## 2025-02-28 - Sanitize `dangerouslySetInnerHTML` for translation strings and CMS content
**Vulnerability:** Translation keys (`t(...)`) and dynamic content passed directly to `dangerouslySetInnerHTML` can cause XSS if content contains unsanitized HTML.
**Learning:** React requires explicit HTML sanitization since `dangerouslySetInnerHTML` bypasses standard escaping. In this repository, `t()` outputs and API data often contain raw HTML, making them vulnerable.
**Prevention:** Always use `DOMPurify.sanitize(...)` when utilizing `dangerouslySetInnerHTML`.
