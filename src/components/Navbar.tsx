import React from 'react';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from '../avatar.jpeg';

//调整css样式
const useStyles = makeStyles({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '30rem',
    },
});

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.menuSliderContainer} component="div">
                <Avatar src={avatar} alt="yy的头像" />
            </Box>
            <Box component="nav">
                <AppBar position="static" style={{ background: '#222' }}>
                    <Toolbar>
                        <IconButton>
                            <ArrowBack style={{ background: 'tomato' }} />
                        </IconButton>
                        <Typography variant="h5" style={{ background: 'ten' }}>
                            画画
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};
export default Navbar;
