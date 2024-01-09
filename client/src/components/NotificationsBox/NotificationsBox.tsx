import { Notification } from "@/models";
import { useCallback, useEffect, useRef } from "react";
import NotificationCard from "../NotificationCard/NotificationCard";
import {
  DivNotificationsBox,
  H3NotificationBox,
  PEmptyNotifications,
  SectionNotificationsBox,
} from "./NotificationsBox.styled";

interface Props {
  notifications: Notification[];
  setSize: any
  isReachedEnd: any
  size: any
  mutate: any
}

function NotificationsBox({ notifications,setSize,size,mutate }: Props) {
  const date = (date: Date) => new Date(date).getTime();

  const divRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (divRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = divRef.current;

      if (scrollTop + clientHeight >= scrollHeight) {
        setSize(size + 1);
      }
    }
  }, [size]);

  useEffect(() => {
    const divElement = divRef.current;

    if (divElement) {
      divElement.addEventListener("scroll", handleScroll);

      // return () => divElement.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <SectionNotificationsBox>
      <H3NotificationBox>Notificaciones</H3NotificationBox>
      <DivNotificationsBox ref={divRef}>
        {/* <InfiniteScroll
          className="infiniteScroll"
          next={() => console.log()}
          hasMore={!isReachedEnd}
          loader={<Loader />}
          dataLength={notifications.length ?? 0}
        > */}
        {[...notifications]
          .sort((a, b) => date(b.created_at) - date(a.created_at))
          .map((el) => (
            <NotificationCard key={el.id} notification={el} mutate={mutate} />
          ))}
        {![...notifications].length && (
          <PEmptyNotifications>
            No se han encontrado notificaciones
          </PEmptyNotifications>
        )}
        {/* </InfiniteScroll> */}
      </DivNotificationsBox>
    </SectionNotificationsBox>
  );
}
export default NotificationsBox;
