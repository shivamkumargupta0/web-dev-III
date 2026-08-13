// after calling a function, it returns an object it is called factory function
const express = require('express');
const app = express();

const packages = require('./data/tour');

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/packages', (req, res) => {
    res.json(packages);
});

app.get('/packages/:id', (req, res) => {
    const packageId = parseInt(req.params.id);
    const selectedPackage = packages.find(pkg => pkg.id === packageId);
    if (selectedPackage) {
        res.json(selectedPackage);
    } else {
        res.status(404).json({ error: 'Package not found' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});