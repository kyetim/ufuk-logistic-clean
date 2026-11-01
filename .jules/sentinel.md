## 2026-11-01 - [CRITICAL] Fix XSS vulnerability in dangerouslySetInnerHTML
**Vulnerability:** Unsanitized raw HTML content (news/events content and translations) was passed directly to dangerouslySetInnerHTML in React components.
**Learning:** Translation strings and dynamic CMS-like content can contain raw HTML, and relying on them being safe without sanitation leads to XSS vulnerabilities.
**Prevention:** Always use a standard library like DOMPurify to sanitize HTML strings before rendering them with dangerouslySetInnerHTML.
