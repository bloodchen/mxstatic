if ('serviceWorker' in navigator) {

    function sendMsg(msg) {
        const controller = navigator.serviceWorker.controller;
        if (controller) {
            controller.postMessage(msg, []);
        }
    }

    function onlineNotify(serviceWorker) {
        window.addEventListener('online', function () {
            console.log(serviceWorker);
            serviceWorker.unregister().then(function (result) {
                console.log(result);
            });
        });
    }

    navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then(function (reg) {
            // 注册
            if (reg.installing) {
                console.log('Service worker installing at scope: ' + reg.scope);
            } else if (reg.waiting) {
                console.log('Service worker installed at scope: ' + reg.scope);
            } else if (reg.active) {
                console.log('Service worker active at scope: ' + reg.scope);
            }
        });
    // onlineNotify(reg);
} else {
    console.log('Service Worker is not supported in this browser.');
}