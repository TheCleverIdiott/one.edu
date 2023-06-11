import "./css/QuoraHeader.css";
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { AssignmentIndOutlined, CloseRounded, ExpandMore, FeaturedPlayListOutlined, NotificationsOutlined, PeopleAltOutlined } from '@mui/icons-material';
import { Avatar, Input } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, IconButton } from "@mui/material";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function QuoraHeader() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputUrl, setInputUrl ] = useState("")
  const Close = (<CloseRounded />)

  return (
    <div className='qHeader'>
        <div className='qHeader-content'>
            <div className='qHeader__logo'>
                <img 
                    src="%PUBLIC_URL%/public/fabikon-r.png"
                    alt='logo'
                />
                </div>
                <div className='qHeader__icons'>
                    <div className='qHeader__icon'><HomeIcon /></div>
                    <div className='qHeader__icon'><FeaturedPlayListOutlined /></div>
                    <div className='qHeader__icon'><AssignmentIndOutlined /></div>
                    <div className='qHeader__icon'><PeopleAltOutlined /></div>
                    <div className='qHeader__icon'><NotificationsOutlined /></div>
                </div>
                <div className='qHeader__input'>
                <Box
                    display="flex"
                    background = "#1F2A40"
                    borderRadius="3px">
                    <InputBase style={{color:"#ffffff"}} sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton style={{color:"#ffffff"}} type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                    </IconButton>
                </Box>
                </div>
                <div className='qHeader__Rem'>
                    <Avatar />
                </div>
                <div className="ques-btn">
                    <button onClick={() => setIsModalOpen(true)} className="qbtn">Add Question</button>
                    <Modal open = {isModalOpen} closeIcon = {Close} onClose = {() => setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false} styles={{overlay:{height:"auto",}}}>
                        <div className="modal__title">
                            <h5>Add Question</h5>
                            <h5>Share Link</h5>
                        </div>
                        <div className="modal__info">
                            <Avatar className="avatar" />
                            <div className="modal__scope">
                                <PeopleAltOutlined />
                                <p>Public</p>
                                <ExpandMore />
                            </div>
                        </div>
                        <div className="modal__Field">
                            <Input type="text" placeholder = 'Start your question'/>
                            <div style={{
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <input type= 'text' value={inputUrl} onChange= {(e) => setInputUrl(e.target.value)} style={{margin: "5px 0", border: '1px solid gray', padding:"10px", outline:"2px solid #000"}} placeholder="Optional: Include a link for reference" />
                                {inputUrl !== "" &&  <img style={{height:"40vh",objectFit:"contain",}} src={inputUrl} alt='displayimage'/>}
                               
                            </div>
                        </div>
                        <div className="modal__button">
                            <button className="cancle" onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>
                            <button type="submit" className="add" onClick={() => setIsModalOpen(false)}>
                                Add Question
                            </button>
                        </div>
                    </Modal>
                </div>
        </div>
    </div>
  )
}

export default QuoraHeader;
