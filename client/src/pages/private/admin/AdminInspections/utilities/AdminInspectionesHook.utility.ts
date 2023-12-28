import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWRInfinite from "swr/infinite";
import { AllInspectionsUrl, allInspections } from "..";

function AdminInspectionsHook<T>(
  searchField: string,
  typeToFilter: "vehicle" | "electronic"
) {
  const PAGE_SIZE = 20;

  const user = useSelector((store: AppStore) => store.user);

  const getKey = (pageIndex: number, previousPageData: T[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return AllInspectionsUrl(
      searchField,
      typeToFilter,
      pageIndex + 1,
      PAGE_SIZE
    );
  };

  const {
    data: allBrokerAssetsUser,
    size,
    setSize,
    error,
    mutate,
    isLoading,
  } = useSWRInfinite(getKey, allInspections);

  const paginatedData = allBrokerAssetsUser?.flat() || [];

  const isReachedEnd =
    allBrokerAssetsUser &&
    allBrokerAssetsUser[allBrokerAssetsUser.length - 1]?.length < PAGE_SIZE;

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
export default AdminInspectionsHook;
