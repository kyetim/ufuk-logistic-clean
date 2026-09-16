## 2026-09-16 - Prevent XSS with DOMPurify
**Vulnerability:** Unsanitized HTML (from translations and CMS-like data) was being passed directly to dangerouslySetInnerHTML in multiple components.
**Learning:** Always assume translation strings or dynamic content may contain malicious HTML, especially when used with dangerouslySetInnerHTML.
**Prevention:** Enforce the use of DOMPurify.sanitize() for any dynamic HTML injected into the DOM.
