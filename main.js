#!/usr/bin/env node // shebang syntax to make the enviorment set (found from stackoverflow by wriritng shebang syntax for node)
let inputArr = process.argv.slice(2); //command line input and slice used as it stores node and file name on first two index
let fs = require("fs");
let path = require("path");
let helpObj = require('./commands/help');
let treeObj = require('./commands/organize');
let organizeObj = require('./commands/tree');
//tree "path"
// organize "path"
// help

let command = inputArr[0];

let types = {
    media: ["mp4", "mkv"],
    archives: ["zip", "7z" , "rar", "tar", "gz" ,"ar" , "iso" ,"xz"],
    documents: ["docx", "doc", "pdf", "xlsx","xls", "odt" , "ods","txt"],
    app: ["exe", "dmg", "pkg", "deb"]
}
switch(command){
    case "tree":
        treeObj.treekey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizekey(inputArr[1]);
        break;
    case "help":
        helpObj.helpkey();
        break;
    default:
        console.log("wrong command entered.... input right command");

}







