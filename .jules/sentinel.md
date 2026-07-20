## 2024-05-24 - [XSS in dangerouslySetInnerHTML]
**Vulnerability:** XSS vulnerability found in dynamically rendered content and translation strings passed to dangerouslySetInnerHTML.
**Learning:** React's dangerouslySetInnerHTML expects safe HTML. When using dynamic CMS data or translation strings (which might contain HTML), it must be sanitized.
**Prevention:** Always use DOMPurify.sanitize() before passing any dynamic content to dangerouslySetInnerHTML.
