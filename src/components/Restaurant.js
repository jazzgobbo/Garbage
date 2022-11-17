
import React, { useState } from 'react';
import '../styles/Restaurant.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const openLink = (url) => {
    window.open(url)
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

const Restaurant = ({ restaurant }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='container-fluid' data-testid='restaurant'>
            <div className="card" data-testid={`restaurant-${restaurant.TITLE.substring(restaurant.TITLE.indexOf(":") + 1)}`}>
                <div className="card-title"> {restaurant.TITLE.substring(restaurant.TITLE.indexOf(":") + 1)}
                    <button className='apply-button'
                        onClick={handleOpen}>
                        <b>More Info</b>
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        data-testid="mui-modal"
                    >
                        <Box sx={style}>
                            {/* {Object.entries(restaurant).map(([key, value]) => {
                                return (
                                    <div>
                                        {key}:{value}
                                    </div>)})} */}
                            <h2>{restaurant.TITLE.substring(restaurant.TITLE.indexOf(":") + 1)}</h2>
                            <div><b>restaurant DESCRIPTION:</b> {restaurant["RESTAURANT DESCRIPTION"]}</div>
                            <div><b>QUALIFICATIONS:</b> {restaurant["QUALIFICATIONS"]}</div>
                            <div><b>TERM AVAILABLE:</b> {restaurant["TERM AVAILABLE"]}</div>
                            <div><b>LOCATION:</b> {restaurant["LOCATION"]}</div>
                            <div><b>WORK ARRANGEMENTS:</b> {restaurant["WORK ARRANGEMENTS"]}</div>
                            <div><b>DEPARTMENT:</b> {restaurant["DEPARTMENT"]}</div>
                            <div><b>PAY RATE:</b> {restaurant["PAY RATE"][0]}</div>
                            <div><b>CONTACT NAME:</b> {restaurant["CONTACT NAME"]}</div>
                            <div><b>CONTACT PHONE NUMBER:</b> {restaurant["CONTACT PHONE NUMBER"]}</div>
                            <div><b>CONTACT EMAIL:</b> {restaurant["CONTACT EMAIL"]}</div>
                        </Box>
                    </Modal>

                </div>
                <div className="card-category">
                    {restaurant.DEPARTMENT}
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className='card-text col-sm'> ${restaurant["PAY RATE"][0]}/hr </div>
                        <div className='card-text col-sm'> {restaurant["WORK ARRANGEMENTS"]} </div>
                        <div className='card-text col-sm'> {restaurant.LOCATION} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant