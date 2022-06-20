'use strict';

self.addEventListener('push', function (event) {
    const data = JSON.parse(event.data.text());
    console.log(data);
    console.log(registration);
    event.waitUntil(
        registration.showNotification(data.title, {
            body: data.message,
            icon: '/logo512.png',
        })
    );
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    console.log('click');
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
            if (clientList.length > 0) {
                let client = clientList[0];
                for (let i = 0; i < clientList.length; i++) {
                    if (clientList[i].focused) {
                        client = clientList[i];
                    }
                }
                return client.focus();
            }
            return clients.openWindow('/');
        })
    );
});