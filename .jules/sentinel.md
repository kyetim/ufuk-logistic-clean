
## 2026-09-14 - Fix XSS vulnerabilities via dangerouslySetInnerHTML
**Vulnerability:** Use of dangerouslySetInnerHTML with unsanitized dynamic data (translations, news, events).
**Learning:** Translation strings and CMS data can contain arbitrary HTML which must not be trusted implicitly.
**Prevention:** Always use DOMPurify.sanitize() when passing data to dangerouslySetInnerHTML.
