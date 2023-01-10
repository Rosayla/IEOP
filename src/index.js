import express from 'express'
import axios from 'axios'

import { createOrder } from './utils/orders.js';
import { getAllPurchaseItems } from './utils/purchaseItems.js';

const app = express();


app.use(express.json())

app.use(async(req, res, next) => {
    const token_request = await axios.post(
        'https://identity.primaverabss.com/connect/token',
        {
            'grant_type': 'client_credentials',
            'scope': 'application'
        },
        {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: 'IPVCIEOP',
                password: '987fb5ac-e8bd-48da-afac-2841afc46327'
            }
        }
    )

    req.headers.authorization = `Bearer ${token_request.data.access_token}`
    next()
})

app.post("/create-order", createOrder)


app.get("/purchase-items", getAllPurchaseItems)




app.listen("3000", () => console.log("http://localhost:3000"))