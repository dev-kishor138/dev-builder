import DevBuildError from "../lib/DevBuildError.js"

const errorHandler = (err, req, res, next) => {
    if (err instanceof DevBuildError) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    res.status(500).json({ error: 'Internal Server Error' });
}
export default errorHandler