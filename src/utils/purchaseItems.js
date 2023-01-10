import axios from "axios";

export async function getAllPurchaseItems(req, res){
    let purchaseItems = []
    const purchaseItemsrequest = await axios.get(
        'https://my.jasminsoftware.com/api/293526/293526-0001/purchasesCore/purchasesItems',
        {
            headers: {
                Authorization: req.headers.authorization
            }
        }
    )

    purchaseItemsrequest.data.forEach(purchaseItem => {
        purchaseItems.push(
            {
                itemKey: purchaseItem.itemKey,
                description: purchaseItem.description,
                complementaryDescription: purchaseItem.complementaryDescription 
            }
        )
    });

    res.json(purchaseItems)
}