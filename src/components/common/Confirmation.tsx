import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";

type Props = {
    title: string;
    content: string;
    confirmFn: (isOk: boolean) => void;
    open: boolean;
}
export const Confirmation: React.FC<Props> = ({title, content, confirmFn, open}) => {
      
    const handleClose = (isOk: boolean) => {
      confirmFn(isOk);
    };
  
    return <Box>
        <Dialog
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
             {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=> handleClose(false)}>Cancel</Button>
            <Button onClick={() => handleClose(true)} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
  }