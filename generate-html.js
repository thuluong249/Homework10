//function to write to html file
const fs = require("fs");

//write html file

function writePage(html) {
  fs.writeFile("./dist/index.html", html, (err) => {
    if (err) {
      throw err;
    }
    console.log("The index page has been successfully generated");
  });
}

module.exports = writePage;
