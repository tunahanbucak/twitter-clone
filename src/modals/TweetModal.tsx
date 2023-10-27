import { Box } from "@mui/material";

interface ModalProps {
  close: () => void;
}

export default function TweetModal({ close }: ModalProps) {
  return (
    <Box
      sx={{
        background: "red",
      }}
    >
      TweetModal
      <Box></Box>
    </Box>
  );
}
