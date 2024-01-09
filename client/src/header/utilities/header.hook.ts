import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWRInfinite from "swr/infinite";
import { AllNotificationsUrl, allNotifications } from "../services/get-notifications.service";
import { useEffect } from "react";
import { date } from "@/utilities/date.utility";

function HeaderHook<T>(
) {
  const PAGE_SIZE = 20;

  const userId = useSelector(
    (store: AppStore) => store.user.user?.id
  );

  const getKey = (pageIndex: number, previousPageData: T[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return AllNotificationsUrl(
      userId,
      pageIndex + 1,
      PAGE_SIZE
    );
  };

  const {
    data: allNotificationsData,
    size,
    setSize,
    error,
    mutate,
    isLoading,
  } = useSWRInfinite(getKey, allNotifications);

  useEffect(() => {
    mutate();
  }, [size, mutate]);
  
  const paginatedData =
    allNotificationsData
      ?.flat()
      .sort((a, b) => date(b.created_at) - date(a.created_at)) || [];

  const isReachedEnd =
    allNotificationsData && allNotificationsData[allNotificationsData.length - 1]?.length < PAGE_SIZE;

  // const loadingMore =
  //   allBrokerAssetsUser && typeof allBrokerAssetsUser[size - 1] === "undefined";

  return {
    paginatedData,
    isReachedEnd,
    isLoading,
    size,
    setSize,
    error,
    mutate,
  };
}
export default HeaderHook;
