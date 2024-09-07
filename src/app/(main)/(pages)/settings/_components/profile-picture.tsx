'use client'
import React from "react";
import UploadcareButton from "./uploadcare-button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileUploaderRegular } from "@uploadcare/react-uploader";

type Props = {
  userImage: string
  onUpload?: any
  onDelete?: any
};

export const ProfilePicture = ({ userImage, onUpload, onDelete }: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = () => {
    const response = onDelete()
    if(response){
      router.refresh()
    }
  }

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {
          userImage ? (
            <>
              <div className="relative h-full w-2/12">
                <Image
                  src={userImage}
                  alt="User_Image"
                  fill
                />
                <Button
                  onClick={onRemoveProfileImage}
                  className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
                >
                  Remove Logo
                </Button>
              </div>
            </>
          ) : (
            <UploadcareButton />
          )
        }
      </div>
    </div>
  )
};
