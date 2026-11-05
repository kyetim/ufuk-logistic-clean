## 2024-05-24 - Unsanitized HTML rendering causing XSS risk
**Vulnerability:** Found raw, unsanitized strings (`news.content`, `event.content`, translations) being passed directly to `dangerouslySetInnerHTML`.
**Learning:** Translation strings and dynamic CMS content in React apps are often assumed safe, but if they contain HTML and are rendered via `dangerouslySetInnerHTML` without sanitization, they pose a significant XSS risk if the content source is ever compromised or allows user input.
**Prevention:** Always wrap any dynamic HTML content passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()` by default, even if the source is currently considered trusted.
