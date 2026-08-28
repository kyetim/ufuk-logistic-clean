## 2025-03-09 - [HIGH] Fix XSS Vulnerability in dangerouslySetInnerHTML
**Vulnerability:** Use of `dangerouslySetInnerHTML` without input sanitization across multiple files (`src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, `src/pages/event-detail.tsx`).
**Learning:** Translation files (`t()`) and dynamic CMS data containing raw HTML must always be sanitized before injection to prevent XSS.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()`.
