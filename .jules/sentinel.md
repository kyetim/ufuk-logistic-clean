## 2024-05-24 - Missing HTML Sanitization in CMS and Translation Data
**Vulnerability:** XSS vulnerability via unsanitized `dangerouslySetInnerHTML` rendering dynamic data (news, events, translations).
**Learning:** Always sanitize external/dynamic HTML content before rendering it, even from assumed-safe sources like CMS or translations.
**Prevention:** Use `DOMPurify.sanitize()` uniformly across all `dangerouslySetInnerHTML` usages.
