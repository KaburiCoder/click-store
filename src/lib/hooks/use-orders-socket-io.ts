import useSocketIo from "./use-socket-io";

export const useOrdersSocketIo = () => {
  // useSocketIo({
  //   receiveEventName: "onOrders",
  //   // onError: (error) => {
  //   //   toast.error(error.message);
  //   // },
  //   onReceive: (args) => {
  //     const sock: SockType = args[0];
  //     switch (sock.state) {
  //       case "update":
  //         updateSendType(sock.data);
  //         break;
  //       case "checkout":
  //         refetch();
  //     }
  //   },
  // });
};
