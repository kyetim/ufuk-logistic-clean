## 2026-10-09 - Prevent XSS in dangerouslySetInnerHTML
**Vulnerability:** Raw HTML strings passed to dangerouslySetInnerHTML without sanitization in React components (kvk.tsx, press-news-detail.tsx, event-detail.tsx).
**Learning:** The t() function and dynamic data can return raw HTML, requiring sanitization before rendering to prevent XSS.
**Prevention:** Always wrap HTML content with DOMPurify.sanitize() before assigning to dangerouslySetInnerHTML.
