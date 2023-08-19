import React, { useEffect, useState } from "react";
import { apiCall } from "../auth/apiCall";
import { downloadFileURL, getFilesNames } from "../weather/urls";
import { Container, ListGroup } from "react-bootstrap";
import "./file.css";

const Download = () => {
  const [files, setFiles] = useState([]);
  const getFiles = async () => {
    const data = await apiCall("GET", getFilesNames);
    if (data.status === "ok") {
      setFiles(data.files);
    }
  };
  useEffect(() => {
    getFiles();
  }, []);
  const handleClick = async (fileName) => {
    console.log(fileName);
    let dowloadUrl = downloadFileURL + "/" + fileName;
    try {
      const response = await fetch(dowloadUrl, {
        responseType: "blob",
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  return (
    <div>
      <Container className="vh-100 d-flex flex-column justify-content-start align-items-center">
        <div>
          <h1>File List</h1>
          <ListGroup>
            {files.map((file, index) => (
              <ListGroup.Item
                onClick={() => handleClick(file)}
                className="list-item text-left"
                key={index}
              >
                {file}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Container>
    </div>
  );
};

export default Download;
