import React from 'react'
import {Box, CardContent, Typography, CardActions, Button, TextField} from "@mui/material";

import style from './style.module.css'

export default () => {
    return (
        <>
            <Box
                component="form"
                className={style.card}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
            >
                <CardContent className={style.cardContent}>
                    <Typography variant="h4" gutterBottom>
                        Registration
                    </Typography>
                    <Box>
                        <TextField
                            className={style.input}
                            size="small"
                            label="Email"
                            variant="outlined"
                        />
                    </Box>
                    <Box>
                        <TextField
                            className={style.input}
                            size="small"
                            label="Password"
                            variant="outlined"
                        />
                    </Box>

                    <Box>
                        <TextField
                            className={style.input}
                            size="small"
                            label="Password again"
                            variant="outlined"
                        />
                    </Box>

                    <Typography variant="subtitle2" display="block" gutterBottom>
                        You have a account? <a href="/login">Login!</a>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="medium"
                        variant="contained"
                        disableElevation
                    >Registration</Button>
                </CardActions>
            </Box>
        </>
    )
}