## 2026-09-11 - Prevent XSS in Translation Strings and CMS Content
**Vulnerability:** Found multiple instances of `dangerouslySetInnerHTML` using unsanitized dynamic content (e.g. `news.content`, `event.content`) and translation strings (`t('...')`), which could lead to XSS attacks.
**Learning:** Even internal content like translations or structured CMS data (which might eventually come from an API) can contain raw HTML. If an attacker injects malicious scripts into these sources, it bypasses React's default sanitization.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()`, regardless of whether the source is a translation key or CMS data.
