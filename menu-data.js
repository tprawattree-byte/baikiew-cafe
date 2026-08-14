/**
 * เมนูทั้งหมดของ Baikiew Café
 * price: [ร้อน, เย็น, ปั่น] — ใช้ null เมื่อไม่มีตัวเลือกนั้น
 * single: ราคาเดียว (อาหาร/เบเกอรี่)
 * tags: signature | new | vegan | caffeine-free
 */
window.MENU = [
  {
    id: 'coffee',
    name: 'กาแฟ',
    en: 'Coffee',
    note: 'เมล็ด Single Origin ดอยช้าง คั่วสดทุกสัปดาห์ · เปลี่ยนเป็น Decaf ได้ทุกเมนู',
    columns: true,
    items: [
      { th: 'เอสเปรสโซ่', en: 'Espresso', desc: 'ช็อตเดี่ยว 30 มล. รสเข้ม กลิ่นโกโก้และคาราเมล', price: [55, null, null] },
      { th: 'อเมริกาโน่', en: 'Americano', desc: 'เอสเปรสโซ่คู่ผสมน้ำร้อน/เย็น สะอาด ปลายจบด้วยผลไม้แห้ง', price: [60, 65, null] },
      { th: 'ลาเต้', en: 'Latte', desc: 'นมสดร้อยเปอร์เซ็นต์ สตีมละเอียด นุ่มจนแทบไม่รู้สึกฟองนม', price: [65, 70, 80] },
      { th: 'คาปูชิโน่', en: 'Cappuccino', desc: 'สัดส่วนคลาสสิก 1:1:1 ฟองนมหนา โรยผงโกโก้บาง ๆ', price: [65, 70, null] },
      { th: 'แฟลตไวท์', en: 'Flat White', desc: 'ริสเทรตโต้สองช็อต นมน้อย ได้รสกาแฟชัดที่สุดในกลุ่มนม', price: [70, 75, null] },
      { th: 'มอคค่า', en: 'Mocha', desc: 'ดาร์กช็อกโกแลตเบลเยียม 62% ผสมเอสเปรสโซ่ หวานน้อย', price: [75, 80, 90] },
      { th: 'คาราเมล มัคคิอาโต', en: 'Caramel Macchiato', desc: 'ไซรัปวานิลลาโฮมเมด ราดคาราเมลเคี่ยวเองทุกเช้า', price: [80, 85, 95] },
      { th: 'ใบเขียว ซิกเนเจอร์', en: 'Baikiew Signature', desc: 'เอสเปรสโซ่บนน้ำมะพร้าวหอมใบเตย ไม่เติมน้ำตาล', price: [null, 95, null], tags: ['signature'] },
      { th: 'ดริปกาแฟดอยช้าง', en: 'Single Origin Drip', desc: 'ดริปมือทีละแก้ว เลือกได้ระหว่างล็อต Natural และ Washed', price: [90, 95, null] },
      { th: 'เดอร์ตี้ คอฟฟี่', en: 'Dirty Coffee', desc: 'ช็อตร้อนเทลงนมเย็นจัด ดื่มทันทีก่อนสองชั้นผสมกัน', price: [null, 95, null], tags: ['signature'] },
      { th: 'ไอริช ครีม โคลด์บริว', en: 'Irish Cream Cold Brew', desc: 'สกัดเย็น 18 ชั่วโมง ท็อปครีมชีสโฟมรสไอริช', price: [null, 105, null], tags: ['new'] },
      { th: 'อฟโฟกาโต', en: 'Affogato', desc: 'ไอศกรีมวานิลลามาดากัสการ์ ราดเอสเปรสโซ่ร้อน', price: [null, 110, null] }
    ]
  },
  {
    id: 'tea',
    name: 'ชา & มัทฉะ',
    en: 'Tea & Matcha',
    note: 'มัทฉะเกรดพิธีจากอุจิ เกียวโต · ร่อนและตีสดทุกแก้ว',
    columns: true,
    items: [
      { th: 'มัทฉะ ลาเต้ อุจิ', en: 'Uji Matcha Latte', desc: 'มัทฉะเกรดพิธี 3 กรัม ตีสด รสกลมกล่อม ขมนุ่ม ปรับหวานได้', price: [85, 90, 100], tags: ['signature'] },
      { th: 'โฮจิฉะ ลาเต้', en: 'Hojicha Latte', desc: 'ชาเขียวคั่ว กลิ่นควันอ่อน ๆ คาเฟอีนต่ำ ดื่มตอนเย็นได้', price: [85, 90, 100] },
      { th: 'ชาไทยใบเขียว', en: 'Thai Tea', desc: 'ชาไทยชงเข้ม ตัดหวานด้วยนมสด ไม่ใส่ครีมเทียม', price: [55, 60, 70] },
      { th: 'เอิร์ลเกรย์ ลาเต้', en: 'Earl Grey Latte', desc: 'ใบชาซีลอนแต่งกลิ่นเบอร์กาม็อต แช่นมร้อน 6 นาที', price: [75, 80, 90] },
      { th: 'ชาเขียวมะลิ', en: 'Jasmine Green Tea', desc: 'ใบชาอบดอกมะลิสามรอบ ไม่มีน้ำตาล', price: [55, 60, null] },
      { th: 'ชาคาโมมายล์ ออร์แกนิก', en: 'Organic Chamomile', desc: 'ดอกคาโมมายล์อียิปต์ ไม่มีคาเฟอีน เหมาะก่อนนอน', price: [65, 70, null], tags: ['caffeine-free'] },
      { th: 'ยูซุ กรีนที โซดา', en: 'Yuzu Green Tea Soda', desc: 'ชาเขียวเย็นผสมยูซุญี่ปุ่นและโซดา สดชื่นเปรี้ยวหอม', price: [null, 85, null], tags: ['vegan'] },
      { th: 'มัทฉะ มะพร้าว', en: 'Coconut Matcha', desc: 'มัทฉะตีสดกับน้ำมะพร้าวและกะทิสด ไม่มีนมวัว', price: [null, 95, null], tags: ['vegan', 'new'] }
    ]
  },
  {
    id: 'milk',
    name: 'นม & ช็อกโกแลต',
    en: 'Milk & Chocolate',
    note: 'ไม่มีคาเฟอีน เหมาะสำหรับเด็กและคนที่ดื่มกาแฟไม่ได้',
    columns: true,
    items: [
      { th: 'ดาร์กช็อกโกแลต 70%', en: 'Dark Chocolate 70%', desc: 'ช็อกโกแลตแท่งเบลเยียมละลายสด ไม่ใช้ผงสำเร็จรูป', price: [80, 85, 95], tags: ['caffeine-free'] },
      { th: 'นมสดใบเตย', en: 'Pandan Fresh Milk', desc: 'ใบเตยสดเคี่ยวเป็นไซรัปเอง หอมแบบขนมไทย', price: [60, 65, 75], tags: ['caffeine-free'] },
      { th: 'นมสดคาราเมล', en: 'Caramel Fresh Milk', desc: 'คาราเมลเคี่ยวเข้ม เค็มปลายนิด ๆ', price: [65, 70, 80], tags: ['caffeine-free'] },
      { th: 'ชาร์โคล ลาเต้', en: 'Charcoal Latte', desc: 'ผงถ่านไผ่ญี่ปุ่นกับนมสด สีดำสนิท รสนุ่ม', price: [75, 80, 90], tags: ['caffeine-free'] },
      { th: 'สตรอว์เบอร์รี่ นมสด', en: 'Strawberry Milk', desc: 'สตรอว์เบอร์รี่กวนเองทั้งลูก ไม่แต่งสี', price: [null, 85, 95], tags: ['caffeine-free'] }
    ]
  },
  {
    id: 'soda',
    name: 'โซดา & น้ำผลไม้',
    en: 'Soda & Juice',
    note: 'คั้นสดวันต่อวัน ไม่ใช้น้ำเชื่อมเข้มข้น',
    columns: false,
    items: [
      { th: 'เลมอน ฮันนี่ โซดา', en: 'Lemon Honey Soda', desc: 'น้ำผึ้งดอกลำไยกับเลมอนคั้นสด', single: 75, tags: ['vegan'] },
      { th: 'ยูซุ โซดา', en: 'Yuzu Soda', desc: 'เปลือกยูซุแช่น้ำผึ้ง หอมจัดจ้าน', single: 85, tags: ['vegan'] },
      { th: 'เอสเปรสโซ่ โทนิค', en: 'Espresso Tonic', desc: 'โทนิคอิตาเลียนกับเอสเปรสโซ่และผิวส้ม', single: 90 },
      { th: 'น้ำส้มคั้นสด', en: 'Fresh Orange Juice', desc: 'ส้มสายน้ำผึ้งฝาง คั้นตอนสั่ง 100%', single: 75, tags: ['vegan'] },
      { th: 'แตงโมปั่น', en: 'Watermelon Frappé', desc: 'แตงโมล้วน ไม่เติมน้ำตาลและน้ำแข็งเพิ่ม', single: 70, tags: ['vegan'] },
      { th: 'กรีน ดีท็อกซ์', en: 'Green Detox', desc: 'แอปเปิลเขียว ผักโขม สับปะรด และขึ้นฉ่าย', single: 95, tags: ['vegan', 'new'] },
      { th: 'น้ำมะพร้าวสด', en: 'Coconut Water', desc: 'มะพร้าวน้ำหอมราชบุรี เปิดลูกต่อลูก', single: 70, tags: ['vegan'] }
    ]
  },
  {
    id: 'bakery',
    name: 'เบเกอรี่ & ของหวาน',
    en: 'Bakery & Dessert',
    note: 'อบสดทุกเช้า 06:00 · ครัวซองต์หมัก 48 ชั่วโมง เนยฝรั่งเศส AOP',
    columns: false,
    items: [
      { th: 'ครัวซองต์เนยฝรั่งเศส', en: 'Butter Croissant', desc: 'พับ 27 ชั้น ผิวกรอบร่วน ข้างในเป็นรังผึ้ง', single: 75 },
      { th: 'อัลมอนด์ ครัวซองต์', en: 'Almond Croissant', desc: 'ไส้ครีมอัลมอนด์ โรยอัลมอนด์สไลซ์อบหอม', single: 95 },
      { th: 'ครัวซองต์แฮมชีส', en: 'Ham & Cheese Croissant', desc: 'แฮมรมควันกับชีสเอมเมนทัล อบร้อนก่อนเสิร์ฟ', single: 110 },
      { th: 'ชีสเค้กมัทฉะ', en: 'Matcha Basque Cheesecake', desc: 'เนื้อครีมชีสเนียนหนัก หน้าไหม้หอม มัทฉะเข้ม', single: 135, tags: ['signature'] },
      { th: 'บาสก์ชีสเค้ก', en: 'Burnt Basque Cheesecake', desc: 'สูตรต้นตำรับซานเซบาสเตียน หวานน้อย', single: 145 },
      { th: 'บานอฟฟี่พาย', en: 'Banoffee Pie', desc: 'ทอฟฟี่เคี่ยวเอง กล้วยหอมทองสุกกำลังดี', single: 125 },
      { th: 'คุกกี้ช็อกโกแลตชิพ', en: 'Chocolate Chip Cookie', desc: 'ขอบกรอบกลางหนึบ เกลือทะเลโรยหน้า', single: 65 },
      { th: 'สโคนใบเตย + ครีมสด', en: 'Pandan Scone', desc: 'เสิร์ฟพร้อมคลอตเต็ดครีมและแยมส้ม', single: 85 },
      { th: 'โทสต์น้ำผึ้ง', en: 'Honey Toast', desc: 'ขนมปังชิฟฟอนอบเนย ราดน้ำผึ้งและไอศกรีมวานิลลา', single: 95 },
      { th: 'บราวนี่ถั่วพีแคน', en: 'Pecan Brownie', desc: 'ดาร์กช็อก 70% เนื้อฟัดจ์ ไม่แห้ง', single: 85 }
    ]
  },
  {
    id: 'brunch',
    name: 'อาหารจานเดียว',
    en: 'All-day Brunch',
    note: 'ครัวเปิด 08:00 – 16:00 ทุกวัน · แจ้งอาการแพ้อาหารได้ที่พนักงาน',
    columns: false,
    items: [
      { th: 'อะโวคาโดโทสต์', en: 'Avocado Toast', desc: 'ซาวร์โดว์ อะโวคาโดบด ไข่ลวก และเฟต้าชีส (สั่งแบบวีแกนได้)', single: 185, tags: ['vegan'] },
      { th: 'บิ๊กเบรกฟาสต์', en: 'Big Breakfast', desc: 'ไข่ 2 ฟอง เบคอน ไส้กรอกโฮมเมด เห็ด มะเขือเทศย่าง และขนมปัง', single: 265 },
      { th: 'เอ้กเบเนดิกต์แซลมอน', en: 'Salmon Eggs Benedict', desc: 'แซลมอนรมควันนอร์เวย์ ซอสฮอลแลนเดสตีสด', single: 245 },
      { th: 'สปาเก็ตตี้ขี้เมาไก่', en: 'Spicy Thai Basil Spaghetti', desc: 'เส้นสด พริกไทยอ่อน ใบกะเพราแก่ เผ็ดกลาง', single: 175 },
      { th: 'ข้าวผัดปูใบเขียว', en: 'Crab Fried Rice', desc: 'เนื้อปูก้อน 80 กรัม ข้าวหอมมะลิใหม่ ไข่เจียวกรอบ', single: 195 },
      { th: 'สลัดควินัวอกไก่ย่าง', en: 'Quinoa Chicken Salad', desc: 'ควินัวสามสี ผักออร์แกนิก น้ำสลัดงาญี่ปุ่น', single: 185 },
      { th: 'ซุปฟักทองโฮมเมด', en: 'Pumpkin Soup', desc: 'ฟักทองญี่ปุ่นอบทั้งลูก เสิร์ฟกับขนมปังกระเทียม', single: 125, tags: ['vegan'] },
      { th: 'แซนด์วิชชีสย่าง', en: 'Grilled Cheese Sandwich', desc: 'ชีสสามชนิดกับซาวร์โดว์ เสิร์ฟพร้อมซุปมะเขือเทศ', single: 165 }
    ]
  }
];

window.TAG_LABELS = {
  signature: 'ซิกเนเจอร์',
  new: 'ใหม่',
  vegan: 'วีแกน',
  'caffeine-free': 'ไม่มีคาเฟอีน'
};
