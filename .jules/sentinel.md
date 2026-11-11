## 2026-11-11 - Missing HTML Sanitization for Dynamic Content (XSS)
**Vulnerability:** dangerouslySetInnerHTML was being used without sanitization in press-news-detail.tsx, event-detail.tsx, and kvk.tsx for dynamic and translation content.
**Learning:** Unsanitized dynamic HTML or translation files can be exploited for Cross-Site Scripting (XSS), even if they currently contain mock data, because they will eventually be replaced with API content.
**Prevention:** Always use DOMPurify.sanitize() when rendering HTML strings with dangerouslySetInnerHTML, and ensure the dompurify package and its types are installed.
