import { INotificationSender } from "./INotificationSender";

export class Sms implements INotificationSender {
    send(message: string) : void {
        console.log(`Sms sent: ${message}`)

    }
}