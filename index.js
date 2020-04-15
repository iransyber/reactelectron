const { app , BrowserWindow } = require("electron")
const path = require("path");

let mainWondow = null

function initialize() {

    function createWindow(){
        const optWindow = {
            width:1080,
            height:680,
            frame:false,
            title:"primeiro app electron",
            webPreferences:{
                nodeIntegration:true
            }
        }

        mainWondow = new BrowserWindow(optWindow)
        mainWondow.loadURL("http://localhost:3000")
    }

    app.on("ready", createWindow)
    
}

initialize();