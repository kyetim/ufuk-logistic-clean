## 2024-05-15 - [XSS in dangerouslySetInnerHTML]
**Vulnerability:** Raw HTML strings (like translations or CMS data) are passed directly into dangerouslySetInnerHTML without sanitization.
**Learning:** React's dangerouslySetInnerHTML bypasses normal XSS protections. Any dynamic content rendered this way must be sanitized first.
**Prevention:** Always wrap variables passed to dangerouslySetInnerHTML with DOMPurify.sanitize(), and include a security comment explaining why it's necessary.
