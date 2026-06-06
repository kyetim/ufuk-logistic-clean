## 2024-05-18 - XSS Risks in dangerouslySetInnerHTML
**Vulnerability:** Found multiple instances of `dangerouslySetInnerHTML` being used with raw translation strings (`t(...)`) and data object properties (`news.content`, `event.content`) directly in `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, and `src/pages/event-detail.tsx`.
**Learning:** Even though the data might be locally sourced or from translations, using `dangerouslySetInnerHTML` without sanitization can easily introduce XSS vulnerabilities if the data source ever changes to include user input or gets compromised.
**Prevention:** Always wrap any HTML data passed into `dangerouslySetInnerHTML` with a reliable sanitizer like `DOMPurify.sanitize()`.
