import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWRInfinite from "swr/infinite";
import { AllUsersUrl, allUsers } from "../services/get-all-users.service";

function AdminUsersHook<T>(
  searchField: string,
  typeToFilter: "user" | "legalUser",
  typeToFilterUser: "client" | "broker"
) {
  const PAGE_SIZE = 20;



  const getKey = (pageIndex: number, previousPageData: T[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return AllUsersUrl(
      searchField,
      typeToFilter,
      typeToFilterUser,
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
  } = useSWRInfinite(getKey, allUsers);

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
export default AdminUsersHook;
