const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// Fix the ticker content to match
css = css.replace('.ticker-content {', `.ticker-content {
    display: flex;
    white-space: nowrap;
    align-items: center;
    animation: tickerScroll 30s linear infinite;
    font-family: var(--font-display);
    color: var(--text-white);
    font-size: 24px;
    letter-spacing: 2px;`);
    
// Remove duplicate definitions
css = css.replace(/font-size: 24px;\s+letter-spacing: 2px;\s+display: flex;/g, `display: flex;`);

fs.writeFileSync('styles.css', css);
