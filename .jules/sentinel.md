
## 2024-03-20 - Unsanitized dangerouslySetInnerHTML in React CMS/Translations
**Vulnerability:** Found unsanitized HTML data passed directly to `dangerouslySetInnerHTML` in multiple components (`kvk.tsx`, `press-news-detail.tsx`, `event-detail.tsx`).
**Learning:** Dynamic content from translations or CMS systems often contains HTML, which is implicitly trusted in frontend rendering without sanitization. Developers frequently assume source content is safe, creating a severe Cross-Site Scripting (XSS) risk.
**Prevention:** Always wrap dynamic data passed to `dangerouslySetInnerHTML` with a reliable sanitizer like `DOMPurify.sanitize()`, regardless of the data source. Never trust dynamic rich text unconditionally.
