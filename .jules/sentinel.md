## 2024-05-24 - React dangerouslySetInnerHTML XSS Vulnerability
 **Vulnerability:** Unsanitized dynamic HTML content (translations and CMS data) was being passed directly to `dangerouslySetInnerHTML`.
 **Learning:** Translation functions (like `t()`) and API data often contain raw HTML that is implicitly trusted by developers, leading to overlooked XSS vectors when rendered via React.
 **Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()` unless the content is strictly controlled and verified to be safe.
