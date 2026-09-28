const adminService = require("../services/adminService");

const loginAdmin = async (req,res) => {
    try{
        const{email,password} = req.body

        if(!email || !password){
            return res.status(400).json({
                message:"Email and password are required"
            });
        }
        const result = await adminService.loginAdmin(
            email,
            password
        )

        if(!result){
            return res.status(401).json({
                message:"Invalid admin credentials"
            })
        }

        return res.status(200).json({
            message:"admin login successfull",
            data:{
                admin:{
                    id: result.admin._id,
                    name: result.admin.name,
                    email: result.admin.email
                },
                token:result.token
            }
        });
    }catch(error){
        console.error("admin login error:",error)

        return res.status(500).json({
            message:"Internal server error "
        })
    }
}
module.exports = {
    loginAdmin
}