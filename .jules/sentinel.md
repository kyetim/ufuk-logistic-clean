## 2025-01-22 - [XSS Vulnerability in dynamically injected HTML]
**Vulnerability:** Unsanitized dynamic HTML via dangerouslySetInnerHTML in press news, events, and KVK pages.
**Learning:** Translation files (t()) and dynamic CMS data often contain raw HTML, and they were rendered directly to the DOM without sanitization, posing an XSS risk.
**Prevention:** Always wrap dynamic HTML content with DOMPurify.sanitize() before passing it to dangerouslySetInnerHTML.
