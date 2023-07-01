import Categories from "../modules/categories";
import { schemaCategories } from "../schema/categories";

export const listAllCate = async (req, res) => {
    try {
        const categories = await Categories.find();
        if (!categories) {
            return res.status(400).json({
                message: "Không có danh mục nào"
            })
        }
        return res.status(200).json({
            message: "Danh mục",
            categories,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}

export const listOneCate = async (req, res) => {
    try {
        const categories = await Categories.findById(req.params.id)
        if (!categories) {
            return res.status(400).json({
                message: "Không có danh mục nào"
            })
        }
        return res.status(200).json({
            message: "Danh mục",
            categories,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}
export const addCate = async (req, res) => {
    try {
        const { error } = schemaCategories.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message)
            return res.status(400).json({
                message: errors
            })
        }
        const categories = await Categories.create(req.body);
        if (!categories) {
            return res.status(400).json({
                message: "Không thể thêm sản phẩm "
            })
        }
        return res.status(201).json({
            message: "Thêm thành công",
            categories,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}
export const deleteCate = async (req, res) => {
    try {
        const categories = await Categories.findByIdAndDelete(req.params.id);
        if (!categories) {
            return res.status(400).json({
                message: "Không có danh mục nào"
            })
        }
        return res.status(200).json({
            message: "xóa thành công",
            categories,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}

export const updateCate = async (req, res) => {
    try {
        const { error } = schemaCategories.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message)
            return res.status(400).json({
                message: errors
            })
        }
        const categories = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!categories) {
            return res.status(400).json({
                message: "Không có danh mục nào"
            })
        }
        return res.status(200).json({
            message: "Cập nhật thành công ",
            categories,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}
























