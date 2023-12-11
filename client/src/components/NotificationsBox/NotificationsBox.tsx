import { Notification } from "@/models";
import NotificationCard from "../NotificationCard/NotificationCard";
import {
  DivNotificationsBox,
  H3NotificationBox,
  SectionNotificationsBox,
} from "./NotificationsBox.styled";

interface Props {
  notifications: Notification[];
}

function NotificationsBox({ notifications }: Props) {
  return (
    <SectionNotificationsBox>
      <H3NotificationBox>Notificaciones</H3NotificationBox>
      <DivNotificationsBox>
        {notifications.map((el) => (
          <NotificationCard key={el.id} notification={el} />
        ))}
      </DivNotificationsBox>
    </SectionNotificationsBox>
  );
}
export default NotificationsBox;
