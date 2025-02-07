export function loadComponent(dir, query) {
  const BaseURL = "components/";
  const html_dir = BaseURL + dir + ".html";
  $(query).load(html_dir);
  $("head").append(`<link rel="stylesheet" href="css/components/${dir}.css">`);
}
