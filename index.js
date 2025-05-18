const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/qris', async (req, res) => {
    try {
        const { amount } = req.query;
        
        if (!amount) {
            return res.status(400).json({
                error: 'Parameter amount diperlukan'
            });
        }

        // Memanggil API QRIS asli
        const response = await axios.get(`https://ai.luthfimuham.my.id/api?amount=${amount}`);
        
        // Mengembalikan respons yang sama dengan API asli
        res.json(response.data);
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: 'Terjadi kesalahan saat memproses permintaan'
        });
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});