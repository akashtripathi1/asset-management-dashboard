import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';

const AssetItem = ({ asset, onUpdate, onDelete }) => {
    const {
        motorID,
        name,
        description,
        location,
        manufacturer,
        modelNumber,
        serialNumber,
        installationDate,
        lastMaintenanceDate,
        status,
        specifications: { power, voltage, current, speed },
    } = asset;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Motor ID: {motorID}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Description: {description}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Location: {location}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Manufacturer: {manufacturer}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Model Number: {modelNumber}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Serial Number: {serialNumber}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Installation Date: {installationDate ? new Date(installationDate).toISOString().split('T')[0] : ''}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Last Maintenance Date: {lastMaintenanceDate ? new Date(lastMaintenanceDate).toISOString().split('T')[0] : ''}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Status: {status}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Specifications:
                    </Typography>
                    <ul>
                        <li>Power: {power} W</li>
                        <li>Voltage: {voltage} V</li>
                        <li>Current: {current} A</li>
                        <li>Speed: {speed} rpm</li>
                    </ul>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => onUpdate(asset)}>
                        Update
                    </Button>
                    <Button size="small" color="secondary" onClick={() => onDelete(asset)}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default AssetItem;
