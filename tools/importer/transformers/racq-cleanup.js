/* eslint-disable */
/* global WebImporter */

/**
 * Transformer: RACQ site cleanup.
 * Removes non-authorable content from RACQ news article pages.
 * Selectors from captured DOM of racq.com.au.
 */
const H = { before: 'beforeTransform', after: 'afterTransform' };

export default function transform(hookName, element, payload) {
  if (hookName === H.before) {
    // Remove iframes (tracking pixels, ad iframes) that could interfere with parsing
    WebImporter.DOMUtils.remove(element, [
      'iframe',
      'noscript',
      'script',
    ]);
  }

  if (hookName === H.after) {
    // Remove site chrome: header, footer
    WebImporter.DOMUtils.remove(element, [
      'header',
      'footer',
    ]);

    // Remove non-authorable article elements:
    // - Tag list (mapped to metadata)
    // - Social sharing buttons (auto-blocked)
    // - Sidebar (ad banners, "More articles" list - template-generated)
    // - Related topics section (dynamically populated)
    // - Disclaimer section (template/footer content)
    // - Breadcrumbs
    WebImporter.DOMUtils.remove(element, [
      '.component.tag-list',
      '.component.social-media-share',
      '.article-sidebar',
      '.component.search-results.article-listing',
      '.fluid-container--pale-blue',
      '.component.breadcrumb',
    ]);

    // Remove "Related topics" heading that sits outside the listing component
    const richTexts = element.querySelectorAll('.component.rich-text');
    richTexts.forEach((rt) => {
      const h3 = rt.querySelector('h3');
      if (h3 && (h3.textContent.trim() === 'Related topics' || h3.textContent.trim() === 'More articles')) {
        rt.remove();
      }
    });

    // Clean up remaining link elements and empty containers
    WebImporter.DOMUtils.remove(element, ['link']);
  }
}
