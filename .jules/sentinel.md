## 2024-05-18 - Unsanitized HTML rendering via dangerouslySetInnerHTML
 **Vulnerability:** The application was directly rendering user-controlled or dynamically translated strings containing raw HTML via React's `dangerouslySetInnerHTML` in multiple components (KVKPage, PressNewsDetailPage, EventDetailPage).
 **Learning:** Using `dangerouslySetInnerHTML` directly with unsanitized data (e.g. from translation files, CMS systems, or mocked APIs) allows for potential Cross-Site Scripting (XSS) attacks. React does not sanitize strings passed to this property.
 **Prevention:** Always use a standard library like `dompurify` (`DOMPurify.sanitize(content)`) to sanitize any HTML string before passing it into `dangerouslySetInnerHTML`.
