import { NotificationSender } from "./NotificationSender";
import { Email } from "./email";
import { Sms } from "./sms";


const emailNotification = new Email();
const smsNotification = new Sms();

const emailService = new NotificationSender(emailNotification);
emailService.sendNotification("Hello via email!");

const smsService = new NotificationSender(smsNotification);
smsService.sendNotification("Hello via SMS!");