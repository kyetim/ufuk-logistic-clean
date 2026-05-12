## 2024-05-18 - Sanitize dynamic content and translations with DOMPurify
**Vulnerability:** XSS vulnerability through unsanitized dynamic content from translation strings (e.g., `t()`) and mock CMS data being injected directly into the DOM using `dangerouslySetInnerHTML`.
**Learning:** React provides XSS protection for standard text injection but intentionally bypasses it for `dangerouslySetInnerHTML`. Translation content and mock CMS data were mistakenly assumed to be safe.
**Prevention:** Always use `DOMPurify.sanitize()` before passing content to `dangerouslySetInnerHTML`.
