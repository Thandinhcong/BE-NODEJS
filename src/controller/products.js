import Products from "../modules/products";
import Categories from "../modules/categories";
import { schemaProduct } from "../schema/products";
import Sizes from "../modules/size";
export const ListAllProduct = async (req, res) => {
    try {
        const products = await Products.find().populate('sizes');
        if (!products) {
            return res.status(400).json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.status(200).json({
            message: "Danh sách sản phẩm",
            products,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}
export const ListOneProduct = async (req, res) => {
    try {
        const products = await Products.findById(req.params.id).populate({
            path: "sizes",
            populate: {
                path: "productId",
                model: "Product"
            }
        })
        if (!products) {
            return res.status(400).json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.status(200).json({
            message: "Sản phẩm",
            products,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}
export const Addproduct = async (req, res) => {
    try {
        const { error } = schemaProduct.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map(err => err.message);
            res.status(400).json({
                message: errors,
            })
        }
        const products = await Products.create(req.body);
        const sizeIds = req.body.sizeIds;

        // Liên kết các size với sản phẩm
        await Sizes.updateMany(
            { _id: { $in: sizeIds } },
            { $addToSet: { products: products._id } }
        );
        await Categories.findByIdAndUpdate(products.categoryId, {
            $addToSet: {
                products: products._id,
            },
        });
        if (!products) {
            return res.status(400).json({
                message: "Không thể tạo sản phẩm"
            })
        } else {

            return res.status(201).json({
                message: "Thêm sản phẩm thành công",
                data: products,
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi xảy ra khi tạo sản phẩm",
            error: error.message,
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Products.findByIdAndRemove(req.params.id);
        if (!product) {
            return res.status(400).json({
                message: "Không có sản phẩm nào"
            })
        }

        //cập nhật danh mục khi xóa sản phẩm 
        const updatedCategory = await Categories.findOneAndUpdate(
            { products: req.params.id },
            { $pull: { products: req.params.id } },
            { new: true }
        );
        if (!updatedCategory) {
            return res.status(400).json({
                message: "Không tìm thấy danh mục chứa sản phẩm",
            });
        }
        return res.status(200).json({
            message: "Xóa sản phẩm thành công và đã cập nhật danh mục",
            product
        });
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}