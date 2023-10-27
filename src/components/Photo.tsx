import { Box } from "@mui/material";
import React from "react";

interface PhotoProps {
  photos: string[];
}

const Photo: React.FC<PhotoProps> = ({ photos }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {photos.map((photo, index) => (
        <Box
          key={index}
          sx={{
            margin: "4px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              border: "1px solid var(--background-third)",
              borderRadius: "16px",
            }}
            src={photo}
            alt={`photo-${index}`}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Photo;
