import { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

type Props = {
  messageContent: string;
  flDisAction: () => void;
  flAction?: () => void;
  buttonsName?: { agree: string, disagree: string };
}

export const UserDialog: React.FC<Props> = ({ messageContent, flDisAction, flAction, buttonsName = { agree: 'agree', disagree: 'disagree' } }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    flDisAction();
  };
  const handelContinue = () => {
    setOpen(false);
    if (flAction) {
      flAction();
    }
  }

  return <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {messageContent}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handelContinue} autoFocus>
        {buttonsName.agree}
      </Button>
      <Button onClick={handleClose}>{buttonsName.disagree}</Button>
    </DialogActions>
  </Dialog>
}