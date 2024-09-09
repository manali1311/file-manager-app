// components/FormEditor.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Box, IconButton } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SaveIcon from "@mui/icons-material/Save";
import { readExcelFile, writeExcelFile } from "../../utils/ExcelUtils";
import { setFormData, updateFormField } from "../../redux/form/FormSlice";

const FormEditor = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.data);

  // to handle file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const data = await readExcelFile(file);
      dispatch(setFormData(data));
    }
  };

  // dispatching action on field change
  const handleFieldChange = (index, field, value) => {
    dispatch(updateFormField({ index, field, value }));
  };

  const handleSave = () => {
    writeExcelFile(formData, "updated_file.xlsx");
  };

  return (
    <Box>
      <IconButton component="label">
        <UploadFileIcon />
        <input
          accept=".xls,.xlsx"
          type="file"
          hidden
          onChange={handleFileUpload}
        />
      </IconButton>

      {formData.map((row, index) => (
        <Box key={index} sx={{ display: "flex", gap: 2, mb: 2 }}>
          {Object.keys(row).map((field) => (
            <TextField
              key={field}
              value={row[field]}
              onChange={(e) => handleFieldChange(index, field, e.target.value)}
              fullWidth
            />
          ))}
        </Box>
      ))}

      <Button
        variant="contained"
        startIcon={<SaveIcon />}
        onClick={handleSave}
        disabled={!formData.length}
      >
        Save to Excel
      </Button>
    </Box>
  );
};

export default FormEditor;
