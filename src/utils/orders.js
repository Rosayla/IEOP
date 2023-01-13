import axios from "axios";

export async function createOrder(req, res) {
    console.log(req.headers.authorization)
    console.log(req.body)

    const orderRequest = await axios.post(
        'https://my.jasminsoftware.com/api/293526/293526-0001/purchases/orders/',
        {
            "sellerSupplierParty": "0001",
            "documentType": "ECF",
            "documentDate": '2023-11-31',
            "documentLines": [
                {
                    "purchasesItem": "ARECA",
                    "unitPrice": {
                        "amount": 45
                    }
                }
            ],
            "buyerCustomerParty":"JAMARAL"
         },
        {
           headers: {
            'Content-type': 'application/json',
            Authorization: req.headers.authorization
           } 
        }
    )


    console.log(orderRequest.data)

    res.end()
}