import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWRInfinite from "swr/infinite";
import { AllBrokersUrl, allBrokers } from "..";


function ClientChooseBrokerHook<T>(
  searchField: string,
  typeToFilter: "user" | "legalUser"
) {
  const PAGE_SIZE = 20;

  const user = useSelector(
    (store: AppStore) => store.user.user
  );

  const getKey = (pageIndex: number, previousPageData: T[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return AllBrokersUrl(
      user?.id,
      searchField,
      typeToFilter,
      pageIndex + 1,
      PAGE_SIZE
    );
  };

  const {
    data: allClients,
    size,
    setSize,
    error,
    mutate,
    isLoading,
  } = useSWRInfinite(getKey, allBrokers);

  const paginatedData = allClients?.flat() || [];

  const isReachedEnd =
    allClients && allClients[allClients.length - 1]?.length < PAGE_SIZE;

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
export default ClientChooseBrokerHook;
