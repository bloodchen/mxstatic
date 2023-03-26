if ('serviceWorker' in navigator) {

    function sendMsg(msg) {
        const controller = navigator.serviceWorker.controller;
        if (controller) {
            controller.postMessage(msg, []);
        }
    }

    // function offlineNotify() {
    //     window.addEventListener('offline', function () {
    //         Notification.requestPermission().then(function (grant) {
    //             if (grant !== 'granted') {
    //                 return;
    //             }

    //             var notification = new Notification("Hi，网络不给力哟", {
    //                 body: '您的网络貌似离线了，不过新标签页访问过的图片还可以继续访问哦~',
    //                 icon: '//lzw.me/images/avatar/lzwme-80x80.png'
    //             });

    //             notification.onclick = function () {
    //                 notification.close();
    //             };
    //         });
    //     });
    // }
    function onlineNotify(serviceWorker) {
        window.addEventListener('online', function() {
            console.log(serviceWorker);
            serviceWorker.unregister().then(function (result) {
                console.log(result);
            });
        });
    }

    fetch('/api/config.json').then(function (response) {
        if (response.status !== 200) {
            console.log('Status Code: ' + response.status);
            return;
        }

        response.json().then(function (data) {

            navigator.serviceWorker.register('/sw.js', { scope: '/' })
                .then(function (reg) {
                    if (data.offline === false) { // 降级处理
                        reg.unregister().then(function (result) {
                            if (result === true) {
                                console.log('unregister is successful.');
                            } else {
                                console.log('unregister is failture.');
                            }
                        });
                    } else { // 注册
                        if (reg.installing) {
                            console.log('Service worker installing at scope: ' + reg.scope);
                        } else if (reg.waiting) {
                            console.log('Service worker installed at scope: ' + reg.scope);
                        } else if (reg.active) {
                            console.log('Service worker active at scope: ' + reg.scope);
                        }
                    }

                    onlineNotify(reg);
                }).then(function () {
                    // sendMsg(navigator.language);
                }).catch(function (error) {
                    // registration failed
                    console.log('Registration failed with ' + error);
                });
        });
    }).catch(function (err) {
        console.log('Fetch Error : -S' + err);
    });

} else {
    console.log('Service Worker is not supported in this browser.');
}