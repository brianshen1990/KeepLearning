import React , { useState, useEffect, Suspense} from 'react';
const Dropzone = React.lazy( () => import('react-dropzone') );
const axios = require('axios');
import CommonConfig from '../Common/CommonConfig'
import { toast } from 'react-toastify';

function UploadFile() {

  const [upload, setUpload] = useState(0);
  // 0 wait to be uploaded
  // 1 uploading 
  // 2 done
  const [fileName, setFileName] = useState('');

  const handleUpload = (acceptedFiles) => {
    let formData = new FormData();
    let fileName = '';
    for (var i = 0; i < acceptedFiles.length; i++) {
      let file = acceptedFiles[i];
      formData.append('file', file);
      fileName= file.name;
    }
    setUpload(1);
    setFileName(fileName);

    axios.post(`${CommonConfig.baseUrl}/api/uploadfile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then( (res) => {
      console.log( res.data.filename)
      if ( res.data.filename ) {
        setFileName(res.data.filename);
        setUpload(2);
      }  else {
        setUpload(0);
        toast.error('处理错误！');
      }
    });
  }

  return <div className="dropZoneDiv">
    { upload === 0 && <Suspense fallback={<div>Loading...</div>}>
        <Dropzone onDrop={handleUpload} 
              accept={[".xlsx", ".xls"]}
              multiple={false}>
          {({getRootProps, getInputProps}) => (
            <section className="dropZone">
              <div {...getRootProps()} className="dropZoneBorder">
                <input {...getInputProps()} />
                <div className="dropZoneUpload dropZoneFrom"></div>
                <p>
                  点击上传 或者拖拽文件上传<br /> 
                  <strong>TIP：</strong>请选择正确的EXCEL文件格式上传</p>
              </div>
            </section>
          )}
        </Dropzone>
       </Suspense>
    }
    { upload === 1 && <div className="dropZone">
        <div className="dropZoneBorder">
          <div className="dropZoneUpload dropZoneProcessing"></div>
          <p>上传处理中，请稍后……</p>
        </div>
      </div>
    }
    { upload === 2 && <div className="dropZone ">
        <div className="dropZoneDone">
          <div className="dropZoneUpload dropZoneFrom"></div>
          <div className="dropZoneUpload dropZoneTo"></div>
          <div className="dropZoneUpload dropZoneReturn"></div>
          <br></br>
          <p><strong>TIP：</strong>已成功为您启动下载。<br />
            若下载未启动或您的浏览器不支持自动下载，您还可以<a href={ (fileName && upload===2 ) ? `${CommonConfig.baseUrl}/api/downloadfile/${fileName}` : '#' }>点此手动下载</a>， 或者<a href="#" onClick={ (e) => { e.preventDefault(); setUpload(0) } }>再次上传</a></p>
        </div>
        
      </div>
    }
  </div>
}

export default UploadFile;