import { AppStore } from "@/redux";
import { resetClient } from "@/redux/slices/clientSlice";
import { useDispatch, useSelector } from "react-redux";

const ExpiresToken = (): void => {
  const dispatch = useDispatch();
  const user = useSelector((store: AppStore) => store.user);
  const date = new Date();
  const currentDate = Math.floor(date.getTime() / 1000);
  if (user.exp <= +currentDate) dispatch(resetClient());
};

export default ExpiresToken;
