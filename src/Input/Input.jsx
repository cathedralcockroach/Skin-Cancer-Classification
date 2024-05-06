import React, { useState } from "react";
import "./input.css";
// import "./script"
import Result from "../Result/Result";
import takeinput from "../assets/takeinput.png";
import loadingImage from "../assets/loading.gif";

const Input = () => {
  const handleImageClick = () => {
    const fileInput = document.getElementById('upload-image');
    fileInput.click();
  };

  const [previewImage, setPreviewImage] = useState(takeinput);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Converts file to base64
      reader.onload = (e) => {
        const base64EncodedImage = e.target.result;
        setPreviewImage(base64EncodedImage); // Update the preview image
        setSelectedFile(base64EncodedImage); // Store the selected image
      };
    }
  };

  // Function to handle the upload
  const handleUpload = () => {
    if (selectedFile) {
      setPreviewImage(loadingImage); // Display loading image during upload
      // Simulate async upload process (e.g., sending to a server)
      setTimeout(() => {
        console.log(selectedFile);
        setPreviewImage(selectedFile); // After upload, set the preview image to the selected file
        // Perform other tasks like updating the results, etc.
      }, 1000);
    } else {
      alert("Please select an image to upload.");
    }
  };

  return (
    <div className="input">
      <div className="left">
        <img
          src={previewImage}
          alt=""
          className="take-input"
          id="upload-preview"
          onClick={handleImageClick}
        />
        <div className="upload-options">
          <input
            type="file"
            name="upload-image"
            id="upload-image"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>
        <button className="btn upload-btn" id="upload-btn" onClick={handleUpload}>Upload</button>
      </div>
      <div className="right">
        <Result />
      </div>
    </div>
  );
};

export default Input;
