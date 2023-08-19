import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./file.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { apiCall } from "../auth/apiCall";
import { uploadFileURL } from "../weather/urls";
const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files);
    const newSelectedFiles = [];
    // Check maximum number of files
    if (files.length + selectedFiles.length > 5) {
      alert("You can select a maximum of 5 files.");
      return;
    }
    for (let i = 0; i < files.length; i++) {
      if (files[i].size > 10 * 1024 * 1024) {
        alert("File size should be less than 10MB.");
        return;
      }
      console.log(files[i]);
      newSelectedFiles.push(files[i]);
    }
    // Check maximum number of files and maximum file size
    // ... (same as before)

    setSelectedFiles([...selectedFiles, ...newSelectedFiles]);
  };
  const handleRemoveFile = (index) => {
    const updatedFiles = selectedFiles.filter((file, i) => i !== index);
    setSelectedFiles(updatedFiles);
  };

  const handleSubmit = async () => {
    const data = await apiCall("FORMDATA", uploadFileURL, selectedFiles);
  };

  return (
    <div className="main">
      <div className="inputs">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Files to Upload</Form.Label>
          <Form.Control type="file" multiple onChange={handleFileChange} />
        </Form.Group>
        <Button
          disabled={selectedFiles.length === 0 ? true : false}
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </Button>
        {selectedFiles.length > 0 && (
          <div>
            <h4>Selected Files:</h4>
            <ul className="list-unstyled">
              {selectedFiles.map((file, index) => (
                <li
                  key={index}
                  className="mb-2 p-2 d-flex align-items-center border border-light"
                >
                  <span className="flex-grow-1">{file.name}</span>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-danger cursor-pointer hoverDelete"
                    onClick={() => handleRemoveFile(index)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
