## 2025-02-14 - Fix Cross-Site Scripting (XSS) in HTML rendering
**Vulnerability:** Raw HTML strings (from translations and dynamic content) are being passed directly to `dangerouslySetInnerHTML` without sanitization in `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, and `src/pages/event-detail.tsx`.
**Learning:** Using `dangerouslySetInnerHTML` directly with unsanitized data, even if it seems trusted (like translations or CMS data), poses a significant XSS risk if the data source is ever compromised or user input is injected.
**Prevention:** Always use a sanitization library like `DOMPurify` (`DOMPurify.sanitize(content)`) before rendering HTML content via `dangerouslySetInnerHTML`.
