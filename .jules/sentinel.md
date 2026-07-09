## 2026-07-09 - DOMPurify usage
**Vulnerability:** XSS in dynamically set HTML contents
**Learning:** Translations and internal data might contain unfiltered HTML. Setting them directly to dangerouslySetInnerHTML introduces XSS.
**Prevention:** Wrap all dangerouslySetInnerHTML usage with DOMPurify.sanitize().
