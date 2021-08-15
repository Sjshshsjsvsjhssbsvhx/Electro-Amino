//
//
// AminoApp-Client Electron
// Standby
// web: https://standby.cf
//

const electron = require('electron');

const {app, BrowserWindow, globalShortcurt, Menu} = electron;

Menu.setApplicationMenu(false)

let mainWindow;
let ventanaMenu = [
{
label: 'Menu',
    submenu: [
      { role: 'reload', label: 'Recargar' },
      { role: 'forcereload' },
      { type: 'separator' },
      // { label: 'Minizar Amino', click: function(){
      //     mainWindow.show()
      //  } },
      { role: 'resetzoom', label: 'Resetear Zoom' },
      { role: 'zoomin', label: 'Zoom +'},
      { role: 'zoomout' , label: 'Zoom -'},
      { type: 'separator' },
      { 
        label: 'Pantalla completa',
        click: () => { toggleFullscreen();},
        accelerator: 'ctrl+f'
      }
    ]
  },
  {
    label: 'Opciones',
    submenu: [
    // { label: 'Remover Menu', click: function(){
    //      mainWindow.removeMenu()
    //    } },
    { role: 'toggledevtools', label: 'Desarrollo' },
    // { role: 'close', label: 'Salir' }
    {
      role: 'close', 
      label: 'Salir', 
      accelerator: 'CmdOrCtrl+Q'    
    }
    ]
  }
];

app.on('ready', () =>{
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        resizable: true,
        center: true,
        title: "AminoApps"
        //icon: "./icon.png"
   });
    mainWindow.loadURL('https://www.aminoapps.com');
    
    // mainWindow.on('minimize', function(event) {
    //    event.preventDefault();
    //    mainWindow.hide()
    // });


    mainWindow.on('close', function(){
       mainWindow = null;    
    })

    // mainWindow.on('show', function(event) {
    //    event.preventDefault();
    //    appIcon.setHighlightMode('always')
    // });

    var menu = Menu.buildFromTemplate(ventanaMenu);
    Menu.setApplicationMenu(menu);
});

function toggleFullscreen() {
    if (mainWindow.isFullScreen()) {
        mainWindow.setFullScreen(false);
    } else {
        mainWindow.setFullScreen(true);
    }
}
