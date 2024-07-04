import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Tesseract from 'tesseract.js';
import profileimage from '../assets/images/profile_image.png';
import Footer from './Footer';

const Scan = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const navigate = useNavigate();

  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(err => {
          console.error("Error accessing the camera: ", err);
        });
    } else {
      console.error("getUserMedia is not supported in this browser.");
    }
  };

  const captureImage = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 320, 240);
    const dataURL = canvasRef.current.toDataURL('image/png');
    setCapturedImage(dataURL);
    stopCamera();
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
  };

  const handleSubmit = () => {
    if (!capturedImage) {
      console.error('No image captured');
      return;
    }

    Tesseract.recognize(capturedImage, 'eng', {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      console.log('OCR Result:', text);

      // Create a JSON object from the scanned text
      const scannedData = {
        paid_to: 'Sample Vendor', // This should be extracted from text
        amount: 100, // This should be extracted from text
        received_date: new Date().toISOString().split('T')[0],
        received_time: new Date().toISOString().split('T')[1].split('.')[0]
      };

      navigate('/profile', { state: { scannedData } });
    }).catch((err) => {
      console.error('Error processing receipt:', err);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
      <div className="flex justify-between items-center mb-4">
        <Link to="/profile" className="text-deepblue2">
          <Icon icon="mdi:arrow-left" width="28" className="my-auto" />
        </Link>
        <h1 className="text-2xl font-semibold">Leaderboard</h1>
        <img src={profileimage} alt="Profile" className="h-12 rounded-full" />
      </div>
      <div className="flex flex-col justify-between items-center py-6">
        <video ref={videoRef} width="320" height="320" autoPlay className="mb-4 border border-deeppurple"></video>
        <div className="flex justify-around items-center gap-x-2">
          <button onClick={startCamera} className="bg-blue-500 text-white px-4 py-2 rounded">Start Camera</button>
          <button onClick={captureImage} className="bg-green-500 text-white px-4 py-2 rounded">Capture</button>
          <canvas ref={canvasRef} width="320" height="240" style={{ display: 'none' }}></canvas>
          {capturedImage && <img src={capturedImage} alt="Captured" className="mt-4 border" />}
          <button onClick={handleSubmit} className="bg-purple-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Scan;
