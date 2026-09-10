## 2026-09-10 - [XSS Prevention with DOMPurify]
**Vulnerability:** [Unsanitized inputs passed to dangerouslySetInnerHTML]
**Learning:** [Translation files and dynamic CMS data can contain malicious raw HTML]
**Prevention:** [Always wrap dynamic inputs passed to dangerouslySetInnerHTML with DOMPurify.sanitize()]
