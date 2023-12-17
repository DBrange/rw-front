import { Notification } from "@/models";
import NotificationCard from "../NotificationCard/NotificationCard";
import {
  DivNotificationsBox,
  H3NotificationBox,
  SectionNotificationsBox,
} from "./NotificationsBox.styled";
import { useState } from "react";

interface Props {
  notifications: Notification[];
}

function NotificationsBox({ notifications }: Props) {
  const date = (date: Date) => new Date(date).getTime();
console.log(
  [...notifications].sort((a, b) => date(b.created_at) - date(a.created_at))
);
  return (
    <SectionNotificationsBox>
      <H3NotificationBox>Notificaciones</H3NotificationBox>
      <DivNotificationsBox>
        {[...notifications]
          .sort((a, b) => date(b.created_at) - date(a.created_at))
          .map((el) => (
            <NotificationCard key={el.id} notification={el} />
          ))}
        
      </DivNotificationsBox>
    </SectionNotificationsBox>
  );
}
export default NotificationsBox;
