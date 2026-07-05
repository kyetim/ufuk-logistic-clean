## 2024-05-24 - [XSS] Missing Sanitization on dangerouslySetInnerHTML
**Vulnerability:** Unsanitized dynamic data (translations, mock CMS content) was directly passed to `dangerouslySetInnerHTML` in multiple components (KVK, Press News, Events).
**Learning:** Using `dangerouslySetInnerHTML` in React requires explicit HTML sanitization. Translation files and CMS data are not implicitly safe and can contain raw, malicious HTML tags leading to Cross-Site Scripting (XSS).
**Prevention:** Always use a standard library like `dompurify` to sanitize the data before injecting it into the DOM via `dangerouslySetInnerHTML`, e.g., `dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}`.
