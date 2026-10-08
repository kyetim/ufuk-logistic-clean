## 2026-10-08 - Missing XSS Protection on dangerouslySetInnerHTML
**Vulnerability:** Raw HTML from translations and mock data was passed directly to dangerouslySetInnerHTML in KVK, Press News, and Event Detail pages, creating a High priority XSS vulnerability.
**Learning:** React's dangerouslySetInnerHTML is exactly what it sounds like - dangerous. Data from any external source (even translation files or CMS data) must be sanitized before being rendered as HTML.
**Prevention:** Always wrap variables passed to dangerouslySetInnerHTML with DOMPurify.sanitize(), ensuring DOMPurify is a standard dependency in the project.
