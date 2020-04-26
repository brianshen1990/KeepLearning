import React from 'react';
import UploadFile from './UploadFile';
import CommonTab from '../Common/CommonTab';

function SCIndex () {
  const renderArr = [{
    name: "Upload File",
    Render: UploadFile
  }];
  return CommonTab({tabs: renderArr});
}

export default SCIndex;