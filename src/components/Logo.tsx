import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Box
      sx={{
        paddingY: 1,
        mt: -1.0,
      }}
    >
      <Link to="/">
        <Box
          sx={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "#5555",
            },
          }}
        >
          <svg viewBox="0 0 24 24" width={30} height={30}>
            <path
              fill="currentColor"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </Box>
      </Link>
    </Box>
  );
}
