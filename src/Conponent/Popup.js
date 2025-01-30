import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';

export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = props;

    return (
        <Dialog 
            open={openPopup} 
            sx={{ 
                '& .MuiPaper-root': { 
                    padding: 2, 
                    position: 'absolute', 
                    top: 2 
                } 
            }}
        >
            <DialogTitle sx={{ backgroundColor: '#8FE5FF', border: 2, paddingRight: '0px' }}>
                <Grid container sx={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'white' }}>
                        {title}
                    </Typography>
                    <Grid
                        color='secondary'
                        onClick={() => { setOpenPopup(false) }}
                        sx={{ cursor: 'pointer' }}
                    >
                        <CloseIcon />
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    );
}
