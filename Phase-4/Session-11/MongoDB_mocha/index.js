import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const ItemSchema = new mongoose.Schema({ name: String, price: Number });
const Item = mongoose.model('Item', ItemSchema);

app.post('/api/items', async (req, res) => {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
});

app.get('/api/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

app.get('/api/items/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.json(item);
});

app.put('/api/items/:id', async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
});

app.delete('/api/items/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted successfully' });
});

app.listen(process.env.PORT, () => console.log('Server running on port 3000'));
