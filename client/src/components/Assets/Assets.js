import React, { useContext, useEffect } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import AssetContext from '../../context/assets/assetContext';
import AssetItem from './AssetItem';

const Assets = () => {
    const { assets, loadAssets } = useContext(AssetContext);

    useEffect(() => {
        loadAssets();
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Assets
            </Typography>
            <Grid container spacing={3}>
                {assets.map(asset => (
                    <AssetItem key={asset.motorID} asset={asset} />
                ))}
            </Grid>
        </Container>
    );
};

export default Assets;
