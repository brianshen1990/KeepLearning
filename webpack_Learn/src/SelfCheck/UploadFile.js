import React , { useState, useEffect, Suspense} from 'react';
// const Dropzone = React.lazy( () => import('react-dropzone') );
import Dropzone from 'react-dropzone';

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

    setTimeout( () => {
      const newFile = "Success.xls"
      setFileName(newFile);
      setUpload(2);
    }, 2000);
  }

  return <div className="dropZoneDiv">
    { upload === 0 && 
        <Dropzone onDrop={handleUpload} 
              accept={[".xlsx", ".xls"]}
              multiple={false}>
          {({getRootProps, getInputProps}) => (
            <section className="dropZone">
              <div {...getRootProps()} className="dropZoneBorder">
                <input {...getInputProps()} />
                <div className="dropZoneUpload dropZoneFrom"></div>
                <p>
                  Click or Drop Any file<br /> 
                  <strong>TIP：</strong>only excel files are acceptable</p>
              </div>
            </section>
          )}
        </Dropzone>
    }
    { upload === 1 && <div className="dropZone">
        <div className="dropZoneBorder">
          <div className="dropZoneUpload dropZoneProcessing"></div>
          <p>Uploading, please wait...</p>
        </div>
      </div>
    }
    { upload === 2 && <div className="dropZone ">
        <div className="dropZoneDone">
          <div className="dropZoneUpload dropZoneFrom"></div>
          <div className="dropZoneUpload dropZoneTo"></div>
          <div className="dropZoneUpload dropZoneReturn"></div>
          <br></br>
          <p><strong>TIP：</strong>You can download now， or <a href="#" onClick={ (e) => { e.preventDefault(); setUpload(0) } }>upload again</a></p>
        </div>
      </div>
    }
  </div>
}

export default UploadFile;