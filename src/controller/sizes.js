import Size from "../modules/size"

export const ListAllSizes = async (req, res) => {
    try {
        const sizes = await Size.find().populate("products");
        if (!sizes) {
            return res.status(400).json({
                message: "Không tìm thấy size nào!"
            })
        }
        return res.status(200).json({
            message: "List size",
            sizes: sizes,
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
export const ListOneSize = async (req, res) => {
    try {
        const sizes = await Size.findOne({ _id: req.params.id }).populate("products");
        if (!sizes) {
            return res.status(400).json({
                message: "Không tìm thấy size nào!"
            })
        }
        return res.status(200).json({
            message: "List size",
            sizes: sizes,
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}