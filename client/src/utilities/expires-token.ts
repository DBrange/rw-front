import { AppDispatch, AppStore } from "@/redux";
import { updateTokenAsync } from "@/redux/slices/clientSlice";
import { useDispatch, useSelector } from "react-redux";

const ExpiresToken = (): void => {
  const dispatchAsync = useDispatch<AppDispatch>();
  const user = useSelector((store: AppStore) => store.user);
  const date = new Date();
  const currentDate = Math.floor(date.getTime() / 1000);
  if (user.exp <= +currentDate) dispatchAsync(updateTokenAsync(user.user?.id as string));
};

export default ExpiresToken;
