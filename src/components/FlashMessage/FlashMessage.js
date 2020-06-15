import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import { Collapse, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const FlashMessage = (props) => {
    
    const [open, setOpen]   = useState(true);
    const [severity]        = useState(props.severity);
    const [message]         = useState(props.message);
    //const [title]           = useState(props.title); , AlertTitle

        
    return (
        <Collapse in={open}>
            <Alert
                severity={severity}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                {message}
            </Alert>
        </Collapse>
    )

}

export default FlashMessage;