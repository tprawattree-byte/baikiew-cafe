/**
 * เมนูร้านปลาร้าเด้อ (Plara Der) — Thai & Northeastern Restaurant
 * ที่มา: เล่มเมนูจริง "Plara Der Menu.pdf" (29 หน้า) — ถอดทีละหน้า
 * ราคาเป็นบาท · ราคาอาหารไม่มีค่าบริการ (No Service Charges)
 * single: ราคาเดียว · tags: signature (รายการที่มีดาวในเล่ม)
 */
window.MENU = [
  {
    id: 'ubon',
    name: 'ของดีเมืองอุบล',
    en: 'Must Try! Signature from Ubon',
    note: 'ของดีที่สุดจากอุบลราชธานี — มาถึงแล้วต้องลอง',
    columns: false,
    items: [
      { th: 'หมูยอทอด', en: 'Deep Fried Ubon Pork Sausage', desc: 'หมูยออุบลทอด กินกับซอสพริก อร่อยจนลืมกลับบ้าน', single: 129 },
      { th: 'ไส้กรอกอีสาน', en: 'Northeastern Pork Sausages', desc: 'เนื้อหมูปนมันอย่างดี หมักกับข้าวสารสุก กระเทียม เกลือ ย่างหรือทอดก็ได้ กินร้อนหรือเย็นก็แซ่บเหมือนกัน', single: 130 },
      { th: 'หม่ำเนื้อ', en: 'Beef Sausages, a must try local favorite', desc: 'หม่ำเนื้อทำจากเนื้อวัวอย่างดี หมักกับกระเทียม เกลือ และข้าวสารสุก ถ้าจะให้แซ่บต้องอบให้หอม กินกับกระเทียม', single: 300, tags: ['signature'] },
      { th: 'ปลาวงทอด', en: 'Crispy Deep Fried River Fish', desc: 'ปลาตัวเล็กๆ จากแม่น้ำมูล นำมาวางเรียงเป็นวงๆ แล้วตากแห้ง ไร้สารเคมี จะทอดหรืออบก็อร่อย', single: 109, tags: ['signature'] },
      { th: 'ปลาส้ม', en: 'Sour River Fish Served with Assorted Vegetables', desc: 'แหนมปลาตะเพียนหมักกับข้าวสารสุก กระเทียมและเกลือ ทอดให้หอม บีบมะนาวใส่เวลารับประทาน', single: 200 },
      { th: 'รวมมิตรอีสาน', en: 'E-Sarn Platter', desc: 'รวมมิตรอีสาน เอาของดีที่สุดมารวมกัน กินตอนไหนก็อร่อย ปลาทอด หมูยอนึ่ง ไส้กรอกหมู หม่ำเนื้อ', single: 450 },
      { th: 'ข้าวเหนียวหมูปิ้ง', en: 'Grilled BBQ Pork Served with Sticky Rice', single: 85 }
    ]
  },
  {
    id: 'appetizer',
    name: 'เมนูทานเล่น',
    en: 'Appetizers',
    note: 'ย่างเตาถ่านและทอดสดทีละจาน',
    columns: false,
    items: [
      { th: 'เนื้อย่างวากิว', en: 'Wagyu Marinated Grilled Beef', single: 750 },
      { th: 'กุ้งแม่น้ำย่าง', en: 'Grilled Giant River Prawn', single: 570 },
      { th: 'ปลาทอดกระเทียม', en: 'River Fish Served with Crispy Garlic', single: 350 },
      { th: 'น้ำตกปลาทอด', en: 'Fried Fish with Spicy Dressing', desc: 'ปลาทอดกรอบๆ เสิร์ฟพร้อมน้ำจิ้มสูตรเด็ด', single: 350 },
      { th: 'ไก่ย่างอุบล (หนังกรอบ)', en: 'Grilled Chicken Ubon Style', desc: 'ไก่ย่างหมักจากสูตรของที่บ้าน เสิร์ฟกับน้ำจิ้มสองชนิด (2 ชิ้น)', single: 199 },
      { th: 'คอหมูย่าง', en: 'Grilled Pork Neck', desc: 'คอหมูย่างหมัก สไลด์บางๆ เสิร์ฟกับน้ำจิ้มแจ่ว', single: 179 },
      { th: 'หมูปลาร้าแซ่บ', en: 'Fried Marinated Pork', single: 140 },
      { th: 'หมูยอนึ่ง', en: 'Steamed Ubon Pork Sausage', desc: 'หมูยออุบลนึ่ง กินแล้วไม่อ้วน เสิร์ฟพร้อมซอสพริก', single: 129 },
      { th: 'ปลาดุกย่าง', en: 'Grilled River Cat Fish', single: 129 },
      { th: 'ปีกไก่ปลาร้าทอด', en: 'Deep Fried Chicken Wings', desc: 'ปีกไก่หมักกับปลาร้าอย่างดีจนเข้าที่ เอาไปทอดจนกรอบกินกับอะไรก็อร่อย', single: 100 },
      { th: 'หนังไก่ทอดกรอบ', en: 'Crispy Fried Chicken Skin', single: 89 }
    ]
  },
  {
    id: 'tam',
    name: 'เมนูตำ',
    en: 'Papaya Salad',
    note: 'ตำสดทีละครก · เผ็ดน้อย เผ็ดกลาง เผ็ดมาก บอกพนักงานได้',
    columns: false,
    items: [
      { th: 'ตำทะเล', en: 'Papaya Salad with Seafood', single: 280 },
      { th: 'ตำถาดสะบัด', en: 'A Tray of Papaya Salad', desc: 'ตำถาดสะบัดกินแล้วต้องสะบัด เผ็ดแค่ไหนสั่งได้ เผ็ดประถม มัธยม มหาลัย', single: 250, tags: ['signature'] },
      { th: 'ตำไหลบัวกุ้งสด', en: 'Lotus Stems Salad with Shrimp', desc: 'ไหลบัวกรอบกรุบกริบ คลุกเคล้าน้ำส้มตำ แบบเพิ่มกุ้งสด แซ่บถึงใจ', single: 160 },
      { th: 'ตำหมูยอเส้นจันทน์', en: 'Spicy Ubon Sausages with Chan Noodle Salad', single: 159 },
      { th: 'ตำถั่วหมูกรอบ', en: 'Spicy Long Bean Salad with Crispy Pork', desc: 'ตำถั่วฝักยาว ตำพอบุบๆ ปรุงรสด้วยน้ำปลาร้า เสิร์ฟพร้อมกับหมูกรอบทำเอง', single: 140 },
      { th: 'ตำหมูยอ', en: 'Papaya Salad with Pork Sausages', single: 129 },
      { th: 'ตำมั่วซั่ว', en: 'Local Papaya Salad', desc: 'อยากใส่อะไรก็ใส่ เผ็ดแค่ไหนก็สั่งเอา ใส่ขนมจีนด้วย แต่ไม่เผ็ดจะไม่อร่อย', single: 120, tags: ['signature'] },
      { th: 'ตำข้าวโพดไข่เค็ม', en: 'Corn Salad with Salted Duck Egg', desc: 'ตำข้าวโพดเพื่อสุขภาพ รสชาติเปรี้ยว หวาน', single: 120 },
      { th: 'ตำไหลบัว', en: 'Lotus Stems Salad', single: 90 },
      { th: 'ตำมะม่วง', en: 'Spicy Raw Mango Salad', single: 85 },
      { th: 'ตำแตง', en: 'Spicy Cucumber Salad', single: 85 },
      { th: 'ตำถั่วฝักยาว', en: 'Long Bean Salad', single: 80 },
      { th: 'ตำปูปลาร้า', en: 'Spicy Papaya Salad with Fermented Fish Sauce', desc: 'มาถึงแล้วต้องกิน มะละกอกรอบๆ ปรุงรสด้วยน้ำปลาร้าอย่างดี รับรองไม่เหม็น', single: 75, tags: ['signature'] },
      { th: 'ตำไทย', en: 'Papaya Salad with Shrimps and Peanuts', desc: 'มะละกอกรอบๆ ปรุงรสหวาน อมเปรี้ยวเผ็ด เผ็ดแค่ไหนสั่งได้ ทานเผ็ดมากจะไม่ดี', single: 75 }
    ]
  },
  {
    id: 'yum',
    name: 'เมนูยำ / ดอง',
    en: 'Salad',
    note: 'ของสดดองสูตรแซ่บของทางร้าน · เลือกใส่หรือไม่ใส่ปลาร้าได้',
    columns: false,
    items: [
      { th: 'ยำทะเล / ปลาร้า', en: 'Spicy Mixed Seafood Salad with or without Fermented Fish Sauce', single: 599 },
      { th: 'ยำแซลมอนปลาร้า', en: 'Salmon Salad in Spicy Fermented Fish Sauce', single: 399 },
      { th: 'แซลมอนดอง', en: 'Fresh Marinated Salmon Served with Seafood Sauce', desc: 'แซลมอนสดดอง เสิร์ฟพร้อมซอสซีฟู้ด สูตรแซ่บของทางร้าน', single: 389 },
      { th: 'กุ้งสดดอง', en: 'Fresh Marinated Prawn Served with Seafood Sauce', desc: 'กุ้งสดดอง เสิร์ฟพร้อมซอสซีฟู้ด สูตรแซ่บของทางร้าน', single: 329 },
      { th: 'ยำสองพี่น้อง (กุ้งกับปูม้า)', en: 'Spicy Prawns and Crabs Salad with Fermented Fish Sauce', single: 299 },
      { th: 'กุ้งแช่น้ำปลา', en: 'Shrimp in a Spicy Fish Sauce', single: 299 },
      { th: 'ยำกุ้งสดปลาร้า', en: 'Spicy Prawn Salad with Fermented Fish Sauce', single: 259 },
      { th: 'ยำปูม้าสดปลาร้า', en: 'Fresh Raw Crab in Spicy Fermented Fish Sauce', single: 259 },
      { th: 'ยำข้าวโพดคอหมูย่าง', en: 'Corn Salad with Grilled Pork Neck', single: 210 },
      { th: 'ยำหมูยอ / ปลาร้า', en: 'Spicy Pork Sausages Salad with or without Fermented Fish Sauce', desc: 'หมูยออุบล คลุกเคล้าน้ำยำ อร่อยจนลืมอิ่ม', single: 169 },
      { th: 'ยำขนมจีน', en: 'Spicy Rice Vermicelli Salad', single: 129 },
      { th: 'ลูกชิ้นปลารวมลวกจิ้ม', en: 'Steamed Mixed Fish Balls with Spicy Sauce', single: 119 },
      { th: 'ลูกชิ้นปลาลวกจิ้ม', en: 'Steamed Fish Balls with Spicy Sauce', single: 109 }
    ]
  },
  {
    id: 'larb',
    name: 'เมนูลาบ / น้ำตก',
    en: 'Northeastern Style Larb Isarn Salad',
    note: 'ข้าวคั่วและพริกป่นคั่วเอง',
    columns: false,
    items: [
      { th: 'ห่อหมกปลากระพงกับผักลวก', en: 'Steamed Seabass Served with Boiled Vegetables', single: 200 },
      { th: 'น้ำตกคอหมูย่าง', en: 'Spicy Grilled Pork Neck Salad', desc: 'คอหมูย่างเนื้อนุ่มกำลังดี คลุกเคล้ากับข้าวคั่วและพริกป่น', single: 189 },
      { th: 'หมกกุ้งฝอย', en: 'Steamed Traditional Vegetable with Baby Shrimp', single: 159 },
      { th: 'ลาบปลาดุก', en: 'Sundry River Catfish Salad', desc: 'OTOP ห้าดาว ดุกอุ่ย จังหวัดสุพรรณบุรี', single: 129 },
      { th: 'ตับหวาน', en: 'Spicy Pork Liver Salad', desc: 'ตับหมูลวกพอสุก ปรุงรสด้วยข้าวคั่ว ผักสดต่างๆ รสชาติแซ่บนัว สำหรับคนที่ต้องการธาตุเหล็ก', single: 120 },
      { th: 'ลาบหมู', en: 'Minced Pork Salad', desc: 'หมูสันในปนมันสับละเอียด คลุกเคล้ารสชาติจัดจ้าน เผ็ด เปรี้ยว นัว มีตับหมู และหนังหมู', single: 120 },
      { th: 'ซุปหน่อไม้', en: 'Spicy Bamboo Shoot Salad', desc: 'หน่อไม้ต้มขูดเป็นเส้น รสชาติเผ็ดนิดหน่อย กินกับข้าวเหนียวอร่อยจริงๆ', single: 119 },
      { th: 'กุ้งฝอยทอด', en: 'Wok Roasted Baby Shrimps', single: 119 },
      { th: 'ลาบไก่', en: 'Minced Chicken Salad', desc: 'ใครไม่ชอบกินลาบหมู ก็มากินลาบไก่ ปรุงเหมือนกัน', single: 110 },
      { th: 'ลาบเห็ด', en: 'Spicy Mushroom Salad with Crispy Rice Cracker', desc: 'เมนูสุขภาพเอาเห็ดมาลาบ คลุกกับข้าวคั่ว พริกป่นหอมๆ', single: 110 }
    ]
  },
  {
    id: 'curry',
    name: 'เมนูต้ม / แกง',
    en: 'Northeastern Style Curry',
    note: 'แกงอ่อมและต้มแซ่บสูตรอีสาน ใส่ใบย่านางและข้าวเบือ',
    columns: false,
    items: [
      { th: 'แกงอ่อมปลากระพง', en: 'Spicy Seabass with Vegetables', single: 189, tags: ['signature'] },
      { th: 'ต้มแซ่บปลากระพง', en: 'Spicy Seabass Clear Soup', single: 189 },
      { th: 'ต้มแซ่บปลาวง', en: 'Spicy "Pla Wong" Crispy Fish Soup', single: 149 },
      { th: 'ต้มแซ่บกระดูกอ่อน', en: 'Sour and Spicy Pork Ribs Clear Soup', single: 139 },
      { th: 'แกงอ่อมกระดูกอ่อน', en: 'Spicy Pork Ribs Curry Clear Soup with Isarn Herbs', desc: 'แกงอ่อมแบบอีสาน ปรุงรสด้วยพริก กระเทียม ข่า ตะไคร้ และหอมแดง', single: 139 },
      { th: 'แกงเห็ดรวม', en: 'Mushroom Curry', desc: 'แกงเห็ดใส่ใบย่านางและพริกกระเหรี่ยง พร้อมข้าวเบือ', single: 129 },
      { th: 'แกงหน่อไม้จริงๆ', en: 'Bamboo Shoot Curry', desc: 'หน่อไม้สดเอาไปต้มในน้ำใบย่านาง และข้าวเบือ ของแท้ต้องใส่ปลาร้า', single: 120 },
      { th: 'ต้มแซ่บไก่', en: 'Sour and Spicy Chicken Clear Soup', single: 119 },
      { th: 'แกงอ่อมไก่', en: 'Spicy Chicken Curry Clear Soup with Isarn Herbs', single: 119 }
    ]
  },
  {
    id: 'rice',
    name: 'เมนูข้าว',
    en: 'Rice',
    note: 'ข้าวหอมมะลิและข้าวเหนียวนึ่งใหม่ตลอดวัน',
    columns: false,
    items: [
      { th: 'ข้าวผัดกุ้ง', en: 'Prawns Fried Rice', single: 189 },
      { th: 'ข้าวกระเพราหมูสับไข่ดาว', en: 'Basil Pork with Rice', single: 169 },
      { th: 'ข้าวกระเพราไก่ไข่ดาว', en: 'Basil Chicken with Rice', single: 159 },
      { th: 'ข้าวผัดหมู', en: 'Fried Rice with Pork', single: 159 },
      { th: 'ข้าวผัดไก่', en: 'Fried Rice with Chicken', single: 139 }
    ]
  },
  {
    id: 'noodle',
    name: 'เมนูเส้น',
    en: 'Thai Noodles',
    note: 'ผัดไทยและก๋วยเตี๋ยวสูตรร้าน',
    columns: false,
    items: [
      { th: 'ผัดไทยกุ้งแม่น้ำย่าง', en: 'Phad Thai Giant River Prawn', single: 599, tags: ['signature'] },
      { th: 'ก๋วยเตี๋ยวต้มยำกุ้ง', en: 'Tom Yum Noodles Soup with Prawn', single: 289 },
      { th: 'ผัดไทยหมูกรอบ', en: 'Phad Thai with Crispy Pork', single: 259 },
      { th: 'ก๋วยเตี๋ยวน้ำตกเนื้อ', en: 'Namtok Noodle Soup (Beef)', single: 189 },
      { th: 'ผัดไทยกุ้ง', en: 'Phad Thai Prawn', single: 189 },
      { th: 'ก๋วยเตี๋ยวต้มข่าไก่', en: 'Tom Kha Noodles Soup with Chicken', single: 189 },
      { th: 'ก๋วยเตี๋ยวน้ำตกหมู', en: 'Namtok Noodle Soup (Pork)', single: 159 },
      { th: 'ผัดไทยไก่', en: 'Pad Thai Chicken', single: 139 },
      { th: 'ก๋วยจั๊บอุบล', en: 'Rice Noodle Soup with Minced Pork', single: 129 }
    ]
  },
  {
    id: 'thai',
    name: 'เมนูไทยไทย',
    en: 'Classic Thai Dishes',
    note: 'Voted the Best Food in the World',
    columns: false,
    items: [
      { th: 'ต้มยำกุ้ง', en: 'Tom Yum Prawn', single: 259 },
      { th: 'มัสมั่นไก่โรตีกรอบ', en: 'Massaman Chicken Curry with Roti', single: 250 },
      { th: 'กระเพราหมูกรอบ', en: 'Stir-Fried Basil with Crispy Pork', single: 229, tags: ['signature'] },
      { th: 'หมูกรอบทานเล่น', en: 'Crispy Pork', single: 199 },
      { th: 'เขียวหวานไก่', en: 'Green Chicken Curry', single: 159 },
      { th: 'แพนงไก่', en: 'Phanaeng Chicken', single: 159 },
      { th: 'กระเพราไก่', en: 'Stir-Fried Basil with Chicken', single: 149 },
      { th: 'ต้มข่าไก่', en: 'Tom Kha Chicken', single: 139 },
      { th: 'ผัดผักรวมมิตร', en: 'Stir Fried Vegetables', single: 120 },
      { th: 'ผัดผักบุ้ง', en: 'Stir Fried Morning Glory', single: 110 },
      { th: 'ไข่เจียวหมูสับ', en: 'Thai Pork Omelet', single: 110 },
      { th: 'ไข่เจียว', en: 'Thai Omelet', single: 89 }
    ]
  },
  {
    id: 'side',
    name: 'ข้าว & ของกินคู่',
    en: 'Rice & Sides',
    note: 'สั่งคู่กับเมนูตำ ลาบ และแกง',
    columns: false,
    items: [
      { th: 'โรตี', en: 'Roti', single: 45 },
      { th: 'ข้าวโป่ง', en: 'Crispy Ubon Rice Cracker', desc: 'ข้าวโป่งทำจากข้าวเหนียวสุก เอามาทำเป็นแผ่นๆ แล้วย่าง กินแล้วไม่อ้วน', single: 30 },
      { th: 'ข้าวเหนียว', en: 'Sticky Rice', single: 25 },
      { th: 'ข้าวสวย', en: 'Jasmine Rice', single: 25 },
      { th: 'ขนมจีน', en: 'Rice Vermicelli', single: 25 },
      { th: 'ข้าวจี่', en: 'Charcoal Grilled Sticky Rice', desc: 'ราคาก้อนละ', single: 20 }
    ]
  },
  {
    id: 'topping',
    name: 'ท็อปปิ้ง',
    en: 'Toppings',
    note: 'เพิ่มลงในเมนูตำได้ทุกจาน',
    columns: false,
    items: [
      { th: 'ทะเล', en: 'Seafood', single: 99 },
      { th: 'หมูกรอบ', en: 'Crispy Pork', single: 89 },
      { th: 'กุ้งสด', en: 'Prawn', single: 70 },
      { th: 'หมูยอ', en: 'Ubon Pork Sausage', single: 35 },
      { th: 'แคปหมู', en: 'Crispy Fried Pork Skin', single: 25 },
      { th: 'หนังปลา', en: 'Crispy Fried Fish Skin', single: 25 },
      { th: 'ไข่เค็ม', en: 'Salted Duck Egg', single: 20 }
    ]
  },
  {
    id: 'dessert',
    name: 'เมนูขนมหวาน',
    en: 'Thai Desserts',
    note: 'ไอศครีมและลอดช่องทำเอง',
    columns: false,
    items: [
      { th: 'ข้าวเหนียวมะม่วง', en: 'Mango Sticky Rice', single: 169 },
      { th: 'รวมมิตรลอดช่อง', en: 'Thai Homemade Chendol (Lodchong)', single: 120 },
      { th: 'เฉาก๊วยไอศครีมชาไทย', en: 'Grass Jelly with Thai Tea Ice-cream', desc: 'ไอศครีมชาไทยเฉาก๊วย เสิร์ฟพร้อมกับเฉาก๊วยราดนมสด', single: 80 },
      { th: 'ลอดช่องไอศครีมขนมถ้วย', en: 'Thai Lod Chong with Coconut Ice-cream', single: 80 },
      { th: 'ฝรั่งจิ้มพริกเกลือ', en: 'Fresh Guava Served with Chilli and Sugar', single: 69 },
      { th: 'มะม่วงน้ำปลาหวาน', en: 'Raw Green Mango Served with Sweet Chilli Dipping', single: 69 },
      { th: 'ขนมถ้วย', en: 'Coconut Custard', single: 59 }
    ]
  },
  {
    id: 'drinks',
    name: 'เมนูเครื่องดื่ม',
    en: 'Beverages',
    note: 'ชา กาแฟ และน้ำผลไม้ปั่นสด',
    columns: false,
    items: [
      { th: 'น้ำมะพร้าวสด', en: 'Fresh Coconut', single: 120 },
      { th: 'น้ำแร่ธรรมชาติ', en: 'Evian Mineral Water', single: 120 },
      { th: 'สปาร์คกลิ้ง', en: 'Evian Sparkling Water', single: 120 },
      { th: 'สเลอปี้ชาไทย', en: 'Slurpee Thai Tea', single: 89 },
      { th: 'ชาไทย', en: 'Thai Milk Tea', single: 79 },
      { th: 'เสาวรสปั่น', en: 'Passion Fruit Smoothie', single: 79 },
      { th: 'มะพร้าวปั่น', en: 'Coconut Smoothie', single: 79 },
      { th: 'มะม่วงปั่น', en: 'Mango Smoothie', single: 79 },
      { th: 'แตงโมปั่น', en: 'Watermelon Smoothie', single: 79 },
      { th: 'มะพร้าวนมปั่น', en: 'Coconut Milk Shake', single: 79 },
      { th: 'ชามะนาว', en: 'Iced Lemon Tea', desc: 'ชามะนาวรสชาติแบบไทยๆ เย็นสดชื่นพร้อมสู้อากาศร้อน', single: 69 },
      { th: 'โอเลี้ยง', en: 'Thai Iced Coffee (O-Lieng)', single: 69 },
      { th: 'กาแฟเย็น', en: 'Iced Coffee', single: 69 },
      { th: 'กาแฟร้อน', en: 'Hot Coffee', single: 59 },
      { th: 'โค้ก / โค้ก ซีโร่', en: 'Coke / Coke Zero', single: 30 },
      { th: 'น้ำเปล่า', en: 'Water', single: 25 },
      { th: 'น้ำแข็ง (ถัง)', en: 'Ice (Bucket)', single: 20 },
      { th: 'น้ำแข็ง (แก้ว)', en: 'Ice (Glass)', single: 3 }
    ]
  },
  {
    id: 'wine',
    name: 'ไวน์ & เบียร์',
    en: 'Wine & Beer',
    note: 'ไวน์ราคาต่อขวด · ไวน์แก้วละ 250 บาท · ค่าเปิดขวด 300 บาท',
    columns: false,
    items: [
      { th: 'Louis Jadot Macon Villages Blanc', en: 'White · Chardonnay · 13.0%', single: 1980 },
      { th: 'Chateau Croix de Mission Montagne Saint-Emilion', en: 'Red · Cabernet Sauvignon, Merlot · 13.0%', single: 1950 },
      { th: 'Chateau Prieure-Les-Tours Graves', en: 'Red · Cabernet Sauvignon, Merlot · 13.5%', single: 1650 },
      { th: 'Chateau Les Pins de Bossuet', en: 'Red · Cabernet Sauvignon, Merlot · 14.0%', single: 1650 },
      { th: "Chateau d'Esclans Whispering Angel Rose", en: 'Rosé · Shiraz, Grenache, Cinsault, Vermentino · 13.0%', single: 1600 },
      { th: 'Errazuriz Estate Reserva Carmenere', en: 'Red · Carmenere, Syrah, Petit Syrah · 13.5%', single: 1500 },
      { th: 'Dominio De Punctum Pablo Claro Especial', en: 'Red · Graciano, Cabernet Sauvignon · 13.5%', single: 1500 },
      { th: 'Sileni Marlborough Sauvignon Blanc', en: 'White · Sauvignon Blanc · 12.0%', single: 1500 },
      { th: 'ค่าเปิดขวด', en: 'Corkage Fee', single: 300 },
      { th: 'ไวน์แก้ว', en: 'Wine by Glass (Red / White)', single: 250 },
      { th: 'เบียร์ช้าง (ขวดใหญ่)', en: 'Chang Beer (Large)', single: 120 },
      { th: 'เบียร์สิงห์ (ขวดใหญ่)', en: 'Singha Beer (Large)', single: 120 }
    ]
  }
];

window.TAG_LABELS = {
  signature: 'ซิกเนเจอร์'
};
