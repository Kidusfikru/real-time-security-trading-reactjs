import { Box, Button, Modal, Typography } from "@mui/material";

const ConfirmationModal = ({
  open,
  onClose,
  onConfirm,
  onDecline,
  price,
  share,
  security,
  selected,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: 8,
          p: 4,
          minWidth: 300,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" id="modal-title" sx={{ mb: 2 }}>
          Confirmation
        </Typography>
        <Typography id="modal-description" sx={{ mb: 2 }}>
          <strong>Security:</strong> {security} <br />
          <strong>Shares:</strong> {share} <br />
          <strong>Price:</strong> ${price} <br />
          <strong>Trade Type:</strong> {selected}
        </Typography>
        <Button
          variant="contained"
          sx={{ mr: 2, backgroundColor: "#4caf50", color: "white" }}
          onClick={onConfirm}
        >
          Confirm
        </Button>
        <Button variant="contained" color="error" onClick={onDecline}>
          Decline
        </Button>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
