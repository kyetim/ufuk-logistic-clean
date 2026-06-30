## 2023-10-24 - Cross-Site Scripting (XSS) via dangerouslySetInnerHTML
 **Vulnerability:** Unsanitized HTML strings were passed directly to `dangerouslySetInnerHTML` in `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, and `src/pages/event-detail.tsx`.
 **Learning:** Translation files and dynamic data can contain raw HTML, creating an XSS risk if rendered directly without sanitization.
 **Prevention:** Always wrap HTML strings with `DOMPurify.sanitize()` before passing them to `dangerouslySetInnerHTML`.
