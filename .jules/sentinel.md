
## 2025-02-28 - [High] Fix XSS Vulnerability in dangerouslySetInnerHTML
**Vulnerability:** Found multiple instances of unescaped user-controlled content passed to `dangerouslySetInnerHTML` in translation files (`t()`) and dynamic CMS data (news, events).
**Learning:** React's built-in XSS protection is bypassed when using `dangerouslySetInnerHTML`. The standard memory dictates that DOMPurify must be used before passing any HTML to this prop, as translation files often contain raw HTML.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()`. Make sure DOMPurify is available as a project dependency to enforce this pattern.
