## 2024-05-18 - [XSS] Missing Sanitization in dangerouslySetInnerHTML
**Vulnerability:** Found multiple instances of `dangerouslySetInnerHTML` rendering unsanitized dynamic HTML content (CMS data like `news.content`, `event.content`, and localized translation strings).
**Learning:** Even internal localized strings and trusted CMS sources must be sanitized. Passing raw string variables to `dangerouslySetInnerHTML` directly exposes the application to Cross-Site Scripting (XSS) attacks if these sources are ever compromised or unintentionally contain malicious payloads.
**Prevention:** Always wrap dynamically generated or external HTML content with a sanitization library like `DOMPurify.sanitize(content)` before passing it to `dangerouslySetInnerHTML`.
