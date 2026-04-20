## 2024-04-20 - [Sentinel] Fix XSS vulnerability in dangerouslySetInnerHTML
**Vulnerability:** XSS vulnerability in dynamically rendered translation files and CMS data via dangerouslySetInnerHTML without sanitization.
**Learning:** translation keys (`t()`) and dynamic CMS fields often contain raw HTML, which makes them susceptible to XSS if left unsanitized.
**Prevention:** Always wrap dynamically rendered translation files and CMS data with `DOMPurify.sanitize()` before passing them to `dangerouslySetInnerHTML` to prevent XSS.
