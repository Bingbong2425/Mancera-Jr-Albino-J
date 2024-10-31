import React, { useEffect } from "react";
import { NotificationModalAtom } from "../../hooks/modal-atom/notification-modal-atom";

interface notificationprops {
  open: boolean;
}
const NotificationBox: React.FC<notificationprops> = ({ open }) => {
  const { notificationData } = NotificationModalAtom();
  return (
    <div>
      {open && (
        <div className="bg-white w-[300px] shadow-md shadow-[#6a6a6a] rounded-md  h-[400px] overflow-auto ">
          <div className="py-1 px-3">
            {notificationData.map((item) => (
              <div className="flex items-center gap-5 mt-5 w-full">
                <div className="w-[20%]">
                  <img
                    src={item.commentprofile}
                    className="w-full h-[55px] rounded-full"
                  />
                </div>
                <div className="w-[80%]">
                  <h1 className="text-sm">
                    <span className="text-base font-semibold">
                      {item.commentname}
                    </span>{" "}
                    has comment on your post
                  </h1>
                  <h1 className="text-sm text-[#7e7e7e]">{item.date}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBox;
