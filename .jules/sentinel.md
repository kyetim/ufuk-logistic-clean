## 2025-02-15 - [XSS in dangerouslySetInnerHTML]
**Vulnerability:** Found unsanitized usage of `dangerouslySetInnerHTML` with dynamic content (`news.content`, `event.content`) and translation keys (`t()`) in `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, and `src/pages/event-detail.tsx`.
**Learning:** React's `dangerouslySetInnerHTML` directly renders provided HTML, which can execute malicious scripts if the input contains unescaped HTML/JS. Translation files (`t()`) and dynamic CMS data often contain raw HTML, making them a source of XSS.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()` to strip out malicious scripts while preserving safe HTML.
