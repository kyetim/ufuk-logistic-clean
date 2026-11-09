## 2026-11-09 - [XSS Fix] DOMPurify for dynamically rendered React HTML
**Vulnerability:** Unsanitized usage of dangerouslySetInnerHTML with translation keys and CMS data led to XSS vulnerabilities.
**Learning:** Translation functions (t()) and dynamic data can contain HTML and must always be sanitized before being injected into the DOM, even in static-appearing pages.
**Prevention:** Always wrap variables passed to dangerouslySetInnerHTML in DOMPurify.sanitize(), and enforce this as a team convention.
