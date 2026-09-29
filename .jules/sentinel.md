## 2026-09-29 - Unsanitized HTML rendering via dangerouslySetInnerHTML
**Vulnerability:** Found multiple instances where dynamic content (translations, mock CMS data) was passed directly to dangerouslySetInnerHTML without sanitization, creating High Priority XSS risks.
**Learning:** In a React application, using dangerouslySetInnerHTML inherently bypasses React's XSS protections. Relying on translations or CMS data to be safe is a flawed assumption.
**Prevention:** Always sanitize any dynamic content passed to dangerouslySetInnerHTML using a trusted library like DOMPurify before rendering it.
