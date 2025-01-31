import { Email } from "./email";
import { INotificationSender } from "./INotificationSender";
import { Sms } from "./sms";

export class NotificationSender {
    private notification: INotificationSender;

    constructor(notificationType: INotificationSender) {
        this.notification = notificationType;
    }
    sendNotification(message: string) : void {
        this.notification.send(message);
    } 
}

