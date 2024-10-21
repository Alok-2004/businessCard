const  information  = require("./db");
const infoCheck = require("./format");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/add", (req, res) => {
    const createPayLoad = req.body;
    const check = infoCheck.safeParse(createPayLoad);
    if (!check.success) {
        return res.status(411).json({
            message: "Format is Wrong"
        });
    }

    information.create(createPayLoad)
        .then(() => {
            res.status(201).json({ message: "Business card created successfully!" });
        })
        .catch((err) => {
            res.status(500).json({ message: "Error creating business card", error: err });
        });
});

app.get("" , (req , res) =>{

});

app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
});
