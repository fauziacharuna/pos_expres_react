import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome");
});

// exports.default = router

export default router