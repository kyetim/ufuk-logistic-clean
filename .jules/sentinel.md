## 2026-10-17 - [XSS in React dangerouslySetInnerHTML]
**Vulnerability:** Found unsanitized HTML being passed to `dangerouslySetInnerHTML` from translation files and dynamic CMS data, leading to potential Cross-Site Scripting (XSS).
**Learning:** Translation strings and CMS data can contain raw HTML and might be modified by external or untrusted sources. Passing them directly to `dangerouslySetInnerHTML` without sanitization creates an XSS vulnerability pattern specific to this codebase's handling of dynamic content.
**Prevention:** Always wrap dynamic HTML content, including translation strings (`t()`) and API data, with `DOMPurify.sanitize()` before rendering it via `dangerouslySetInnerHTML`.
