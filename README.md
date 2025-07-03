# My Sport Complex App

เว็บแอปพลิเคชันสำหรับจัดการระบบจองสนามกีฬา (Sport Complex Booking System)  
พัฒนาด้วย Vue.js เพื่อให้ผู้ใช้งานสามารถดูสนามกีฬา, จองสนาม, และตรวจสอบสถานะการจองได้ง่ายและรวดเร็ว

---

## ฟีเจอร์หลัก

- แสดงรายการสนามกีฬาที่มีในสปอร์ตคอมเพล็กซ์
- ระบบจองสนามกีฬาแบบออนไลน์
- ดูประวัติการจองของผู้ใช้งาน
- ยกเลิกการจองสนามกีฬาได้
- UI สวยงามและตอบสนองได้ดี (responsive)

---

## เทคโนโลยีที่ใช้

- Vue.js 3 (Composition API + script setup)
- Vue Router (ถ้ามี)
- Pinia หรือ Vuex (ถ้ามี state management)
- CSS / SCSS หรือ UI Framework (ถ้ามี)

---

## การติดตั้งและใช้งาน

1. **โคลนโปรเจกต์**

```bash
git clone https://github.com/pan-k15/my-sport-complex-app.git
cd my-sport-complex-app/my-app
```

2. **ติดตั้ง dependencies**

```bash
npm install
# หรือ
yarn install
```

3. **รันโปรเจกต์ในโหมดพัฒนา**

```bash
npm run dev
# หรือ
yarn dev
```

4. เปิดเว็บเบราว์เซอร์แล้วเข้า [http://localhost:3000](http://localhost:3000) (หรือตามที่ terminal แจ้ง)

---

## โครงสร้างโปรเจกต์ (เบื้องต้น)

```
my-app/
├── public/          # ไฟล์สาธารณะ เช่น favicon, index.html
├── src/
│   ├── assets/      # รูปภาพ, ไอคอน, CSS, SCSS
│   ├── components/  # คอมโพเนนต์ Vue
│   ├── views/       # หน้าแต่ละหน้าในแอป
│   ├── router/      # ไฟล์ตั้งค่า Vue Router (ถ้ามี)
│   ├── store/       # การจัดการสถานะ (ถ้ามี)
│   └── App.vue      # คอมโพเนนต์หลัก
│   └── main.js      # จุดเริ่มต้นแอป
├── package.json
└── README.md
```

---

## การพัฒนาเพิ่มเติม

- เพิ่มระบบล็อกอินผู้ใช้
- เชื่อมต่อ Backend API สำหรับข้อมูลสนามกีฬาและการจองจริง
- เพิ่มระบบแจ้งเตือน (Notification)
- ปรับ UI ให้รองรับการใช้งานบนมือถือ (Mobile Friendly)

---

## License

โปรเจกต์นี้เปิดให้ใช้งานภายใต้ [MIT License](LICENSE)

---

ถ้าคุณมีคำถามหรืออยากร่วมพัฒนา โปรดเปิด Issue หรือ Pull Request ได้เลยครับ!  
ขอบคุณที่สนใจโปรเจกต์นี้ 🙏
