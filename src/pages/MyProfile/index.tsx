import { RiEditLine } from "@remixicon/react";
import { Header } from "../../components/Header";

export const MyProfile = () => {
  return (
      <Header
        buttonText="Edit Profile"
        icon={<RiEditLine size="medium" />}
        title="My Profile"
      />
  );
};
