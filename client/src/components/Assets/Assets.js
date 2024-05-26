import React, { useState, useContext, useEffect } from 'react';
import { Grid, Container, Typography, Button } from '@mui/material';
import AssetContext from '../../context/assets/assetContext';
import AssetItem from './AssetItem';
import AssetForm from './AssetForm';

const Assets = () => {
    const { assets, loadAssets } = useContext(AssetContext);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        loadAssets();
    }, []); // Empty dependency array ensures this effect runs only once

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Assets
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Add Asset
            </Button>
            <AssetForm open={open} handleClose={handleClose} />
            <Grid container spacing={3}>
                {assets.map(asset => (
                    <AssetItem key={asset.motorID} asset={asset} />
                ))}
            </Grid>
        </Container>
    );
};

export default Assets;
