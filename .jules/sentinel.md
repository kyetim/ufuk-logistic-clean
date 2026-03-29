## 2024-05-24 - Unsanitized User Input Passed to dangerouslySetInnerHTML
**Vulnerability:** XSS vulnerability found in `src/pages/press-news-detail.tsx`, `src/pages/event-detail.tsx`, and `src/pages/kvk.tsx` where dynamic content was passed to `dangerouslySetInnerHTML` without sanitization.
**Learning:** Raw HTML strings (such as `news.content`, `event.content` and localized strings) were passed directly to React's `dangerouslySetInnerHTML`.
**Prevention:** Always use `DOMPurify.sanitize()` (required standard library for this repo) when rendering dynamic HTML strings with `dangerouslySetInnerHTML` to mitigate XSS vulnerabilities.
