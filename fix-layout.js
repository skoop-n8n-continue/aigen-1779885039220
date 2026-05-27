const fs = require('fs');
const htmlPath = 'index.html';
const cssPath = 'styles.css';

// Fix HTML layout structure and hierarchy gaps
let html = fs.readFileSync(htmlPath, 'utf8');
// No major structural changes needed, CSS will handle spacing

// Fix CSS for precise pixel specifications
let css = fs.readFileSync(cssPath, 'utf8');

// Container padding to hit 1792x952 on 1920x1080 (64px margin all sides)
css = css.replace(/body {[^}]+}/, `body {
    background-color: var(--bg-black);
    color: var(--text-white);
    font-family: var(--font-body);
    overflow: hidden;
    width: 1920px;
    height: 1080px;
    margin: 0;
    padding: 64px;
    display: flex;
    flex-direction: column;
}`);

css = css.replace('.screen-container {', `.screen-container {
    width: 1792px;
    height: 952px;`);

// Header spacing
css = css.replace('.main-header {', `.main-header {
    height: auto;
    margin-top: 24px;
    margin-bottom: 32px;
    padding: 0;`);

css = css.replace('.header-left {', `.header-left {
    display: flex;
    flex-direction: column;
    gap: 16px;`);

css = css.replace('.live-badge {', `.live-badge {
    height: 32px;
    padding: 0 16px;`);

css = css.replace('.sub-title {', `.sub-title {
    font-size: 60px;
    line-height: 0.9;
    letter-spacing: 2px;
    margin-bottom: 4px;`); // Approximate 56-64px

css = css.replace('.main-title {', `.main-title {
    font-size: 72px;
    line-height: 0.88;
    letter-spacing: 0px;`);

css = css.replace('.tagline {', `.tagline {
    font-size: 20px;
    line-height: 1.4;
    margin-top: 16px;`);

css = css.replace('.gym-brand {', `.gym-brand {
    width: 300px;`);

css = css.replace('.logo-text {', `.logo-text {
    font-size: 32px;
    line-height: 1;`);

css = css.replace('.logo-sub {', `.logo-sub {
    font-size: 16px;
    margin-top: 6px;`);

// Content split
css = css.replace('.content-split {', `.content-split {
    display: flex;
    height: auto;
    flex-grow: 1;
    padding: 0;
    gap: 32px;`);

// Left side - Timeline
css = css.replace('.left-panel {', `.left-panel {
    width: 1152px;
    position: relative;
    overflow: hidden;
    padding: 24px;`);

css = css.replace('.class-card {', `.class-card {
    height: 96px;
    margin-bottom: 16px;
    padding: 16px 20px;
    gap: 16px;`);

css = css.replace('.class-time {', `.class-time {
    font-size: 32px;
    width: 64px;
    line-height: 1;
    letter-spacing: 1px;`);

css = css.replace('.class-name {', `.class-name {
    font-size: 26px;
    line-height: 1.1;
    margin-bottom: 4px;`);

css = css.replace('.class-details {', `.class-details {
    font-size: 16px;
    line-height: 1.2;
    gap: 8px;`);

css = css.replace('.intensity {', `.intensity {
    font-size: 16px;
    letter-spacing: 4px;`);

css = css.replace('.class-status {', `.class-status {
    height: 28px;
    padding: 0 12px;
    font-size: 14px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;`);

// Right side - Promo
css = css.replace('.right-panel {', `.right-panel {
    width: 640px;`);

css = css.replace('.glass-panel {', `.glass-panel {
    padding: 32px;
    border-radius: 16px;`);

css = css.replace('.promo-headline {', `.promo-headline {
    font-size: 52px;
    line-height: 0.9;
    margin-bottom: 16px;`);

css = css.replace('.offer-block {', `.offer-block {
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 20px;`);

css = css.replace('.offer-main {', `.offer-main {
    font-size: 28px;
    line-height: 1.1;`);

css = css.replace('.promo-desc {', `.promo-desc {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 32px;
    max-width: 90%;`);

css = css.replace('.cta-btn {', `.cta-btn {
    height: 64px;
    padding: 0 24px;
    font-size: 20px;
    border-radius: 10px;
    margin-bottom: 24px;`);

css = css.replace('.feature-chips {', `.feature-chips {
    gap: 8px;
    margin-bottom: 32px;`);

css = css.replace('.chip {', `.chip {
    height: 32px;
    padding: 0 14px;
    font-size: 14px;
    display: flex;
    align-items: center;`);

css = css.replace('.qr-container {', `.qr-container {
    width: 120px;
    height: 120px;
    position: static;`);

css = css.replace('.qr-label {', `.qr-label {
    font-size: 14px;
    margin-top: 8px;`);

// Footer ticker
css = css.replace('.footer-ticker {', `.footer-ticker {
    height: 56px;
    padding: 0 24px;
    width: 1920px;
    left: -64px;
    bottom: -64px;`);

css = css.replace('.ticker-content {', `.ticker-content {
    font-size: 24px;
    letter-spacing: 2px;`);

fs.writeFileSync(cssPath, css);
console.log('CSS updated');
