import React, {useCallback, useState} from 'react';
import './styles.css';
import {useDropzone} from 'react-dropzone';
import {
  Result,
  Button,
  Spin,
  InputNumber,
  Divider,
  Card,
  Tag,
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Axios from 'axios';
import FileDownload from 'js-file-download'

const fileIcon = require('../../assets/file.png');
const URL = 'http://localhost:5000/'

function Calculate() {
  
  const [mode, setMode] = useState('upload');
  const [hb, setHb] = useState(3.1);
  const [sb, setSb] = useState(4.0);
  const [db, setDb] = useState(2.2);
  const [vdw, setVdw] = useState(5.5);
  const [ps, setPs] = useState(7.2);
  const [aaanBeg, setAaanBeg] = useState(2.0);
  const [aaanEnd, setAaanEnd] = useState(3.0);
  const [aaspi, setAaspi] = useState(5.3);
  const [aactnBeg, setAactnBeg] = useState(3.4);
  const [aactnEnd, setAactnEnd] = useState(4.0);
  const [file, setFile] = useState('')

  const [data, setData] = useState({})

  const uploadFile = () => {
    setMode('process');
  
    const {name} = file;
    const nameSplit = name.split('.');

    if(nameSplit.length !== 2){
      setMode('error');
      return;
    }
    if(nameSplit[1] !== 'pdb') {
      setMode('error');
      return;
    }


    try {
     
      const api = Axios.create( { baseURL : URL} );
      const formData = new FormData();

      formData.append('file', file);
      formData.append('hb', hb)
      formData.append('sb', sb)
      formData.append('db', db)
      formData.append('vdw', vdw)
      formData.append('ps', ps)
      formData.append('aaspi', aaspi)
      formData.append('aactnBeg', aactnBeg)
      formData.append('aactnEnd', aactnEnd)
      formData.append('aaanBeg', aaanBeg)
      formData.append('aaanEnd', aaanEnd)
      api
      .post('/ysera', formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        }
      })
      .then(result => {

        setMode('result');
        console.log(result.data)
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
    setFile(file);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  if(mode === 'result') {
    return (
      <div className="container">
        <div className="box">
          <Card title="Resultado" style={{ width: '95%',height: '60%', marginTop: 10, marginBottom: 40, display: 'flex', flexDirection:'column' }}>
            <div style={{height: '100%', width: '100%', display:'flex', flexDirection:'row'}}>
            <div style={{width:'30%', marginLeft: '3%', height: '100%'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}> 
                  <span>Hydrogen Bonds:</span><Tag color="#20B2AA">{data.hb}</Tag> 
                </div>
                <Divider />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <span>Saline Bridges:</span><Tag color="#20B2AA">{data.sb}</Tag>
                </div>
                <Divider />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <span>Disulfite bridge:</span><Tag color="#20B2AA">{data.db}</Tag>
                </div>
                <Divider />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <span>ππ Stacking:</span><Tag color="#008080">{data.spi}</Tag>
                </div>
                
              </div>

              <div style={{width:'30%', marginLeft: '3%', height: '100%'}}>
                
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <span>Van Der Waals:</span><Tag color="#4682B4">{data.vdw}</Tag>
                </div>
                <Divider />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <span>Anion anel aromatic:</span><Tag color="#66CDAA">{data.lpi}</Tag>
                </div>
                <Divider />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <span>Anel aromatic:</span><Tag color="#5F9EA0">{data.an}</Tag>
                </div>
                <Divider />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <span>Sulfur anel aromatic:</span><Tag color="#4682B4">{data.ctn}</Tag> 
                </div>
              </div>

              <div style={{width:'30%', marginLeft: '3%', height: '100%'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <span>Paralel:</span><Tag color="#008080">{data.paralel}</Tag>
                </div>
                <Divider />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <span>Inter:</span><Tag color="#008B8B">{data.inter}</Tag>
                </div>
                <Divider />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <span>Tshaped:</span><Tag color="#20B2AA">{data.tshaped}</Tag>
                </div>


              </div>



            </div>
          </Card>
            <div className="buttonsResult">
              <Button key="console" onClick={()=>{setMode('upload')}}>
                Calculate again
              </Button>
              <Button key="console" type="primary" onClick={()=>{downloadData()}}>
                Download complete result
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
        <div className="box" style={{ justifyContent: 'center'}}>
          <Spin indicator={loadingIcon} style={{color: '#EB4B98'}} />
          <span style={{marginTop:40, fontSize: 24}}>Aguarde...</span>
        </div>
      </div>
    )
  }

  if(mode === 'error') {
    return (
      <div className="container">
        <div className="box" style={{ justifyContent: 'center'}}>
          <Result
            status="error"
            title="Error - Invalid File"
            subTitle="Plese, select a pdb file"
            extra={[
              <Button key="console" onClick={()=>{setMode('upload')}}>
                Try again
              </Button>,
            ]}
          />  
        </div>
      </div>
    )
  }

  return (
    <div className="container" >
      <div className="boxResult">
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {
            isDragActive ?
              (
                <p>Drag and drop...</p> 
              ) : (
                <>
                  <img src={fileIcon} className="fileIcon"/>
                  <p>Drag and drop a pdb file or click here</p>
                  
                </>
              )
          }
        </div>
        <div className="boxInputs">
          <div>
            <span>Hydrogen bond:</span>
            <InputNumber min={0} max={10} value={hb} onChange={(e)=>{setHb(e)}}   />
          </div>
          
          <div>
            <span>Saline bridge:</span>
            <InputNumber min={0} max={10}  value={sb} onChange={(e)=>{setSb(e)}}   />
          </div>
          
          <div>
            <span>Disulfide bridge:</span>
            <InputNumber min={0} max={10}  value={db} onChange={(e)=>{setDb(e)}}    />
          </div>
          
          <div>
            <span>Van der Waals:</span>
            <InputNumber min={0} max={10}  value={vdw} onChange={(e)=>{setVdw(e)}}  />
          </div>
          
          <div>
            <span>π-stacking:</span>
            <InputNumber min={0} max={10}  value={ps} onChange={(e)=>{setPs(e)}}   />
          </div>
          
          <div>
            <span>Aryl sulfides:</span>
            <InputNumber min={0} max={10}  value={aaspi} onChange={(e)=>{setAaspi(e)}}  />
          </div>

          <div>
            <span>Anion Aryl:</span>
            <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
              <InputNumber min={0} max={10} value={aaanBeg} onChange={(e)=>{setAaanBeg(e)}}  />
              <span>Até</span>
              <InputNumber min={0} max={10} value={aaanEnd} onChange={(e)=>{setAaanEnd(e)}}  />
            </div>
          </div>
          
          <div>
            <span>Cation aryl:</span>
            <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
              <InputNumber min={0} max={10} value={aactnBeg} onChange={(e)=>{setAactnBeg(e)}}  />
              <span>Até</span>
              <InputNumber min={0} max={10} value={aactnEnd} onChange={(e)=>{setAactnEnd(e)}}  />
            </div>
          </div>
        </div>
          
        <Button key="console" type="primary" onClick={()=>{uploadFile()}}>
          Submit
        </Button>
      
      </div>
    </div>
  );
}

export default Calculate; 