## 2026-10-13 - Sanitize dynamic HTML with DOMPurify
**Vulnerability:** XSS vulnerability found in dangerouslySetInnerHTML passing raw string data.
**Learning:** Translation strings and dynamic CMS content often contain HTML structure but can be vectors for XSS if unsanitized.
**Prevention:** Always use DOMPurify.sanitize() before passing any dynamic content to dangerouslySetInnerHTML.
