import React, { useContext, useEffect, useState } from 'react';
import { Container, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AssetContext from '../../context/assets/assetContext';
import AssetItem from './AssetItem';
import AssetForm from './AssetForm';

const Assets = () => {
    const { assets, loadAssets, deleteAsset } = useContext(AssetContext);
    const [open, setOpen] = useState(false);
    const [currentAsset, setCurrentAsset] = useState(null);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [assetToDelete, setAssetToDelete] = useState(null);

    useEffect(() => {
        loadAssets();
    }, []); // Empty dependency array ensures this effect runs only once

    const handleOpen = () => {
        setCurrentAsset(null);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = (asset) => {
        setCurrentAsset(asset);
        setOpen(true);
    };

    const handleDelete = (asset) => {
        setAssetToDelete(asset);
        setDeleteOpen(true);
    };

    const handleConfirmDelete = () => {
        deleteAsset(assetToDelete);
        setDeleteOpen(false);
    };

    const handleCancelDelete = () => {
        setDeleteOpen(false);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Assets
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Add Asset
            </Button>
            <AssetForm open={open} handleClose={handleClose} currentAsset={currentAsset} />
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Motor ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {assets.map((asset) => (
                            <AssetItem key={asset.motorID} asset={asset} onUpdate={handleUpdate} onDelete={handleDelete} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={deleteOpen} onClose={handleCancelDelete}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this asset?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Assets;
