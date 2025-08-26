import { Header } from "../../../components/Header";
import { RiCheckDoubleLine  } from "@remixicon/react";


export const NotificationHeader = ( ) => {
    return (
        <Header
          buttonText=" Mark All as Read "
          description=" Stay updated with your Q&A activity"
          title="Notification"
          showButton={true}
          icon={
            <RiCheckDoubleLine className="absolute left-4 item-center text-white w-5 h-5" />
          }
        />
    )
}