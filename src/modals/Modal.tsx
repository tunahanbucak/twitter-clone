import { Box } from "@mui/material";
import { useModal } from "../store/modal/hooks";
import modals from "./modals";
import { removeModal } from "../store/modal/action";

export default function Modal() {
  const modal = useModal();
  const currentModal = modals.find((modal) => modal.name === modal.name);
  return (
    <Box
      sx={{
        background: "var(--background-modal)",
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20,
      }}
    >
      <Box
        sx={{
          background: "var(--background-primary)",
          maxWidth: "600px",
          maxHeight: "90vh",
          overflow: "auto",
          borderRadius: "16px",
        }}
      >
        {currentModal && <currentModal.element close={removeModal} />}
      </Box>
    </Box>
  );
}
