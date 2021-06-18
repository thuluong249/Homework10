// // Generate the HTML texts for the HTML output file.

const Employee = require("../lib/Employee");

// // Returns an array holding strings of HTML texts.
function generateTemplate(teamProfileArr) {
  // console.log(teamProfileArr);
  //   // Array to hold HTML text strings.
  //   const holdHtmlArr = [];
  const htmlHeaderAndTitleBar = `
  <!DOCTYPE html>
  <html lang = "en">
  <head>
    <meta charset = "UTF-8">
    <meta name = "viewport" content = "width = device-width, initial scale = 1.0">
    <meta http-equiv = "X-UA-Compatible" content = "ie = edge">
    <title>test</title>
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
    crossorigin="anonymous"
  />
    <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel = "preconnect" href = "https://fonts.gstatic.com">
    <link href = "https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Spartan&display=swap" rel = "stylesheet">
    <link rel = "stylesheet" href = "style.css">
  </head>

  <body>
  <div class="title-bar">
  <h1>Frisbee Team</h1>
</div>

<div class="container">
<div class="row">
${teamProfileArr.map((employee) => {
  return employee.getHtml();
})}
</div>
</div>
  </body>
  </html>
  `;
  return htmlHeaderAndTitleBar;
}

module.exports = generateTemplate;
