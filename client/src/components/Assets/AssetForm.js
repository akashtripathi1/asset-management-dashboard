import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid } from '@mui/material';
import { useContext } from 'react';
import AssetContext from '../../context/assets/assetContext';

const AssetForm = ({ open, handleClose }) => {
    const { createAsset } = useContext(AssetContext);
    const [asset, setAsset] = useState({
        motorID: '',
        name: '',
        description: '',
        location: '',
        manufacturer: '',
        modelNumber: '',
        serialNumber: '',
        installationDate: '',
        lastMaintenanceDate: '',
        status: '',
        specifications: {
            power: '',
            voltage: '',
            current: '',
            speed: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in asset.specifications) {
            setAsset({
                ...asset,
                specifications: {
                    ...asset.specifications,
                    [name]: value
                }
            });
        } else {
            setAsset({
                ...asset,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createAsset(asset);
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: '90%', 
                maxWidth: 600, 
                height: '90%', 
                bgcolor: 'background.paper', 
                p: 4, 
                boxShadow: 24, 
                borderRadius: 2, 
                overflowY: 'auto' 
            }}>
                <Typography variant="h6" component="h2" gutterBottom>
                    Add New Asset
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Motor ID"
                                name="motorID"
                                value={asset.motorID}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                name="name"
                                value={asset.name}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                name="description"
                                value={asset.description}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Location"
                                name="location"
                                value={asset.location}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Manufacturer"
                                name="manufacturer"
                                value={asset.manufacturer}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Model Number"
                                name="modelNumber"
                                value={asset.modelNumber}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Serial Number"
                                name="serialNumber"
                                value={asset.serialNumber}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Installation Date"
                                name="installationDate"
                                value={asset.installationDate}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Last Maintenance Date"
                                name="lastMaintenanceDate"
                                value={asset.lastMaintenanceDate}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Status"
                                name="status"
                                value={asset.status}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" gutterBottom>
                                Specifications
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Power"
                                name="power"
                                value={asset.specifications.power}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Voltage"
                                name="voltage"
                                value={asset.specifications.voltage}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Current"
                                name="current"
                                value={asset.specifications.current}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Speed"
                                name="speed"
                                value={asset.specifications.speed}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Add Asset
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    );
};

export default AssetForm;
