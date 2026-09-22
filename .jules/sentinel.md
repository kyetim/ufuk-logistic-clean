## $(date +%Y-%m-%d) - XSS Vulnerability in dynamically injected HTML
**Vulnerability:** Found unsanitized usages of `dangerouslySetInnerHTML` in `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, and `src/pages/event-detail.tsx`.
**Learning:** React's `dangerouslySetInnerHTML` can lead to XSS attacks if the content is not sanitized properly, especially when dealing with dynamic content from CMS or translation files.
**Prevention:** Always sanitize dynamic HTML content using `DOMPurify` before passing it to `dangerouslySetInnerHTML`.
