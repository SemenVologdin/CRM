import React from 'react'
import {Box, CardContent, Typography, CardActions, Button, TextField} from "@mui/material";

import style from './style.module.css'

export default () => {
    let [login, setLogin] = React.useState('')
    let [password, setPassword] = React.useState('')

    let [changes, setChanges] = React.useState({
        login: false,
        password: false
    })

    const isValidFields = (): boolean =>{
        setChanges({
            login: true,
            password: true
        })

        if( !login || !password ) return false;
        return true;
    }

    const loginUser = () => {
        if( isValidFields() ){
            console.log('success')
        }else{
            console.log('no')
        }
    }

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
                        Login
                    </Typography>
                    <Box >
                        <TextField
                            onBlur={()=>{setChanges({...changes, login: true})}}
                            error={login?.length < 1 && changes.login}
                            value={login}
                            onInput={(event)=>{setLogin((event.target as HTMLInputElement).value)}}
                            className={style.input}
                            size="small"
                            label="Login"
                            variant="outlined"
                            helperText={login?.length < 1 && changes.login ? "Field cannot be empty!" : null}
                        />
                    </Box>
                    <Box>
                        <TextField
                            onBlur={()=>{setChanges({...changes, password: true})}}
                            error={password?.length < 1 && changes.password}
                            value={password}
                            onInput={(event)=>{setPassword((event.target as HTMLInputElement).value)}}
                            className={style.input}
                            size="small"
                            label="Password"
                            variant="outlined"
                            helperText={password?.length < 1 && changes.password ? "Field cannot be empty!" : null}
                        />
                    </Box>

                    <Typography variant="subtitle2" display="block" gutterBottom>
                        You don't have a account? <a href="/registration">Create!</a>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={()=>loginUser()}
                        size="medium"
                        variant="contained"
                        disableElevation
                    >Log In</Button>
                </CardActions>
            </Box>
        </>
    )
}