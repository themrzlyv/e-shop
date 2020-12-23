import dbConnect from '../../../utils/dbConnect'
import Card from '../../../modules/cardlist'


dbConnect();

export default async (req,res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const card = await Card.find({})

                res.status(200).json({success:true , data: card})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        case 'POST':
            try {
                const card = await Card.create(req.body)

                res.status(201).json({success: true , data: card})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
    
        default:
            res.status(400).json({success: false})
            break;
    }
}