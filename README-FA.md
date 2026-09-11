# پلاگین فونت فارسی و راستچین (RTL) برای Hermes Agent Desktop 🚀

[**English Documentation**](./README.md)

پلاگین سبک و کارآمد برای برنامه دسکتاپ **Hermes Agent (هرمس)** جهت افزودن فونت زیبای **وزیرمتن (Vazirmatn)**، فونت انگلیسی **Inter**، فونت کدنویسی **Geist Mono** و پشتیبانی هوشمند از متون راستچین (RTL).

---

## ✨ قابلیتها و ویژگیها

- ✍️ **فونت فارسی وزیرمتن (Vazirmatn):** نمایش واضح، چشمنواز و اصولی متون فارسی در تمامی بخشهای برنامه (پیامهای چت، باکس تایپ، سایدبار، دکمهها و منوها).
- 🔤 **فونت انگلیسی Inter:** استفاده از فونت استاندارد و مدرن Inter برای متون انگلیسی از طریق ترکیب هوشمند لایههای فونت (Font Fallback Stack).
- 💻 **فونت کدنویسی Geist Mono:** نمایش بلوکهای کد، دستورات ترمینال و متون مونو با فونت Geist Mono به صورت چپچین (LTR).
- 🔄 **تشخیص هوشمند جهت متن (Smart Bi-directional):** راستچین شدن خودکار پاراگرافهای فارسی بدون به هم ریختن متون انگلیسی یا بلاکهای کد.
- 🧩 **عدم نیاز به پچ کردن هسته برنامه:** این افزونه بر پایه معماری رسمی پلاگینهای دسکتاپ هرمس (`desktop-plugins`) کار میکند و با آپدیت شدن برنامه غیرفعال یا حذف نمیشود.

---

## ⚡ نصب سریع و خودکار

### ویندوز (PowerShell)
دستور زیر را در پاورشل اجرا کنید:
```powershell
iwr -useb https://raw.githubusercontent.com/Abulfadl-Ahmadi/hermes-persian-rtl/main/install.ps1 | iex
```

### لینوکس و مک (Bash)
دستور زیر را در ترمینال اجرا کنید:
```bash
curl -fsSL https://raw.githubusercontent.com/Abulfadl-Ahmadi/hermes-persian-rtl/main/install.sh | bash
```

---

## 🛠️ نصب دستی (Manual Install)

۱. پوشهای به نام `persian-font` در مسیر پلاگینهای دسکتاپ هرمس بسازید:
   - **ویندوز:** `C:\Users\<YourUser>\AppData\Local\hermes\desktop-plugins\persian-font\` (یا `~/.hermes/desktop-plugins/persian-font/`)
   - **لینوکس / مک:** `~/.hermes/desktop-plugins/persian-font/`

۲. فایل `plugin.js` موجود در این مخزن را در پوشه فوق کپی کنید.

۳. در برنامه **Hermes Agent Desktop**، کلیدهای <kbd>Ctrl</kbd> + <kbd>K</kbd> (در مک: <kbd>Cmd</kbd> + <kbd>K</kbd>) را فشار دهید و گزینه **Reload desktop plugins** را انتخاب کنید (یا برنامه را ریاستارت نمایید).

---

## 🎨 ترکیب فونتها

| بخش | فونت اصلی | فونتهای جایگزین (Fallback) |
| :--- | :--- | :--- |
| **متن رابط کاربری و چت** | `Inter` (برای انگلیسی) + `Vazirmatn` (برای فارسی) | `Segoe UI`, `-apple-system`, `sans-serif` |
| **بلوکهای کد و Monospace** | `Geist Mono` | `JetBrains Mono`, `Vazirmatn`, `monospace` |

---

## 📜 لایسنس و یادبود

- توسعهیافته توسط [ابوالفضل احمدی](https://github.com/Abulfadl-Ahmadi).
- تقدیم به روح پاک زندهیاد **صابر راستیکردار**، خالق فونتهای جاودان فارسی از جمله وزیرمتن.
- تحت مجوز [MIT](./LICENSE).
