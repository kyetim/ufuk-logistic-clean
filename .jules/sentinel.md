## 2024-05-24 - [Fix XSS via dangerouslySetInnerHTML]
**Vulnerability:** XSS vulnerability found in `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, and `src/pages/event-detail.tsx` where translations or dynamic CMS data were rendered using `dangerouslySetInnerHTML` without proper sanitization.
**Learning:** `dangerouslySetInnerHTML` directly executes embedded scripts if the inner HTML is maliciously crafted. In this app, translation strings and dynamic CMS data are rendered this way, posing a serious XSS risk.
**Prevention:** All use of `dangerouslySetInnerHTML` for dynamically constructed content (including translations and CMS data) must be wrapped with `DOMPurify.sanitize()`.
