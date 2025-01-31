import { INotificationSender } from "./INotificationSender";

export class Email implements INotificationSender {
    send(message: string) : void {
        console.log(`Email sent: ${message}`)

    }
}