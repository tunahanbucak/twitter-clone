import { Box, Paper, Typography } from "@mui/material";
import ButtonComponent from "./ButtonComponent";

export default function Premium() {
  return (
    <Paper
      sx={{
        backgroundColor: "var(--background-secondary)",
        marginBottom: "1rem",
        borderRadius: "1.25rem",
        border: "1px solid var(--background-secondary)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: 350,
        height: 165.6,
      }}
    >
      <Box
        sx={{
          padding: "12px 16px 12px 12px",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            lineHeight: "1.5",
            color: "var(--color-base)",
            mt: -1,
            fontFamily:
              '"TwitterChirp",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
          }}
        >
          Premium'a Abone Ol
        </Typography>
        <Typography
          sx={{
            lineHeight: "1.5rem",
            color: "var(--color-base)",
            fontWeight: "bold",
            fontSize: "0.94rem",
            mt: 0.5,
            mb: 0.7,
          }}
        >
          Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
          geliri payı kazan.
        </Typography>
        <Box
          sx={{
            alignSelf: "start",
          }}
        >
          <ButtonComponent size="small">Abone Ol</ButtonComponent>
        </Box>
      </Box>
    </Paper>
  );
}
