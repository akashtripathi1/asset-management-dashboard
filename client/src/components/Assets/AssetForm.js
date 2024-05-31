import React, { useState, useEffect, useContext } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid, Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';
import AssetContext from '../../context/assets/assetContext';

const AssetForm = ({ open, handleClose, currentAsset }) => {
    const { createAsset, updateAsset } = useContext(AssetContext);
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

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (currentAsset) {
            const installationDate = new Date(currentAsset.installationDate);
            const lastMaintenanceDate = new Date(currentAsset.lastMaintenanceDate);
            const installationDateString = installationDate.toISOString().split('T')[0];
            const lastMaintenanceDateString = lastMaintenanceDate.toISOString().split('T')[0];
            setAsset({
                ...currentAsset,
                installationDate: installationDateString,
                lastMaintenanceDate: lastMaintenanceDateString
            });
        } else {
            setAsset({
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
        }
    }, [currentAsset]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
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

    const validateForm = () => {
        const newErrors = {};
        if (!asset.motorID) newErrors.motorID = 'Motor ID is required';
        if (!asset.name) newErrors.name = 'Name is required';
        if (!asset.description) newErrors.description = 'Description is required';
        if (!asset.location) newErrors.location = 'Location is required';
        if (!asset.manufacturer) newErrors.manufacturer = 'Manufacturer is required';
        if (!asset.modelNumber) newErrors.modelNumber = 'Model Number is required';
        if (!asset.serialNumber) newErrors.serialNumber = 'Serial Number is required';
        if (!asset.installationDate) newErrors.installationDate = 'Installation Date is required';
        if (!asset.lastMaintenanceDate) newErrors.lastMaintenanceDate = 'Last Maintenance Date is required';
        if (!asset.status) newErrors.status = 'Status is required';
        if (!asset.specifications.power) newErrors.power = 'Power is required';
        if (!asset.specifications.voltage) newErrors.voltage = 'Voltage is required';
        if (!asset.specifications.current) newErrors.current = 'Current is required';
        if (!asset.specifications.speed) newErrors.speed = 'Speed is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (currentAsset) {
            updateAsset(asset);
        } else {
            createAsset(asset);
        }

        handleClose();
    };

    const handleCloseModal = () => {
        setErrors({});
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleCloseModal}>
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
                    {currentAsset ? 'Update Asset' : 'Add New Asset'}
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
                                disabled={currentAsset ? true : false}
                                error={!!errors.motorID}
                                helperText={errors.motorID}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                name="name"
                                value={asset.name}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                name="description"
                                value={asset.description}
                                onChange={handleChange}
                                fullWidth
                                multiline
                                rows={4}
                                error={!!errors.description}
                                helperText={errors.description}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Location"
                                name="location"
                                value={asset.location}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.location}
                                helperText={errors.location}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Manufacturer"
                                name="manufacturer"
                                value={asset.manufacturer}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.manufacturer}
                                helperText={errors.manufacturer}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Model Number"
                                name="modelNumber"
                                value={asset.modelNumber}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.modelNumber}
                                helperText={errors.modelNumber}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Serial Number"
                                name="serialNumber"
                                value={asset.serialNumber}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.serialNumber}
                                helperText={errors.serialNumber}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Installation Date"
                                name="installationDate"
                                type="date"
                                value={asset.installationDate}
                                onChange={handleChange}
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                error={!!errors.installationDate}
                                helperText={errors.installationDate}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Last Maintenance Date"
                                name="lastMaintenanceDate"
                                type="date"
                                value={asset.lastMaintenanceDate}
                                onChange={handleChange}
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                error={!!errors.lastMaintenanceDate}
                                helperText={errors.lastMaintenanceDate}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth error={!!errors.status}>
                                <InputLabel>Status</InputLabel>
                                <Select
                                    label="Status"
                                    name="status"
                                    value={asset.status}
                                    onChange={handleChange}
                                    fullWidth
                                >
                                    <MenuItem value="Operational">Operational</MenuItem>
                                    <MenuItem value="Under Maintenance">Under Maintenance</MenuItem>
                                    <MenuItem value="Out of Service">Out of Service</MenuItem>
                                </Select>
                                <FormHelperText>{errors.status}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" gutterBottom>
                                Specifications
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Power (in W)"
                                name="power"
                                value={asset.specifications.power}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.power}
                                helperText={errors.power}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Voltage (in V)"
                                name="voltage"
                                value={asset.specifications.voltage}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.voltage}
                                helperText={errors.voltage}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Current (in A)"
                                name="current"
                                value={asset.specifications.current}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.current}
                                helperText={errors.current}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Speed (in RPM)"
                                name="speed"
                                value={asset.specifications.speed}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.speed}
                                helperText={errors.speed}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                {currentAsset ? 'Update Asset' : 'Add Asset'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    );
};

export default AssetForm;
