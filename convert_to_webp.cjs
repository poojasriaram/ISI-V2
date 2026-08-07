const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'assets');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    
    files.forEach((file) => {
        if (file.endsWith('.jpg') || file.endsWith('.JPG') || file.endsWith('.jpeg')) {
            const filePath = path.join(directoryPath, file);
            const webpPath = path.join(directoryPath, file.replace(/\.(jpg|JPG|jpeg)$/, '.webp'));
            
            sharp(filePath)
                .webp({ quality: 80 })
                .toFile(webpPath)
                .then(() => {
                    console.log(`Converted ${file} to WebP`);
                })
                .catch(err => {
                    console.error(`Error converting ${file}: `, err);
                });
        }
    });
});
