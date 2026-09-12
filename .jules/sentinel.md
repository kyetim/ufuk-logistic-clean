## 2026-09-12 - Fix XSS Vulnerabilities in dangerouslySetInnerHTML
**Vulnerability:** XSS vulnerability found in multiple pages due to raw HTML being passed to dangerouslySetInnerHTML without sanitization.
**Learning:** Translation strings and dynamic CMS data often contain raw HTML, requiring sanitization before being rendered to prevent XSS attacks.
**Prevention:** Always sanitize dynamic HTML content and translation strings with DOMPurify.sanitize() before passing them to dangerouslySetInnerHTML.
