import { Notification } from "@/models";
import NotificationCard from "../NotificationCard/NotificationCard";
import {
  DivNotificationsBox,
  H3NotificationBox,
  PEmptyNotifications,
  SectionNotificationsBox,
} from "./NotificationsBox.styled";

interface Props {
  notifications: Notification[];
}

function NotificationsBox({ notifications }: Props) {
  const date = (date: Date) => new Date(date).getTime();

  return (
    <SectionNotificationsBox>
      <H3NotificationBox>Notificaciones</H3NotificationBox>
      <DivNotificationsBox>
        {[...notifications]
          .sort((a, b) => date(b.created_at) - date(a.created_at))
          .map((el) => (
            <NotificationCard key={el.id} notification={el} />
          ))}
        {![...notifications].length && <PEmptyNotifications>No se han encontrado notificaciones</PEmptyNotifications>}
      </DivNotificationsBox>
    </SectionNotificationsBox>
  );
}
export default NotificationsBox;
