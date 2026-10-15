## 2024-05-24 - Unsanitized HTML rendering via dangerouslySetInnerHTML
**Vulnerability:** Found multiple usages of dangerouslySetInnerHTML receiving raw data from translations or placeholder API responses (news/event contents).
**Learning:** Using raw HTML from translation files or CMS APIs without sanitization creates a severe Cross-Site Scripting (XSS) risk, especially in React apps where dangerouslySetInnerHTML bypasses normal string escaping.
**Prevention:** Always wrap dynamic HTML content with DOMPurify.sanitize() before passing it to dangerouslySetInnerHTML, and include @types/dompurify in TypeScript projects to ensure type safety.
