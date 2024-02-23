import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useRef, useState } from "react";


function DragDropFileUpload() {
  const [files, setFiles] = useState([]);
  const fileInput = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = [];
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      newFiles.push(e.dataTransfer.files[i]);
    }
    setFiles([...files, ...newFiles]);
  };

  const handleFileInput = (e) => {
    const newFiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      newFiles.push(e.target.files[i]);
    }
    setFiles([...files, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{
            padding: theme => theme.spacing(2),
            textAlign: "center",
            color: theme => theme.palette.text.secondary,
          }}>
            <Box
              sx={{
                height: 200,
                backgroundColor: "#f5f5f5",
                border: "2px dashed #ddd",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={handleClick}
            >
              <Typography>Drop files here <br/>or<br/> click to select files</Typography>
            </Box>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileInput}
              ref={fileInput}
              multiple
            />
            {files.map((file, index) => (
              <div key={index}>
                <Typography>{file.name}</Typography>
                <Button variant="text" color="error" onClick={() => handleRemoveFile(index)}>Remove</Button>
              </div>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default DragDropFileUpload;
