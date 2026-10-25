## 2026-10-25 - Prevent XSS in dangerouslySetInnerHTML
**Vulnerability:** Raw, unsanitized HTML (from translation files or local variables) passed to dangerouslySetInnerHTML, risking XSS attacks if dynamic content is ever exposed to user manipulation.
**Learning:** Translation strings or internal static contents might seem safe, but defense-in-depth dictates stripping out any potential script injection vectors.
**Prevention:** Always use DOMPurify to sanitize content before injecting into dangerouslySetInnerHTML.
