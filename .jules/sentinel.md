## 2024-05-18 - Missing DOMPurify typings
**Vulnerability:** No vulnerability, but a process finding.
**Learning:** `dompurify` includes its own types in its package, so `@types/dompurify` is not needed. Type-checking passed without installing it.
**Prevention:** Remember that `dompurify` provides types out of the box when adding it to projects.
