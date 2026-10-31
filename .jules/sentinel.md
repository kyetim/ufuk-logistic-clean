## 2025-02-27 - Cross-Site Scripting (XSS) via dangerouslySetInnerHTML
**Vulnerability:** Several components (`src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, `src/pages/event-detail.tsx`) use `dangerouslySetInnerHTML` directly without sanitization, passing dynamic HTML content and translation strings. This makes the application vulnerable to XSS if the data source is ever compromised or manipulated.
**Learning:** `dangerouslySetInnerHTML` accepts an object with `__html` and rendering it directly executes any embedded scripts.
**Prevention:** Always sanitize data passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()` before rendering.
