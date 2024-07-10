import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user'
};

const CameraComponent = ({ toggleFullScreen }) => {
  const webcamRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    webcamRef.current.startRecording({
      mimeType: 'video/webm;codecs=vp9',
    });
  }, [webcamRef, setCapturing]);

  const handleStopCaptureClick = useCallback(() => {
    webcamRef.current.stopRecording(() => {
      const newRecording = webcamRef.current.getRecordedData();
      setRecordedChunks([...recordedChunks, newRecording]);
    });
    setCapturing(false);
  }, [webcamRef, setCapturing, recordedChunks]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = url;
      a.download = 'react-webcam-recording.webm';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }, [recordedChunks]);

  return (
    <div className="camera-component">
      <Webcam
        audio
        ref={webcamRef}
        videoConstraints={videoConstraints}
        style={{
          filter: 'contrast(150%) brightness(100%)',
          width: '100%',
          height: '100%',
        }}
      />
      
    </div>
  );
};

export default CameraComponent;
