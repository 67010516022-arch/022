// เตรียมข้อมูลคำคมที่ต้องการสุ่ม (Array of Objects)
const quotes = [
    { text: "ความสำเร็จไม่ใช่กุญแจสู่ความสุข แต่ความสุขคือกุญแจสู่ความสำเร็จ", author: "Albert Schweitzer" },
    { text: "อย่ากลัวที่จะล้มเหลว เพราะมันคือส่วนหนึ่งของความสำเร็จ", author: "Thomas Edison" },
    { text: "การเริ่มต้นคือสิ่งที่ยากที่สุดเสมอ", author: "ไม่ทราบชื่อ" },
    { text: "ความพยายามอยู่ที่ไหน ความสำเร็จอยู่ที่นั่น", author: "สุภาษิตไทย" },
    { text: "วิธีเดียวที่จะทำงานที่ยิ่งใหญ่ได้ คือการรักในสิ่งที่คุณทำ", author: "Steve Jobs" },
    { text: "อย่ามัวแต่นับวันเวลา แต่จงทำให้วันเวลามีค่า", author: "Muhammad Ali" },
    { text: "ไม่สำคัญว่าคุณจะเดินช้าแค่ไหน ตราบใดที่คุณไม่หยุดเดิน", author: "Confucius" }
];

// ดึงองค์ประกอบจาก HTML มาใช้งาน
const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

// ฟังก์ชันสำหรับสุ่มคำคม
function generateRandomQuote() {
    // สุ่มตัวเลขตั้งแต่ 0 ถึงจำนวนคำคมที่มี
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // ดึงคำคมจาก Array ตามตัวเลขที่สุ่มได้
    const randomQuote = quotes[randomIndex];
    
    // เปลี่ยนข้อความใน HTML
    quoteTextElement.textContent = `"${randomQuote.text}"`;
    quoteAuthorElement.textContent = `- ${randomQuote.author}`;
}

// สั่งให้ฟังก์ชันทำงานเมื่อกดปุ่ม
generateBtn.addEventListener('click', generateRandomQuote);