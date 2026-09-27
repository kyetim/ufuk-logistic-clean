## 2026-09-27 - [XSS via dangerouslySetInnerHTML]
**Vulnerability:** Found multiple instances of unsanitized HTML being injected using React's dangerouslySetInnerHTML in pages like kvk.tsx, press-news-detail.tsx, and event-detail.tsx. This poses a Cross-Site Scripting (XSS) vulnerability if content (like translation strings or CMS data) is manipulated.
**Learning:** React's dangerouslySetInnerHTML bypasses normal XSS protections. Even translation strings can contain HTML and must be sanitized.
**Prevention:** Always use DOMPurify.sanitize() to wrap content being passed to dangerouslySetInnerHTML. Installed dompurify and @types/dompurify to sanitize the content before injection.
