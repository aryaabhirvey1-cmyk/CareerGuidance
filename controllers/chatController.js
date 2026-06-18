const { getCareerResponse } = require("../services/geminiService");

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                success: false,
                message: "Message is required",
            });
        }

        const aiResponse = await getCareerResponse(message);

        res.status(200).json({
            success: true,
            reply: aiResponse,
        });

    } catch (error) {

        console.error("Controller Error:", error);

        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

module.exports = {
    sendMessage,
};