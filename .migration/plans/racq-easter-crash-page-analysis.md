# Page Analysis Plan: RACQ Easter Crash Analysis Article

## Objective
Analyze the RACQ news article page to identify content structure, sections, authoring decisions, and block variants for potential AEM Edge Delivery Services migration.

## Target URL
- **Page**: `https://www.racq.com.au/news/advocacy/easter-crash-analysis-shows-trauma-is-often-closer-to-home`
- **Type**: News/advocacy article page

## Approach
Use the **Page Analysis** skill to perform a comprehensive structural analysis of the page, including:

1. **Scrape the webpage** — Fetch full page content, metadata, and assets
2. **Identify page structure** — Determine section boundaries and content sequences
3. **Analyze content blocks** — Map content elements to EDS block types and variants
4. **Capture visual reference** — Screenshot the page for comparison during migration
5. **Produce analysis artifacts** — Generate structured JSON output with findings

## Checklist

- [ ] Scrape the RACQ article page and extract content, metadata, and assets
- [ ] Identify section boundaries and content sequences within the page
- [ ] Analyze each section for block types (hero, text, images, cards, etc.)
- [ ] Determine authoring approach for each content sequence (default content vs blocks)
- [ ] Capture screenshot(s) for visual reference
- [ ] Document findings in structured analysis output (JSON + summary)

## Expected Deliverables
- Page structure analysis (sections, blocks, content types)
- Block variant identification with DOM selectors
- Visual reference screenshot
- Metadata extraction (title, description, OG tags, etc.)

## Execution
This plan requires **Execute mode** to proceed. Once approved, the `excat:excat-page-analysis` skill will be invoked to carry out the full analysis workflow.
