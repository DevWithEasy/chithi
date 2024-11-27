import initDatabase from '@/database/initDB';
import User from '@/database/models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    initDatabase()
    try {
        const {username,password} = req.body
        
        const user = await User.findOne({username: username})
    
        if (!user) {
          return res.status(405).json({
            success: false,
            status: 405,
            message: 'Not Found any account.'
          })
        }
    
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    
        const isVerified = await bcrypt.compare(password, user.password)
    
        if (!isVerified) {
          return res.status(405).json({
            success: false,
            status: 405,
            message: 'Credentials wrong.'
          })
        }
        res.status(200).json({
          success: true,
          status: 200,
          message: 'Successfully signin.',
          token: token,
          data: user
        })
      } catch (err) {
        res.status(500).json({
          success: false,
          status: 500,
          message: err.message
        })
      }
}