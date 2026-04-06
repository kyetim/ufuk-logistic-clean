## 2024-03-20 - XSS Vulnerability via dangerouslySetInnerHTML
**Vulnerability:** Multiple components (KVKPage, PressNewsDetailPage, EventDetailPage) were directly rendering unsanitized HTML from translation files and mock API data using `dangerouslySetInnerHTML`.
**Learning:** Even internal translation strings and mocked API data can become XSS vectors if they are modified by an attacker or a compromised CMS. React's built-in XSS protection is bypassed when using `dangerouslySetInnerHTML`.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()`, regardless of the data source.
