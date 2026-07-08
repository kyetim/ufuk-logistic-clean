
## 2024-03-24 - Prevent XSS in dynamically set HTML
**Vulnerability:** Unsanitized user content and translations passed to dangerouslySetInnerHTML in pages/kvk.tsx, pages/press-news-detail.tsx, and pages/event-detail.tsx.
**Learning:** dynamic CMS data and translations that are mapped to raw HTML using dangerouslySetInnerHTML can contain script tags if not sanitized, leading to Cross-Site Scripting (XSS).
**Prevention:** Always wrap dynamically generated HTML strings in DOMPurify.sanitize() before assigning them to dangerouslySetInnerHTML.
