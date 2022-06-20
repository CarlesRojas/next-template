import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../context/hooks';
import vapid from '../api/vapid.json'; // This should not be imported like this. It should be kept private

const base64ToUint8Array = (base64: string) => {
    const padding = '='.repeat((4 - (base64.length % 4)) % 4);
    const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/');

    const rawData = window.atob(b64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};

const About: NextPage = () => {
    const router = useRouter();

    // Theme context
    const { accentColor, dark } = useAppSelector((state) => state.theme);

    const style = {
        '--accent-color': `#${accentColor}`,
        backgroundColor: dark ? '#343434' : '#f4f4f4',
        color: dark ? '#f4f4f4' : '#343434',
        justifyContent: 'center',
    } as const;

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [subscription, setSubscription] = useState<PushSubscription | null>(null);
    const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
    const message = useRef('');

    useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            // run only in browser
            navigator.serviceWorker.ready.then((reg) => {
                reg.pushManager.getSubscription().then((sub: PushSubscription | null) => {
                    /* tslint:disable-next-line */
                    const subscription = sub as any;

                    if (
                        subscription &&
                        'expirationTime' in subscription &&
                        !(subscription.expirationTime && Date.now() > subscription.expirationTime - 5 * 60 * 1000)
                    ) {
                        setSubscription(sub);
                        setIsSubscribed(true);
                    }
                });
                setRegistration(reg);
            });
        }
    }, []);

    const subscribeButtonOnClick = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();

        if (!registration) return;

        const sub = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: base64ToUint8Array(vapid.publicKey),
        });
        // TODO: you should call your API to save subscription data on server in order to send web push notification from server
        message.current = 'web push subscribed!';
        setSubscription(sub);
        setIsSubscribed(true);
    };

    const unsubscribeButtonOnClick = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();

        if (subscription) await subscription.unsubscribe();

        // TODO: you should call your API to delete or invalidate subscription data on server
        message.current = 'web push unsubscribed!';
        setSubscription(null);
        setIsSubscribed(false);
    };

    const sendNotificationButtonOnClick = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (subscription == null) {
            message.current = 'web push not subscribed!';
            return;
        }

        await fetch('/api/notification', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                subscription,
            }),
        });
    };

    return (
        <div className="h-full flex flex-column align-items-center flex-grow-1" style={style}>
            <h1 className={'mb-5 mt-5'} style={{ color: 'var(--accent-color)' }}>
                Notifications tester
            </h1>

            <p>{message.current}</p>

            <Button
                label="Subscribe"
                onClick={subscribeButtonOnClick}
                className="p-button-text mb-2 mt-2"
                disabled={isSubscribed}
            />
            <Button
                label="Unsubscribe"
                onClick={unsubscribeButtonOnClick}
                className="p-button-text mb-2 mt-2"
                disabled={!isSubscribed}
            />
            <Button
                label="Send Notification"
                onClick={sendNotificationButtonOnClick}
                className="p-button-text mb-2 mt-2"
                disabled={!isSubscribed}
            />

            <Button label="Go to Home" onClick={() => router.push('/')} className="p-button-text mb-2 mt-2" />
        </div>
    );
};

export default About;
