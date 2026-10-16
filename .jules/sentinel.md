## 2026-10-16 - XSS Vulnerability in dynamically injected HTML
**Vulnerability:** Found `dangerouslySetInnerHTML` being used directly with dynamic translation strings and CMS content without sanitization in `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, and `src/pages/event-detail.tsx`.
**Learning:** Always sanitize HTML input before injecting it into the DOM, even if it comes from translations or a mock CMS, to prevent Cross-Site Scripting (XSS).
**Prevention:** Use DOMPurify as the standard library to wrap all `dangerouslySetInnerHTML` usages in the project.
