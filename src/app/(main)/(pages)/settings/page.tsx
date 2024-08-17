import React from "react";
import ProfileForm from "../../../../components/forms/profile-form";

type Props = {};

const Settings = (props: Props) => {
  // WIP wire picture
  return <div className="flex flex-col gap-4">
    <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
      <span>Settings</span>
    </h1>
    <div className="flex flex-col gap-10 p-6">
      <div>
        <h1 className="text-2xl font-bold">User Profile</h1>
        <p className="text-base text-white/50">Add or update your information</p>
      </div>
      <ProfileForm />
    </div>
  </div>
};

export default Settings;
