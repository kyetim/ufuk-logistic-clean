## 2026-08-01 - XSS Vulnerability in dynamically set HTML
**Vulnerability:** XSS vulnerability through `dangerouslySetInnerHTML` usage without sanitization in `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx` and `src/pages/event-detail.tsx` with translation text and raw content.
**Learning:** React `dangerouslySetInnerHTML` is extremely dangerous when used with dynamic inputs like translations or news/event contents unless sanitized properly to avoid XSS.
**Prevention:** Always use `DOMPurify.sanitize()` (wrapped around dynamic values) when injecting HTML directly via `dangerouslySetInnerHTML` in React components.
