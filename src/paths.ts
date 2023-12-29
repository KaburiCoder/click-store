export const paths = {
  // root
  root() {
    return "/";
  },

  // login
  login() {
    return "/login";
  },

  // signup
  signup() {
    return "/signup";
  },
  signupWithUid(uid: string) {
    return `/signup?uid=${uid}`;
  },

  // orders
  orders() {
    return "/orders";
  },
  // cartview
  cartView() {
    return "/cart-view";
  },

  // settings
  profile() {
    return "/settings/profile";
  },

  // payment
  payment() {
    return "/payment";
  },

  paymentLoading() {
    return `/payment/loading`;
  },

  paymentFail() {
    return `/payment/fail`;
  },

  paymentSuccess(orderId: string) {
    return `/payment/success/${orderId}`;
  },

  // settings
  settingsProfile() {
    return "/settings/profile";
  },

  // admin
  admin() {
    return "/admin";
  },

  // admin
  adminOrders() {
    return "/admin/orders";
  },

  adminWebOrders() {
    return "/admin/web-orders";
  },
};

export const imgPaths = {
  clickIcon: "/images/click_icon.png",
  logo: "/images/main_logo.png",
  noImage: "/images/no-image.png",
  emptyCart: "/images/empty-cart.png",
};
