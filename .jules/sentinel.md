## 2024-06-19 - XSS Vulnerability in dynamically loaded React content
**Vulnerability:** Multiple React components (kvk, press-news-detail, event-detail) were passing unsanitized dynamic content directly to `dangerouslySetInnerHTML`.
**Learning:** Even internal CMS/translation data can be vectors for XSS if they contain raw HTML.
**Prevention:** Always wrap dynamically loaded HTML strings with `DOMPurify.sanitize()` before passing them to `dangerouslySetInnerHTML`.
