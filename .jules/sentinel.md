## 2024-05-18 - High Severity XSS via dangerouslySetInnerHTML
**Vulnerability:** Found multiple instances of Cross-Site Scripting (XSS) risks where dynamic CMS content and translation strings were passed directly to React's `dangerouslySetInnerHTML` without sanitization.
**Learning:** Developers frequently trust CMS content or translation files as "safe" internal data sources, not realizing they can be vectors for XSS if compromised or containing user-controlled inputs.
**Prevention:** Always wrap dynamic data passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()`, regardless of the data source (CMS, i18n, etc.). Enforce this via code reviews and linting rules.
