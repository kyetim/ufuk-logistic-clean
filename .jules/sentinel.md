## 2026-10-24 - [XSS Vulnerability via dangerouslySetInnerHTML]
**Vulnerability:** Found unsanitized usage of `dangerouslySetInnerHTML` in `kvk.tsx`, `press-news-detail.tsx`, and `event-detail.tsx` which can lead to XSS attacks, especially for dynamic or CMS content.
**Learning:** In React, passing raw variables to `dangerouslySetInnerHTML` without sanitation exposes the application to XSS vulnerabilities.
**Prevention:** Always use a sanitation library like `DOMPurify` to sanitize HTML content before passing it to `dangerouslySetInnerHTML`.
