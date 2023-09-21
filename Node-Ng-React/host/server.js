const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static assets
app.use('/navbar', express.static(path.join(__dirname, '../navbar')));
app.use('/cta', express.static(path.join(__dirname, '../cta')));
app.use('/ngFooter', express.static(path.join(__dirname, '../ngFooter')));

app.get('/', (req, res) => {
    // Read the host HTML
    const hostHTML = fs.readFileSync(path.join(__dirname, '', 'index.html'), 'utf8');
    
    // Read the navbar HTML
    const navbarHTML = fs.readFileSync(path.join(__dirname, '../navbar', 'index.html'), 'utf8');
    
    // Read the CTA HTML
    const ctaHTML = fs.readFileSync(path.join(__dirname, '../cta', 'index.html'), 'utf8');

    // Combine them together
    const combinedHTML = hostHTML.replace(
        '<!-- Navbar will be injected here -->',
        navbarHTML
    ).replace(
        '<!-- CTA will be injected here -->',
        ctaHTML
    );

    res.send(combinedHTML);
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});