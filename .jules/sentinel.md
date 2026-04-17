## 2025-04-17 - React dangerouslySetInnerHTML XSS Vulnerability
**Vulnerability:** Raw HTML from translations (`t()`) and dynamic CMS data were passed directly to `dangerouslySetInnerHTML` in multiple React components without any sanitization.
**Learning:** Even internal translation strings and static/CMS data should be treated as untrusted input. If an attacker compromises the translation files or CMS, they could execute arbitrary JavaScript via Cross-Site Scripting (XSS).
**Prevention:** Always use `DOMPurify.sanitize()` before passing any string to `dangerouslySetInnerHTML`, regardless of the source. `DOMPurify` is the standard library for sanitizing dynamic HTML content in this repository.
