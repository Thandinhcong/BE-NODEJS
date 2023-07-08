import Size from "../modules/sizes"

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

export const addSize = async (req, res) => {
    try {
        // const { error } = schemaCategories.validate(req.body, { abortEarly: false });
        // if (error) {
        //     const errors = error.details.map((err) => err.message)
        //     return res.status(400).json({
        //         message: errors
        //     })
        // }
        const size = await Size.create(req.body);
        if (!size) {
            return res.status(400).json({
                message: "Không thể thêm size "
            })
        }
        return res.status(201).json({
            message: "Thêm thành công",
            size,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}
export const deleteSize = async (req, res) => {
    try {
        const size = await Size.findByIdAndDelete(req.params.id);
        if (!size) {
            return res.status(400).json({
                message: "Không có size nào"
            })
        }
        return res.status(200).json({
            message: "xóa thành công",
            size,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}

export const updateSize = async (req, res) => {
    try {
        // const { error } = schemaCategories.validate(req.body, { abortEarly: false });
        // if (error) {
        //     const errors = error.details.map((err) => err.message)
        //     return res.status(400).json({
        //         message: errors
        //     })
        // }
        const size = await Size.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!size) {
            return res.status(400).json({
                message: "Không có size nào"
            })
        }
        return res.status(200).json({
            message: "Cập nhật thành công ",
            size,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}