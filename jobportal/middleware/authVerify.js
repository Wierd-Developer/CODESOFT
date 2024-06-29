import JWT from 'jsonwebtoken'

const authVerify = async (req, res, next) => {
    try {

        const decode = req.headers.authorization;
        if (!decode || !decode.startsWith("Bearer")) {
            next("auth failed 1")
        }
        const token = decode.split(" ")[1]
        try {
            const payload = JWT.verify(token, process.env.JWT_SECRET)
            req.user = { userId: payload.userId }
            next()

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })

        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
export default authVerify