function helpFn(){
    console.log(`List of all commands available as of now:
                node main.js tree "directory path"
                node main.js organize "directory path"
                node main.js help 
    `);
    }
module.exports = {
    helpkey: helpFn
}