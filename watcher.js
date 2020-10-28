const chokidar = require("chokidar");
const childProcess = require("child_process");
const nodePath = require("path");

let watcher = chokidar.watch("./src", { persistent: true });

watcher.on("change", (path) => {
  if (nodePath.extname(path) === ".sass") {
    const fileName = nodePath.basename(path)
    console.log("Attempting update of " + fileName + "...")
    childProcess.exec("cp " + path + " ./lib/styles/" + fileName, (error) => {
      console.log(error ? error : (fileName + " updated: " + new Date().toLocaleString()))
    });
  }
  if (nodePath.extname(path) === ".tsx") {
    const fileName = nodePath.basename(path)
    console.log("Attempting update of " + fileName + "...")
    childProcess.exec(
      "npx tsc", (error) => {
        if (error){
          if (error.code === 1){
            console.log("Error. Compilation unsucessful.")
          }
        } else {
          console.log(fileName + " updated: " + new Date().toLocaleString())
        }
    });
  }
});
