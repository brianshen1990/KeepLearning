import React from 'react';
import UploadFile from './UploadFile';
import CommonTab from '../Common/CommonTab';

function SCIndex () {
  const renderArr = [{
    name: "文件上传",
    Render: UploadFile
  }];
  return CommonTab({tabs: renderArr});
}

export default SCIndex;