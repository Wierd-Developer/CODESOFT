const errorHandler = (er, req, res, next) => {
    res.status(500).json({
        success: false,
        message: "Something went wrong",
        err
    })
}