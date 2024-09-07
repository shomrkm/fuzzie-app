'use client'
import React from 'react';
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

// const pubkey = process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY as string;

type Props = {
  onUpload?: any
};

const UploadcareButton = (props: Props) => {
  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="502eda66deac2ff58615"
      />
    </div>
  )
};

export default UploadcareButton
