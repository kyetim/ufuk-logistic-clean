## 2026-10-03 - XSS Risk in dangerouslySetInnerHTML with CMS/Translations
**Vulnerability:** Unsanitized dynamic content from `t()` and local variables (e.g. `news.content`) was passed directly to `dangerouslySetInnerHTML`.
**Learning:** Even internal CMS content or translation files can be vectors for XSS if they contain raw HTML that is rendered unescaped.
**Prevention:** Always wrap dynamic HTML strings with `DOMPurify.sanitize()` before passing them to `dangerouslySetInnerHTML`.
