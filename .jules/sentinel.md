## 2026-09-24 - Cross-Site Scripting (XSS) in dynamically rendered HTML content
**Vulnerability:** Found `dangerouslySetInnerHTML` being used with raw translation strings and mock CMS content in `kvk.tsx`, `press-news-detail.tsx`, and `event-detail.tsx` without prior sanitization.
**Learning:** Even internal translation files (`t()`) and dynamic mock data can contain raw HTML that is prone to XSS if passed directly to `dangerouslySetInnerHTML`.
**Prevention:** Always use a standard sanitization library like `DOMPurify` to sanitize any dynamic HTML content before rendering it.
