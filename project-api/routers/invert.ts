import express from "express";
import {Ciphered, Deciphered} from "../types";
const invertRouter = express.Router();
const Vigenere = require('caesar-salad').Vigenere;

invertRouter.post('/encode', (req, res) => {
    const messageCiphered = Vigenere.Cipher(req.body.password).crypt(req.body.message);
    const cipheredResponse: Ciphered = {
        encoded: messageCiphered
    };
    res.json(cipheredResponse);
});
invertRouter.post('/decode', (req, res) => {
    const messageDeciphered = Vigenere.Decipher(req.body.password).crypt(req.body.message)
    const decipheredResponse: Deciphered = {
        decoded: messageDeciphered
    }
    res.json(decipheredResponse);
});
invertRouter.get('*', (req, res) => {
    res.status(404).send('Not Found');
})


export default invertRouter;
