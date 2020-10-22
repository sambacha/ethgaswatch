import { AppConfig } from "../config/app";

const sendgridMailer = require('@sendgrid/mail');

export async function SendConfirmationEmail(email: string, id: string) : Promise<void> { 
    sendgridMailer.setApiKey(AppConfig.SENDGRID_APIKEY);
    const activationLink = `${AppConfig.HOST}.netlify/functions/confirm?email=${email}&id=${id}`
    const message = {
        to: email,
        from: {
            email: 'notifier@ywei.io',
            name: 'manifold.finance notifier'
        },
        subject: 'Confirm manifold.finance registration',
        text: `
To confirm your registration for manifold.finance notifications, please click on the link below. 

${activationLink}`
    };

    try { 
        await sendgridMailer.send(message);
    } catch (ex) { 
        console.log("Error sending confirmation email", ex)
    }
}

export async function SendEmailNotification(email: string, id: string, price: number, currentPrice: number) : Promise<void> { 
    sendgridMailer.setApiKey(AppConfig.SENDGRID_APIKEY);
    const cancellationLink = `${AppConfig.HOST}.netlify/functions/cancel?email=${email}&id=${id}`
    const message = {
        to: email,
        from: {
            email: 'notifier@ywei.io',
            name: 'manifold.finance notifier'
        },
        subject: `ETH Gas.price <${price} gwei`,
        text: `
The Ethereum gas price is currently ${currentPrice} gwei. 

For up-to-date prices, check out at ${AppConfig.HOST}

To unsubscribe from notifications at this price level, click the link below.
${cancellationLink}`
    };
    
    try { 
        await sendgridMailer.send(message);
    } catch (ex) { 
        console.log("Error sending notification email", ex)
    }
}