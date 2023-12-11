import { Notification } from "@/models";
import {
  BtnNotification,
  DivNotification,
  PNotification,
  SpanNotification,
} from "./NotificationCard.styled";
import { updateNotification } from "@/redux/slices/notificationSlice";
import { useDispatch } from "react-redux";
import { NotificationResponse } from "@/models/types/notification-response.enum";
import { useState } from "react";

interface Props {
  notification: Notification;
}

function NotificationCard({ notification }: Props) {
  const dispatch = useDispatch();

  const [state, setState] = useState<boolean | undefined>(undefined);

  const update = (response: boolean) => {
    dispatch(
      updateNotification({
        ...notification,
        response: response
          ? NotificationResponse.ACCEPTED
          : NotificationResponse.REJECTED,
      })
    );

    setState(response);
  };

  return (
    <DivNotification>
      <h4>{notification.title}</h4>
      <PNotification>{notification.message}</PNotification>
      <SpanNotification>
        {notification.withOptions && (
          <>
            {notification.response === null && (
              <>
                <BtnNotification $yes onClick={() => update(true)}>
                  aceptar
                </BtnNotification>
                <BtnNotification onClick={() => update(false)}>
                  rechazar
                </BtnNotification>
              </>
            )}
            {!(notification.response === null) && (
              <>
                {notification.response === NotificationResponse.ACCEPTED ? (
                  <PNotification $state>Aceptada</PNotification>
                ) : (
                  <PNotification $state>Rechazada</PNotification>
                )}
              </>
            )}
          </>
        )}
      </SpanNotification>
    </DivNotification>
  );
}
export default NotificationCard;
