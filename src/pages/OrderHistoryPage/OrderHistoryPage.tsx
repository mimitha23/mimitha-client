import { RouterHistory } from "config/router";
import { useRedirectOnLogout } from "hooks/auth";

import { Navigation, Footer } from "components";
import UserOrderHistory from "components/UserOrderHistory/UserOrderHistory";

RouterHistory.redirectIfUnauthorized();

const OrderHistoryPage: React.FC = () => {
  useRedirectOnLogout();

  return (
    <>
      <Navigation />
      <UserOrderHistory />
      <Footer />
    </>
  );
};

export default OrderHistoryPage;
