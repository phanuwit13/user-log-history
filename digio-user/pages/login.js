import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import service from '../services/services'
import Swal from "sweetalert2";
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: "1%",
        width: "48%"
    },
}));


export default function Login() {
    const classes = useStyles();
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const setData = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })


    }
    const LoginSubmit = (props) => {
        service.httpPost("login", form).then((value) => {
            // console.log(value)
            if (value.success) {
                localStorage.setItem('userLogin', JSON.stringify(value.data));
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "",
                    showConfirmButton: false,
                    text: value.message,
                    timer: 1500
                  }).then((resule) => {
                    // console.log("default")
                    service.toPath('/')
                })
            }
            else {
                service.showAlert("", value.message, "error")
            }
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    ลงชื่อเข้าใช้
                </Typography>
                <Typography component="h1" variant="h6">
                    ระบบตรวจสอบประวัติการเข้าสู่ระบบ
                </Typography>
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        name="username"
                        autoComplete="email"
                        autoFocus
                        onChange={setData}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={setData}
                    />

                    <Button
                        variant="contained"
                        style={{ 'backgroundColor': "#3f51b5", color: '#FFFFFF' }}
                        className={classes.submit}
                        onClick={LoginSubmit}
                    >
                        Sign In
          </Button>
                    <Button


                        variant="contained"
                        style={{ 'backgroundColor': "#28a745", color: '#FFFFFF' }}
                        className={classes.submit}
                        onClick={() => service.toPath('/register')}
                    >
                        Sign Up
          </Button>

                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}