
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import { Grid } from '@material-ui/core';

const ReactPdfPrint = () => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onafterprint: () => alert('Print Success')
    })


    return (


        <>
            <div style={{ width: '100%', height: window.innerHeight }}>


                <Grid container justifyContent="center" alignItems="flex-start" style={{ minHeight: '100vh' }}>
                    <Grid item xs={12}>
                        <div style={{ textAlign: 'center' }}>
                            <Button variant="contained" onClick={handlePrint}>Print Here</Button>
                        </div>



                        <div ref={componentRef} style={{ padding: "40px" }}>
                            <Grid container justifyContent="center">
                                <Grid item xs={12}>
                                    <Box
                                        height={50}
                                        my={4}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent={'right'}
                                        gap={5}
                                        p={2}
                                        px={5}
                                        sx={{ border: '2px solid black' }}
                                    >
                                        {/* Grid for Company Logo */}
                                        <Grid item xs={6}>
                                            <img src='/logo.png' alt="Company Logo" style={{ maxWidth: '100%', height: '60px', float: 'left' }} />
                                            <p>Srikara MAC LTD</p>
                                        </Grid>
                                        {/* Grid for Heading */}
                                        <Grid item xs={6} style={{ textAlign: 'center' }}>
                                            <h3> <b>Membership Application Form</b>
                                            </h3>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>


                            <Box
                                height={50}
                                my={4}
                                display="flex"
                                alignItems="center"
                                justifyContent={'right'}
                                gap={5}
                                p={2}
                                px={5}

                            >
                                <Grid container spacing={2}>

                                    <Grid item xs={9} md={8}>
                                        <div style={{  height: "180px", marginTop: "50px", padding: '10px' }}>
                                        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column' }}>
                                                <li style={{ display: 'flex'}}>
                                                    <strong>Membership No (Should Update After Generating In MIS) : </strong>
                                                    <span> </span>
                                                </li>
                                                <li style={{ display: 'flex' }}>
                                                    <strong>Date</strong>
                                                    <span>: 09-05-2024</span>
                                                </li>
                                                <li style={{ display: 'flex' }}>
                                                    <strong>Application No </strong>
                                                    <span>: 10002406</span>
                                                </li>
                                                <li style={{ display: 'flex'}}>
                                                    <strong>Applicant Name</strong>
                                                    <span>: Gangavarapu Srinadh</span>
                                                </li>
                                                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <strong>Father Name</strong>
                                                    <span>: Brahmaiah</span>
                                                </li>
                                                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <strong>Branch</strong>
                                                    <span>: VIJAYAWADA - 1000</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Grid>

                                    <Grid item xs={3} md={4}>

                                        <div style={{ border: '2px solid black', height: "150px", marginTop: "50px" }}>
                                            <p>xs=6 md=4</p>
                                        </div>

                                        <div style={{ border: '2px solid black', height: "50px", marginTop: "10px" }}>
                                            <p>xs=6 md=4</p>
                                        </div>

                                    </Grid>
                                </Grid>
                            </Box>






                        </div>




                    </Grid>
                </Grid>


            </div>
        </>
    )

}

export default ReactPdfPrint