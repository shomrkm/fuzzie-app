'use client'
import React from "react";
import UploadcareButton from "./uploadcare-button";

type Props = {};

export const ProfilePicture = (props: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        <UploadcareButton />
      </div>
    </div>
  )
};
