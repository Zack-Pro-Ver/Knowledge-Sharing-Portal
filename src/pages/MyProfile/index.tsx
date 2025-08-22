import { Header } from "../../components/Header";
import { RiEditLine } from "@remixicon/react";

export const MyProfile = () => {
  return (
      <Header
      title='My Profile'
      showButton={true}
      buttonText="Edit Profile"
      icon={<RiEditLine/>}
    />
  );
};
