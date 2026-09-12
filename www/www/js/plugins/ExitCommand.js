/*:
 * @plugindesc Adds a fully working Quit option to the Title Screen for RPG Maker MV.
 */

(function() {

    // Add Quit command
    var _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        _Window_TitleCommand_makeCommandList.call(this);

        if (Utils.isNwjs()) {
            this.addCommand("Exit", "exit");
        }
    };

    // Register handler so clicking Quit actually triggers a function
    var _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Scene_Title_createCommandWindow.call(this);

        this._commandWindow.setHandler("exit", this.commandExit.bind(this));
    };

    // Exit logic
    Scene_Title.prototype.commandExit = function() {
        if (Utils.isNwjs()) {
            // Proper exit for NW.js
            nw.App.quit();
        }
    };

})();
