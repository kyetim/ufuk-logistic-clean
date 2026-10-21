## 2026-10-21 - Missing DOMPurify sanitization in dangerouslySetInnerHTML
**Vulnerability:** Found `dangerouslySetInnerHTML` being used directly with dynamic translation content (`t()`) and news/event text content without any sanitization in `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, and `src/pages/event-detail.tsx`. This is a High/Critical XSS vulnerability.
**Learning:** Translation strings and dynamic text often contain raw HTML and can be vectors for XSS if not properly sanitized before injection into the DOM.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize(...)`.
