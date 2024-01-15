import { Notification } from "@/models";
import { useCallback, useEffect, useRef } from "react";
import NotificationCard from "../NotificationCard/NotificationCard";
import {
  DivNotificationsBox,
  DivNotificationsBoxLoader,
  H3NotificationBox,
  PEmptyNotifications,
  SectionNotificationsBox,
} from "./NotificationsBox.styled";
import { useHeaderContext } from "@/header";
import { Loader } from "..";

interface Props {
  notifications: Notification[];
}

function NotificationsBox({ notifications }: Props) {
  const { isReachedEnd, setSize, size, mutate, isLoading } = useHeaderContext();

  const date = (date: Date) => new Date(date).getTime();

  const divRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (divRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = divRef.current;
      // console.log(scrollTop);
      // console.log(clientHeight);
      // console.log("total =", scrollHeight);
      if (scrollTop + clientHeight >= scrollHeight) {
        setSize(size + 1);
      }
    }
  }, [size]);
  console.log("acaaaa", size);
  useEffect(() => {
    const divElement = divRef.current;

    if (divElement) {
      divElement.addEventListener("scroll", handleScroll);

      return () => divElement.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <SectionNotificationsBox >
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
          .map((el, i) => (
            <NotificationCard
              key={`${el.id + i}`}
              notification={el}
              mutate={mutate}
            />
          ))}
        {![...notifications].length && (
          <PEmptyNotifications>
            No se han encontrado notificaciones
          </PEmptyNotifications>
        )}
        {/* <DivNotificationsBoxLoader>
          <Loader />
        </DivNotificationsBoxLoader> */}
        {/* </InfiniteScroll> */}
      </DivNotificationsBox>
    </SectionNotificationsBox>
  );
}
export default NotificationsBox;
