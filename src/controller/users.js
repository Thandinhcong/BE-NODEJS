import User from "../modules/account";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { schemaSignin, schemaSignup } from "../schema/users";

export const getUser = async (req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.status(400).json({
                message: "Tài khoản không tồn tại"
            })
        }
        return res.status(200).json({
            message: "Danh sách tài khoản",
            user,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}

export const Signup = async (req, res) => {
    try {
        const { error } = schemaSignup.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message)
            return res.status(400).json({
                message: errors
            })

        }
        //kiểm tra tài khoản có tồn tại hay không
        const userExits = await User.findOne({ email: req.body.email });
        if (userExits) {
            return res.status(400).json({
                message: "Email đã tồn tại"
            })
        }
        // mã hóa password
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        // tạo tài khoản mới
        const user = await User.create({
            ...req.body,
            password: hashPassword
        })
        //tạo token
        const token = jwt.sign({ id: user._id }, "iloveyou", { expiresIn: "5000" });
        user.password = undefined;
        return res.status(201).json({
            message: 'Tạo tài khoản thành công',
            accessToken: token,
        })
    } catch (error) {
        console.log(error);
    }
}
export const Signin = async (req, res) => {
    try {
        const { error } = schemaSignin.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message)
            return res.status(400).json({
                message: errors
            })
        }
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                messages: "Email không tồn tại",
            });
        }
        //kiểm tra mật khẩu 
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                messages: "Sai mật khẩu",
            });
        }
        //tạo token
        const token = jwt.sign({ id: user._id }, "iloveyou", { expiresIn: "5000" });
        user.password = undefined;
        return res.status(201).json({
            message: 'Đăng nhập thành công thành công',
            accessToken: token,
        })
    } catch (error) {
        console.log(error);
    }
}