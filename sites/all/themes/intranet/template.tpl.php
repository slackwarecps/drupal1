<?php
/**
 * Returns HTML for a set of links.
 *
 * @param $links
 *   An associative array of links to be themed. The key for each link
 *   is used as its CSS class. Each link should be itself an array, with the
 *   following elements:
 *   - title: The link text.
 *   - href: The link URL. If omitted, the 'title' is shown as a plain text
 *     item in the links list.
 *   - html: (optional) Whether or not 'title' is HTML. If set, the title
 *     will not be passed through check_plain().
 *   - attributes: (optional) Attributes for the anchor, or for the <span> tag
 *     used in its place if no 'href' is supplied.
 *   If the 'href' element is supplied, the entire link array is passed to l()
 *   as its $options parameter.
 * @param $attributes
 *   An associative array of attributes for the UL containing the list of links.
 *
 * @return
 *   A string containing an unordered list of links.
 */
function phptemplate_links($links, $attributes = array('class' => 'links')) {
echo "OPA!!!";die;
  global $language;
  $output = '';

  if (count($links) > 0) {
    $output = '<ul'. drupal_attributes($attributes) .'>';

    $num_links = count($links);
    $i = 1;

    foreach ($links as $key => $link) {
      $class = $key;

      // Add first, last and active classes to the list of links to help out themers.
      if ($i == 1) {
        $class .= ' first';
      }
      if ($i == $num_links) {
        $class .= ' last';
      }
      if (isset($link['href']) && ($link['href'] == $_GET['q'] || ($link['href'] == '<front>' && drupal_is_front_page()))
          && (empty($link['language']) || $link['language']->language == $language->language)) {
        $class .= ' active';
      }
      $output .= '<li'. drupal_attributes(array('class' => $class)) .'>';

      if (isset($link['href'])) {
        // Pass in $link as $options, they share the same keys.
        $output .= l($link['title'], $link['href'], $link);
      }
      else if (!empty($link['title'])) {
        // Some links are actually not links, but we wrap these in <span> for adding title and class attributes
        if (empty($link['html'])) {
          $link['title'] = check_plain($link['title']);
        }
        $span_attributes = '';
        if (isset($link['attributes'])) {
          $span_attributes = drupal_attributes($link['attributes']);
        }
        $output .= '<span'. $span_attributes .'>'. $link['title'] .'</span>';
      }

      $i++;
      $output .= "</li>\n";
    }

    $output .= '</ul>';
  }

  return $output;
}
