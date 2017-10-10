# VSCodeNewProject
Rapidly creates a new project to be used in VS Code that installs essential package(s): 
    Gulp
    TypeScript (optional)
    Angular (optional)
    RxJS (optional)

# Caveat
Number One: Only able to *launch* Chrome in an anonymous profile session.  The 'runtimeExecutable' and 
'userDataDir' are problematic for me.

Chrome user profile note: Normally, if Chrome is already running when you start debugging with a launch config, then the new instance won't start in remote debugging mode. So by default, the extension launches Chrome with a separate user profile in a temp folder, (unless you are using the "runtimeExecutable" field). Use the userDataDir launch config field to override or disable this.


Number Two: You *must* manually append the executable parameter: --remote-debugging-port=9222
Although this is documented under 'attach' section, I'm only able to debug as 'launch'.

With "request": "attach", you must launch Chrome with remote debugging enabled in order for the extension to attach to it. 

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222