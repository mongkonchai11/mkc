let openMenu = false;

function showMenu() {
    let sidebar = document.getElementById("sidebar-menu");
    if (sidebar) {
        if (openMenu) {
            sidebar.style.left = "-250px";
            openMenu = false;
        } else {
            sidebar.style.left = "0";
            openMenu = true;
        }
    }
}

function closeMenu() {
    let sidebar = document.getElementById("sidebar-menu");
    if (sidebar) {
        sidebar.style.left = "-250px";
        openMenu = false;
    }
}
function openText() {
    let msgContainer = document.getElementById("thankyou-message");
    
    // စာသားထည့်ပေးခြင်း
    msgContainer.innerHTML = "Thank you for using our service";
    
    // စာသားကို အလယ်ကွက်တိဖြစ်အောင် CSS စတိုင် တစ်ခါတည်းထည့်ပေးခြင်း
    msgContainer.style.textAlign = "center";
    msgContainer.style.fontSize = "18px";
    msgContainer.style.fontWeight = "bold";
    msgContainer.style.color = "#000000"; // စိမ်းပြာရောင်လှလှလေး
    msgContainer.style.marginTop = "15px";
    msgContainer.style.display = "block";
}
// ฟังก์ชันสำหรับคัดกรองเฉพาะกล่องข้อความรายการสินค้า
function filterLists(category) {
    const panels = document.querySelectorAll(".category-box");

    panels.forEach(panel => {
        const panelCategory = panel.getAttribute("data-panel");

        if (category === "all") {
            panel.style.display = "block"; // แสดงทุกหมวดหมู่
        } else if (panelCategory === category) {
            panel.style.display = "block"; // แสดงเฉพาะหมวดหมู่ที่เลือก
        } else {
            panel.style.display = "none";  // ซ่อนหมวดหมู่ที่ไม่เกี่ยวข้อง
        }
    });

    // ปิด Sidebar เมนูอัตโนมัติบนมือถือหลังกดเลือก
    if (window.innerWidth <= 992) {
        closeMenu();
    }
}