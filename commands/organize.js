function organizeFn(dirPath){
    console.log("Organize command implemented for " , dirPath);
    //1 input: directory path check if rightly entered or not;
    //2 create new directory named organised_files
    //3 check all files to which category the files you have belong to
    //4 copy/cut files to the new created directory;
    let dest_path;
    if(dirPath == undefined){
        //1
        // console.log("Kindly enter a directory path"); (local version)
        dest_path = process.cwd(); //making it global;
        return;
    } else {
        //1
        let doesExist = fs.existsSync(dirPath); //this checks if this dir path really exists we have used a existsSync function to do so that is present in fs.
        if(doesExist){
            //2
            dest_path = path.join(dirPath, "organized_files"); //created a new directory path
            if(fs.existsSync(dest_path)== false)
            fs.mkdirSync(dest_path); //creates a new directory at above path
        }
        else{
            //1
        console.log("Kindly enter a correct directory path");

        }
    }

    organizeHelper(dirPath,dest_path);
    //made helper function for task 3 & 4
    }

function organizeHelper(src , dest){
    //3 and read all the type of files in src path
    let childNames = fs.readdirSync(src);
    console.log(childNames);
    for(let i=0;i<childNames.length;i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();     //to check if file or folder
        if(isFile){
            console.log(childNames[i]);
            //copy cut file to new directory (4)
            let category = getCategory(childAddress);
            console.log(childNames[i],"belongs to " + category);
            sendFiles(childAddress, dest , category);
        }
}
}
function getCategory(name){
    let ext = path.extname(name); //gives you the extension of file passed;
    ext = ext.slice(1); // to remove the dot in front of the extension
    for(let type in types){
        let catArray =  types[type];
        for(let j=0;j<catArray.length;j++){
            if(catArray[j] == ext){
                return type;
            }
    }
}
return "others";
}

function sendFiles(srcFilePath , dest,category){
       let categoryPath = path.join(dest,category); // made the path where the folder should exist of each type
       if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }
    //copy function works as pehla jehdi file aa ohnu kuch nahi hunda first the dest gets a empty file of same type then the contents of the 
    // file to be copied gets copied and gets pasteed in new destination this is how copy works we shall also do the same
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(fileName, destFilePath);
    console.log("copied the file");
    //je cut operation krna just delete from the source and let the things first get copied then we shall delete from source using unlinkSync
    fs.unlinkSync(srcFilePath);
}

module.exports = {
    organizekey : organizeFn
}