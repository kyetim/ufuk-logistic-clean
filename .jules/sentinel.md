## 2026-10-28 - Fix XSS in dangerouslySetInnerHTML
**Vulnerability:** User-provided or dynamic content passed to dangerouslySetInnerHTML was not sanitized, allowing Cross-Site Scripting (XSS).
**Learning:** React's dangerouslySetInnerHTML is exactly what it sounds like - dangerous. Dynamic content should always be sanitized before being rendered to the DOM.
**Prevention:** Always wrap variables passed to dangerouslySetInnerHTML with DOMPurify.sanitize().
