import { RouterHistory } from "config/router";
import { useRedirectOnLogout } from "hooks/auth";

import { Navigation, Footer } from "components";
import UserOrderHistory from "components/UserOrderHistory/UserOrderHistory";

RouterHistory.redirectIfUnauthorized();

export default function OrderHistoryPage() {
  useRedirectOnLogout();

  return (
    <>
      <Navigation />
      <UserOrderHistory />
      <Footer />
    </>
  );
}
