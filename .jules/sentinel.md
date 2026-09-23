## 2025-03-09 - [XSS] Missing HTML Sanitization in dangerouslySetInnerHTML
**Vulnerability:** Dynamic HTML content and translated strings containing HTML were passed directly to `dangerouslySetInnerHTML` without sanitization.
**Learning:** Translation files and dynamic data (like CMS news/events) might contain raw HTML that can lead to XSS if not explicitly wrapped with `DOMPurify.sanitize()`. React's default protection is bypassed by `dangerouslySetInnerHTML`.
**Prevention:** Always require `dompurify` in the project and enforce its usage whenever `dangerouslySetInnerHTML` is needed.
