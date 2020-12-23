import dbConnect from '../../../utils/dbConnect'
import Product from '../../../modules/product'


dbConnect();

export default async (req,res) => {

    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const product = await Product.findById(id);

                if(!product) {
                    res.status(400).json({success:false})
                }

                res.status(200).json({success: true , data: product})
            } catch (error) {
                res.status(400).json({success:false})
            }
            break;
            case 'PUT':
                try {
                    const product = await Product.findByIdAndUpdate(id , req.body , {
                        new: true,
                        runValidators: true
                    });
    
                    if(!product) {
                        res.status(400).json({success:false})
                    }
    
                    res.status(200).json({success: true , data: product})
                } catch (error) {
                    res.status(400).json({success:false})
                }
                break;

                case 'DELETE':
                    try {
                        const product = await Product.deleteOne({_id: id});
        
                        if(!product) {
                            res.status(400).json({success:false})
                        }
        
                        res.status(200).json({success: true , data: {} })
                    } catch (error) {
                        res.status(400).json({success:false})
                    }
                    break;
    
        default:
            res.status(400).json({success:false})
            break;
    }
}