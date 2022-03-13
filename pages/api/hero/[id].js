import dbConnect from '../../../db/dbconnect'
import Hero from '../../../models/Hero'

dbConnect()

// get a unique record, edit, delete

export default async (req, res) => {
    const {
        method, 
        query : {id}
    } = req

    switch(method) {
        case 'GET':
            try {
                const hero = await Hero.findById(id)
                if(!hero) {
                    res.status(400).json({success: false, message: 'No Hero Found'})
                }
                res.status(200).json({success: true, hero : hero })
            } catch (error) {
                res.status(400).json({success: false, error: error.message})
            }
            break;
        case 'PUT':
            try {
                const hero = await Hero.findByIdAndUpdate(id, req.body, {
                    new : true,
                    runValidators : true,
                })
                if(!hero) {
                    res.status(400).json({success: false, message: 'No Hero Found To Update'})
                }
                res.status(200).json({success: true, hero : hero })
            } catch (error) {
                res.status(400).json({success: false, error: error.message})
            }
            break;
        case 'DELETE':
            try {
                const hero = await Hero.deleteOne({_id : id})
                if(!hero) {
                    res.status(400).json({success: false, message: 'No Hero Found To Delete'})
                }
                res.status(200).json({success: true, hero : hero, message : "Hero Deleted Successfully" })
            } catch (error) {
                res.status(400).json({success: false, error: error.message})
            }
            break;
        default :
            res.status(400).json({success: false})
            break;
    }
}