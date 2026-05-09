## 2026-05-09 - [DOMPurify Types Deprecation]
**Vulnerability:** XSS risk from unsanitized raw HTML inputs passed to dangerouslySetInnerHTML.
**Learning:** This repo natively supports DOMPurify type definitions in DOMPurify >=3.4.2 without needing @types/dompurify, avoiding CI/CD breakage.
**Prevention:** Avoid installing deprecated @types/dompurify packages when upgrading DOMPurify.
