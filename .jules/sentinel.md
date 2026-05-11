## 2024-05-24 - Unsanitized dynamically rendered HTML Content
**Vulnerability:** XSS vulnerability in pages containing dynamically rendered HTML through `dangerouslySetInnerHTML`, specifically using translations (`t()`) and dynamic content.
**Learning:** `dangerouslySetInnerHTML` should never be used without first passing the input string through an HTML sanitizer. Translations and dynamic CMS strings can be manipulated to run unwanted scripts on user clients.
**Prevention:** Always wrap dynamically sourced or translated inputs with `DOMPurify.sanitize()` before passing them as values to `dangerouslySetInnerHTML` in React applications.
