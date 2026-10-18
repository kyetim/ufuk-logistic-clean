## 2026-10-18 - [XSS] Missing DOMPurify Sanitization
**Vulnerability:** Found `dangerouslySetInnerHTML` directly using translation values (`t()`) and dynamic CMS data (`news.content`, `event.content`) without sanitization in `kvk.tsx`, `press-news-detail.tsx`, and `event-detail.tsx`.
**Learning:** Translation strings and dynamic data fetched from APIs often contain HTML, and rendering them raw opens the door to Stored or Reflected XSS.
**Prevention:** Always install and use DOMPurify to wrap the data with `DOMPurify.sanitize()` before passing it to `dangerouslySetInnerHTML`.
