## 2024-05-16 - Prevent XSS in dangerouslySetInnerHTML
**Vulnerability:** Translation files (`t()`) and dynamic CMS data were being passed directly to `dangerouslySetInnerHTML` without sanitization, creating a Cross-Site Scripting (XSS) vulnerability.
**Learning:** Even internal translation strings and assumed-safe CMS content can be vectors for XSS if they contain raw HTML that is rendered directly. React's built-in protections do not apply when using `dangerouslySetInnerHTML`.
**Prevention:** DOMPurify is the required standard library in this repository. Always wrap dynamic HTML content, including translation outputs and CMS data, with `DOMPurify.sanitize()` before passing it to `dangerouslySetInnerHTML`.
