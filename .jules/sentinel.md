## 2025-02-14 - Fix XSS vulnerabilities with dangerouslySetInnerHTML
**Vulnerability:** Unsanitized dynamic content and translation strings being rendered directly to the DOM using `dangerouslySetInnerHTML`.
**Learning:** Found multiple instances where dynamic content (`t('kvk.contact.address.content')`, `news.content`, `event.content`) were rendered natively with React's `dangerouslySetInnerHTML` without proper sanitation, exposing the application to XSS attacks.
**Prevention:** All translations containing HTML or dynamic strings such as CMS-fed data must be sanitized using `DOMPurify.sanitize()` prior to passing them into the `dangerouslySetInnerHTML` API.
