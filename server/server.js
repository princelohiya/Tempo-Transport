require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema for Inquiry Form
const InquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  message: String,
  serviceType: String, // e.g., Corporate, Wedding, etc.
  date: { type: Date, default: Date.now },
});

const Inquiry = mongoose.model("Inquiry", InquirySchema);

// Routes
app.get("/", (req, res) => {
  res.send("Tempo Traveller API is running");
});

app.post("/api/contact", async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    res.status(201).json({ message: "Inquiry received successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
