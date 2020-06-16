import React, {useCallback, useState} from 'react';
import './styles.css';
import {useDropzone} from 'react-dropzone';
import {
  Result,
  Button,
  Spin,
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Axios from 'axios';
import FileDownload from 'js-file-download'

const fileIcon = require('../../assets/file.png');
const URL = 'http://localhost:5000/'

function Calculate() {
 
  const [mode, setMode] = useState('upload');
  const [data, setData] = useState({})

  const uploadFile = (file) => {
    try {
      const api = Axios.create( { baseURL : URL} );
      const formData = new FormData();
      formData.append('file', file);
      api
      .post('/ysera', formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        }
      })
      .then(result => {
        
        setTimeout(() => { setMode('result')}, 3000);
       
        setData(result.data)
      })

    }catch(err) {

    }
  }

  const downloadData = () => {
    try {
      const api = Axios.create( { baseURL : URL} );
    
      api
        .post('/record', {'filename' : 'file_1592292692275.pdb.txt'})
        .then(result => {
          FileDownload(result.data, 'relatorio.txt')
        });
      
    }catch(err) {
      console.log(err);
    }
  }

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    if(file.type === 'application/x-aportisdoc') {
      setMode('process');
      uploadFile(file)
    }else {
      setMode('error');
    }

  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  if(mode === 'result') {
    return (
      <div className="container">
        <div className="box">
          <p className="result">
          {JSON.stringify(data)}
          </p>
          <div className="buttonsResult">
          <Button key="console" onClick={()=>{setMode('upload')}}>
            Calcular novamente
          </Button>
          <Button key="console" type="primary" onClick={()=>{downloadData()}}>
            Baixar Relatorio Completo
          </Button>
          </div>
        </div>
      </div>
    )
  }

  if(mode === 'process') {
    const loadingIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
    return (
      <div className="container">
        <div className="box">
          <Spin indicator={loadingIcon} style={{color: '#EB4B98'}} />
          <span style={{marginTop:40, fontSize: 24}}>Aguarde...</span>
        </div>
      </div>
    )
  }

  if(mode === 'error') {
    return (
      <div className="container">
        <div className="box">
          <Result
            status="error"
            title="Erro - Arquivo invalido"
            subTitle="Por favor, envie um arquivo no formato pdb"
            extra={[
              <Button key="console" onClick={()=>{setMode('upload')}}>
                Tentar novamente
              </Button>,
            ]}
          />  
        </div>
      </div>
    )
  }

  return (
    <div className="container" >
      <div className="box">
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {
            isDragActive ?
              (
                <p>Solte aqui...</p> 
              ) : (
                <>
                  <img src={fileIcon} className="fileIcon"/>
                  <p>Solte um arquivo .pdb aqui, ou clique para selecionar</p>
                </>
              )
          }
        </div>
      </div>
    </div>
  );
}

export default Calculate;