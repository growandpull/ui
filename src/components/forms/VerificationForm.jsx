import { Typography } from "@mui/material";
import StyledForm from "../styled/StyledForm";
import { QRCodeCanvas } from "qrcode.react";

const VerificationForm = () => {
  return (
    <StyledForm component="div" title="Verify Your Person.">
      <Typography variant="subtitile2" sx={{ width: "fit-content" }}>
        Scan the QR code to confirm your identity using the Diia application{" "}
      </Typography>

      <QRCodeCanvas
        value="https://www.showwcase.com/shivam-katare"
        size={214}
        style={{ alignSelf: "center" }}
      />
    </StyledForm>
  );
};

export default VerificationForm;
