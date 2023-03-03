import { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

type Props = {
  title: string;
  messageContent: string;
  confirmFn: (isOk: boolean) => void;
  open: boolean;
  buttonsName?: { agree: string, disagree: string };
}

export const UserDialog: React.FC<Props> = ({ messageContent, confirmFn, title, open, 
  buttonsName = { agree: 'agree', disagree: 'disagree' } }) => {

  const handleClose = (isOk:boolean) => {   
      confirmFn(isOk);     
  };


  return <Dialog
    open={open}
    onClose={()=> handleClose(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {messageContent}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>handleClose(true)} autoFocus>
        {buttonsName.agree}
      </Button>
      <Button onClick={()=> handleClose(false)}>{buttonsName.disagree}</Button>
    </DialogActions>
  </Dialog>
}