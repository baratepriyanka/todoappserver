const Login = require("../model/login");
const getLogin = async (req, res) => {
    try {
        const user = await Login.findOne({ email: req.body.email });
        if (user) {
            // console.log(user)
            //check if password matches
            const result = req.body.password === user.password;
            if (result) {
                // console.log(user)
                res.status(200).json(user)
            } else {
                res.status(400).json({ error: "password doesn't match" });
            }
        } else {
            res.status(400).json({ error: "User doesn't exist" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
}
const getSignup = async (req, res) => {
    const user = await Login.findOne({ where: { email: req.body.email } }).then((result) => {
        if (result) {
            res.status(200).json({
                message: "Email already exists!",
            });
        } else {
            const registerData = {
                email: req.body.email,
                password: req.body.password,
            };
            Login.create(registerData)
                .then((result) => {
                    res.status(201).json({
                        message: "Register successful",
                        post: result.id,
                    });
                })
                .catch((error) => {
                    req.status(500).json({
                        message: "something went wrong",
                        post: error,
                    });
                });

        }
    })
}

module.exports = {
    getLogin: getLogin,
    getSignup: getSignup
}