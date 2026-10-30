## 2024-05-24 - XSS Vulnerability via dangerouslySetInnerHTML
**Vulnerability:** Raw HTML content from translations and hardcoded news/event objects was passed directly to dangerouslySetInnerHTML without sanitization, creating an XSS risk.
**Learning:** Even internal data sources or translation strings can contain malicious scripts if not properly sanitized, especially if those sources are later connected to a CMS or user input.
**Prevention:** Always use a sanitization library like DOMPurify before rendering dynamic HTML via dangerouslySetInnerHTML, regardless of the perceived safety of the data source.
