## 2026-09-09 - Missing HTML Sanitization
**Vulnerability:** React components dangerouslySetInnerHTML were accepting unsanitized external data, which introduces a High severity XSS vulnerability.
**Learning:** Using dangerouslySetInnerHTML directly with unsanitized translation or API data allows malicious scripts to execute.
**Prevention:** Always wrap external HTML content with a sanitization library like DOMPurify.sanitize() before passing it to dangerouslySetInnerHTML.
