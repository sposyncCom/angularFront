if (!navigator.serviceWorker.controller) {
    navigator.serviceWorker.register("'../assets/js/sw.js'").then(function(reg) {
    //    console.log("Service worker has been registered for scope: " + reg.scope);
    });
}