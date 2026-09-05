
## 2026-09-05 - XSS Vulnerability via dangerouslySetInnerHTML
**Vulnerability:** Unsanitized dynamic content (news, events, and translation strings containing HTML) was being passed directly to `dangerouslySetInnerHTML`, leading to potential Cross-Site Scripting (XSS).
**Learning:** Even internal CMS data or translation files can be vectors for XSS if they contain raw HTML and are rendered without sanitization. `dangerouslySetInnerHTML` should never be used without an accompanying sanitization step like DOMPurify.
**Prevention:** Always use `DOMPurify.sanitize()` when setting raw HTML content dynamically in React components, especially for translation strings and dynamic rich-text content.
