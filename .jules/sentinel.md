## 2024-05-24 - XSS via dangerouslySetInnerHTML
**Vulnerability:** XSS vulnerability through unsanitized dynamic content via dangerouslySetInnerHTML.
**Learning:** React dangerouslySetInnerHTML bypasses React's escaping mechanisms and can lead to XSS attacks if user input or translation/CMS content contains unescaped HTML.
**Prevention:** Always use DOMPurify.sanitize() to sanitize the data before passing it to dangerouslySetInnerHTML.
