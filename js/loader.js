export function loadComponent(dir, query) {
  const BaseURL = "components/";
  const html_dir = BaseURL + dir + ".html";

  return new Promise((resolve, reject) => {
    $.ajax({
      url: html_dir,
      timeout: 5000,
      success: function (html) {
        $(query).html(html);
        const link = $(
          `<link rel="stylesheet" href="css/components/${dir}.css">`
        );
        $("head").append(link);

        if ($(query).children().length === 0) {
          reject(new Error(`Component ${dir} loaded but empty`));
        }
        resolve();
      },
      error: (jqXHR, status, error) => {
        reject(new Error(`Failed to load ${dir}: ${error}`));
      },
    });
  });
}
