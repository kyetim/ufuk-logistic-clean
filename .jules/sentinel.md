## 2025-02-18 - XSS via dangerouslySetInnerHTML
**Vulnerability:** XSS vulnerability through usage of `dangerouslySetInnerHTML` with raw HTML content in `/src/pages/kvk.tsx`, `/src/pages/press-news-detail.tsx` and `/src/pages/event-detail.tsx`.
**Learning:** Content from external sources (e.g. `news.content`, `event.content`, translations) was not sanitized before being rendered with `dangerouslySetInnerHTML`, potentially exposing users to Cross-Site Scripting (XSS) attacks.
**Prevention:** Always wrap dynamically generated or externally-sourced HTML strings with `DOMPurify.sanitize()` before using them in `dangerouslySetInnerHTML`.
