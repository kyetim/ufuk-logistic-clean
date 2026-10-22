
## 2026-10-22 - Prevent XSS in dangerouslySetInnerHTML
**Vulnerability:** Unsanitized translation content and dynamic CMS data were passed directly to dangerouslySetInnerHTML in pages like kvk.tsx, press-news-detail.tsx, and event-detail.tsx, exposing the app to XSS.
**Learning:** In a React application, any content containing raw HTML must be sanitized before rendering, even if it comes from translation files or internal CMS data, as these sources can be manipulated.
**Prevention:** Always wrap variables passed to dangerouslySetInnerHTML with DOMPurify.sanitize().
