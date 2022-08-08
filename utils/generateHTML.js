const fs = require("fs");

// write html file using promise
const writeToFile = html => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/team-profile.html", html, err => {
     // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
     if (err) {
      reject(err);
      console.log(err);
      // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
      return;
     }
    // if everything went well, resolve the Promise and send the successful data to the `.then()` method
    resolve({
      ok: true,
      message: 'File created!'
    });
    console.log("success!");
  }); 
  });
};

module.exports = writeToFile;