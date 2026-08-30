## 2026-08-30 - Prevent XSS in dangerouslySetInnerHTML
**Vulnerability:** XSS vulnerability through dangerouslySetInnerHTML using unsanitized dynamic content (t() and CMS data).
**Learning:** Translations and mock CMS data containing raw HTML must be sanitized before being injected into the DOM to prevent script execution.
**Prevention:** Always use DOMPurify to sanitize HTML content before passing it to dangerouslySetInnerHTML.
