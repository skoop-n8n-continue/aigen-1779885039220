const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// The layout requires some specific adjustments that CSS alone might struggle with depending on the structure
// Specifically the promo panel flow

html = html.replace(/<div class="qr-container">[\s\S]*?<\/div>\s*<div class="feature-chips">/, `
                        <div class="feature-chips">
                            <span class="chip">Unlimited Access</span>
                            <span class="chip">Certified Trainers</span>
                            <span class="chip">Modern Equipment</span>
                            <span class="chip">Group Classes</span>
                        </div>
                        <div class="qr-container">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://example.com/join&color=39FF14&bgcolor=0A0A0A" alt="QR Code" class="qr-code">
                            <div class="qr-scan-line"></div>
                            <div class="qr-label">SCAN TO JOIN</div>
                        </div>`);
                        
html = html.replace(/<div class="feature-chips">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, `</div>
                </div>`);

fs.writeFileSync('index.html', html);
