## 2024-06-12 - Prevent XSS in Translation and Dynamic HTML content
**Vulnerability:** Unsanitized inputs (translation strings and dynamic event/news content) were being passed directly to `dangerouslySetInnerHTML`.
**Learning:** Even content that seems safe (like translation keys or mock CMS data) can become an XSS vector if it contains raw HTML that is rendered without sanitization. In React applications, any use of `dangerouslySetInnerHTML` must be scrutinized and protected.
**Prevention:** Always wrap dynamic content passed to `dangerouslySetInnerHTML` with a proven sanitization library like DOMPurify (`DOMPurify.sanitize(content)`).
