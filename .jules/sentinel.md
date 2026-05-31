## 2024-05-18 - Missing HTML Sanitization in dangerouslySetInnerHTML
**Vulnerability:** Use of `dangerouslySetInnerHTML` with raw translation strings (`t()`) and dynamic CMS data without sanitization.
**Learning:** Translation files and dynamic data often contain raw HTML, but must always be wrapped with `DOMPurify.sanitize()` before being rendered to prevent Cross-Site Scripting (XSS).
**Prevention:** Always use `DOMPurify.sanitize(content)` when passing variable content to `dangerouslySetInnerHTML`.