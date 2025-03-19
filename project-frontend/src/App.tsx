import Grid from '@mui/material/Grid2'
import './App.css'
import {Button, Container, TextField} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useState} from "react";
import { toast } from 'react-toastify';
import axiosApi from "./axiosApi.ts";
import Spinner from "./UI/Spinner/Spinner.tsx";

const App = () => {
    const [decodedMessage, setDecodedMessage] = useState('');
    const [encodedMessage, setEncodedMessage] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEncode = async () => {
        if (!password) {
            toast.error('Password is required!');
            return;
        }

        if (!decodedMessage) {
            toast.error('Field is required!');
            return;
        }

        try {
            setLoading(true);
            const response = await axiosApi.post('/encode', {
                message: decodedMessage,
                password: password
            });
            setEncodedMessage(response.data.encoded);
        } catch (e) {
          console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleDecode = async () => {
        if (!password) {
            toast.error('Password is required!');
            return;
        }

        if (!encodedMessage) {
            toast.error('Field is required!');
            return;
        }

        try {
            setLoading(true);
            const response = await axiosApi.post('/decode', {
                message: encodedMessage,
                password: password
            });
            setDecodedMessage(response.data.decoded);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };


    return (
        <Container>
            <main style={{width:'25%', alignItems: 'center'}}>
            <Grid spacing={2} direction="column">
                <Grid size={12}>
                    <TextField
                        label="Decoded Message"
                        value={decodedMessage}
                        onChange={(e) => setDecodedMessage(e.target.value)}
                        style={{width:'100%', margin: '10px auto'}}
                        multiline rows={3}
                    />
                </Grid>
                <Grid container direction="row" alignItems="center" spacing={1}>
                        <TextField
                            label="Password"
                            style={{ width: '50%' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button onClick={handleEncode} disabled={loading}>
                            {loading ? <Spinner /> : <ArrowDownwardIcon />}
                        </Button>
                        <Button onClick={handleDecode} disabled={loading}>
                            {loading ? <Spinner /> : <ArrowUpwardIcon />}
                        </Button>
                </Grid>
                <Grid size={12}>
                    <TextField
                        label="Encoded Message"
                        style={{width:'100%', margin: '10px auto'}}
                        onChange={(e) => setEncodedMessage(e.target.value)}
                        multiline rows={3}
                        value={encodedMessage}
                    />
                </Grid>
            </Grid>
            </main>
        </Container>
    )

};

export default App
