## 2025-02-27 - [XSS Vulnerability in React dangerouslySetInnerHTML]
**Vulnerability:** Found unsanitized usage of `dangerouslySetInnerHTML` in multiple React components rendering CMS content and translation strings, allowing for potential Cross-Site Scripting (XSS).
**Learning:** Using `dangerouslySetInnerHTML` directly with unsanitized dynamic data (like translations `t()` or CMS content) bypasses React's built-in XSS protections.
**Prevention:** Always wrap dynamic HTML content with a sanitizer like `DOMPurify.sanitize()` before passing it to `dangerouslySetInnerHTML`.
