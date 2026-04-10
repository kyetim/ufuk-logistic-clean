## 2023-10-27 - [XSS] Unsanitized dangerouslySetInnerHTML Usage
 **Vulnerability:** Unsanitized HTML passed directly to `dangerouslySetInnerHTML` in KVK, Press News Detail, and Event Detail pages.
 **Learning:** Translation strings and dynamic CMS data were injected directly into the DOM without sanitization, creating a Cross-Site Scripting (XSS) vulnerability.
 **Prevention:** Always wrap data passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()` to ensure only safe HTML is rendered.