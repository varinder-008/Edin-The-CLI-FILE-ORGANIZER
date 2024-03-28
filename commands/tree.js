function treeFn(dirPath){
    let dest_path;
    if(dirPath == undefined){
        //1
        // console.log("Kindly enter a directory path"); (localised)
        // process.cwd(); // with this we made it global it means where ever you will run the command it would pick the command of the current working directory;
        treeHelper(process.cwd() ,"");
        return;
    } else {
        //1
        let doesExist = fs.existsSync(dirPath); //this checks if this dir path really exists we have used a existsSync function to do so that is present in fs.
        if(doesExist){
            //2
            treeHelper(dirPath ,"");  //"" used for indentation
        }
        else{
            //1
        console.log("Kindly enter a correct directory path");

        }
}
}
function treeHelper(dirPath , indent){ //indent for indentation
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let fileName = path.basename(dirPath);
        console.log(indent + "|--" + fileName); // to give space and then arrow and then the file name
    }
    else{
        let dirName = path.basename(dirPath);
        console.log(indent + "`--" + dirName);
        let childrens = fs.readdirSync(dirName);
        for(let i=0;i<childrens.length;i++){
            let childPath  = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent+"\t");
    }
}
}

module.exports = {
    treekey : treeFn
}