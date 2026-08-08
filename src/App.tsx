import Notifier from "./components/Notifier";
import PageRoutes from "./routes";
import { useDeviceGuard } from "./hooks/useDeviceGuard";
import RestrictedAccess from "./components/RestrictedAccess";
import type { FC } from "react";

const App: FC = () => {
  const { blocked, width, reason } = useDeviceGuard();

  if (blocked) {
    return <RestrictedAccess width={width} reason={reason} />;
  }

  return (
    <>
      <Notifier />
      <PageRoutes />
    </>
  );
};

export default App;
