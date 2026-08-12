## 2024-05-24 - Fix XSS in dangerouslySetInnerHTML
**Vulnerability:** Unsanitized dynamic content and translation strings were directly injected into the DOM using `dangerouslySetInnerHTML`.
**Learning:** `dangerouslySetInnerHTML` is extremely dangerous if used without proper sanitization, especially when rendering CMS content or even translation strings.
**Prevention:** Always use `dompurify` to sanitize any HTML content before passing it to `dangerouslySetInnerHTML`.
