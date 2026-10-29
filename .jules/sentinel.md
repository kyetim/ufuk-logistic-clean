## 2026-10-29 - XSS Vulnerability in dangerouslySetInnerHTML

**Vulnerability:** Found multiple instances of `dangerouslySetInnerHTML` rendering unsanitized HTML content, specifically in `src/pages/press-news-detail.tsx`, `src/pages/event-detail.tsx`, and `src/pages/kvk.tsx`. This makes the application vulnerable to Cross-Site Scripting (XSS) attacks.

**Learning:** The application uses `dangerouslySetInnerHTML` to render rich text from both hardcoded data structures and translation files. While the current data might seem safe, this pattern is inherently insecure and violates the principle of "Trust nothing, verify everything". Any future dynamic content loaded via these mechanisms could easily introduce XSS.

**Prevention:** Always use a robust HTML sanitization library, such as DOMPurify, to sanitize any content before passing it to `dangerouslySetInnerHTML`. The pattern `dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}` should be the standard across the codebase.
