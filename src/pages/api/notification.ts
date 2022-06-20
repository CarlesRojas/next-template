// const webPush = require('web-push');
import type { NextApiRequest, NextApiResponse } from 'next';
import webPush from 'web-push';
import vapid from './vapid.json'; // This should not be imported like this. It should be kept private

webPush.setVapidDetails(`https://next-template-mm.vercel.app/`, vapid.publicKey, vapid.privateKey);

const notification = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        const { subscription } = req.body;

        try {
            const response = await webPush.sendNotification(
                subscription,
                JSON.stringify({ title: 'Hello Web Push', message: 'Your web push notification is here!' })
            );

            res.writeHead(response.statusCode, response.headers).end(response.body);
        } catch (error: any) {
            if ('statusCode' in error) {
                res.writeHead(error.statusCode, error.headers).end(error.body);
            } else {
                console.error(error);
                res.statusCode = 500;
                res.end();
            }
        }
    } else {
        res.statusCode = 405;
        res.end();
    }
};

export default notification;
