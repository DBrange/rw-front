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
  const date = (date: string) => new Date(date).getTime();

  return (
    <SectionNotificationsBox>
      <H3NotificationBox>Notificaciones</H3NotificationBox>
      <DivNotificationsBox>
        {notifications
          ? notifications
              // .sort(
              //     (a, b) =>
              //       date(b.creater_at) -
              //       date(a.creater_at)
              //   )
              .map((el) => (
                <NotificationCard
                  key={el.id}
                  notification={el}
                />
              ))
          : []}
      </DivNotificationsBox>
    </SectionNotificationsBox>
  );
}
export default NotificationsBox;
