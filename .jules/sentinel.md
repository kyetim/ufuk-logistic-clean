## 2026-10-05 - XSS via dangerouslySetInnerHTML
**Vulnerability:** Found unsanitized content rendered with `dangerouslySetInnerHTML` in multiple pages (`kvk.tsx`, `press-news-detail.tsx`, `event-detail.tsx`).
**Learning:** Translation strings and dynamic CMS data were injected directly into the DOM, exposing the application to Cross-Site Scripting (XSS).
**Prevention:** Always wrap dynamic HTML content with `DOMPurify.sanitize()` before passing it to `dangerouslySetInnerHTML`.
