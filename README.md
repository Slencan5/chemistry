# 🏆 AI LÀ BẬC THẦY HÓA HỌC? - ĐẤU TRƯỜNG KEO DÁN TỔNG HỢP
> **Interactive TV Game Show Web App phục vụ bài thuyết trình môn Hóa học 12 (Chuyên đề: Polymer & Keo Dán Tổng Hợp).**
> **Phong cách: Prime-Time TV Game Show (Who Wants to Be a Millionaire) • Hồi hộp, Kịch tính, Dễ chơi • 100% Không "vibecode".**

---

## 🌟 Trải Nghiệm Độc Bản Chuẩn Trường Quay Truyền Hình

Dự án được xây dựng mô phỏng hoàn chỉnh một chương trình gameshow truyền hình kịch tính, kết hợp hoàn hảo giữa giải trí lớp học và kiến thức Hóa học chuẩn mực:

1. **🎯 Chế độ Thuyết Trình Liền Mạch - Chơi tới câu cuối cùng:**
   * Trò chơi được tối ưu hóa đặc biệt cho lớp học: **Tuyệt đối không có Game Over hay bắt chơi lại từ đầu khi chọn nhầm!**
   * Nếu người chơi chọn chưa chính xác, hệ thống sẽ nhẹ nhàng giải thích đáp án đúng, mở ra kiến thức khoa học và cho phép người thuyết trình bước tiếp lên câu tiếp theo.
   * Kết thúc câu số 10, trường quay sẽ tự động tổng kết và vinh danh số câu trả lời đúng (ví dụ: `8/10 câu chính xác`) trong tiếng nhạc chiến thắng và pháo hoa rực rỡ!
2. **🔎 Font chữ Siêu To - Tối ưu cho Máy Chiếu Lớp Học:**
   * Cỡ chữ câu hỏi và 4 phương án được phóng to vượt trội, độ tương phản cao, nét chữ sắc nét giúp học sinh ngồi ở bàn cuối (10 - 15 mét) vẫn đọc rõ từng chi tiết.
3. **🧪 3 Quyền Trợ Giúp Sống Còn (Interactive Lifelines):**
   * **[1] Trợ giúp 50:50:** Bắn tia laser loại bỏ ngay 2 phương án sai.
   * **[2] Hỏi ý kiến cả lớp:** Mở biểu đồ cột trực tiếp mô phỏng tỷ lệ biểu quyết của phòng học.
   * **[3] Gợi ý Chuyên gia Hóa học:** Kết nối cuộc gọi với GS. Nguyễn Văn Khoa để lắng nghe lời khuyên.
4. **🎵 Âm thanh trường quay sống động (Web Audio API):**
   * Tiếng nhịp tim hồi hộp khi suy nghĩ, âm thanh chốt đáp án kịch tính, hiệu ứng pháo hoa và nhạc chiến thắng fanfare khi vượt qua nấc thang.
   * Chạy hoàn toàn bằng Web Audio API độc lập, **không cần tải thêm bất kỳ file mp3 nào bên ngoài**.
5. **🎨 Giao diện Studio Đẳng Cấp:**
   * Thiết kế lozenge kim loại phản quang với hiệu ứng ánh sáng trường quay (Spotlights).
   * Thang bậc tiền thưởng 10 nấc thang sống động với mốc cúp vô địch 250.000.000 điểm thưởng.

---

## 🗂️ Cấu Trúc Thư Mục

```text
project hoá học để thuyết trình/
├── index.html       # Sân khấu trường quay, lozenge câu hỏi & các cửa sổ trợ giúp
├── style.css        # Hiệu ứng ánh sáng trường quay, lozenge frame, animations & responsive
├── script.js        # Engine 10 câu hỏi, âm thanh kịch tính Web Audio, biểu đồ bình chọn
├── README.md        # Giới thiệu & Hướng dẫn sử dụng
└── KEY_ANSWER.md    # Cẩm nang MC, đáp án chi tiết & phân tích hóa học 10 câu hỏi
```

---

## 🚀 Hướng Dẫn Sử Dụng Trên Lớp Học

1. Nhấp đúp chuột vào file **`index.html`** để bắt đầu trên trình duyệt (Google Chrome, Safari, Edge, Firefox).
2. Nhấn phím **F11** (hoặc nút **⛶ Toàn màn hình**) để đưa toàn bộ trường quay về chế độ Fullscreen chuyên nghiệp.
3. **Phím tắt điều khiển trường quay cực ngầu cho bạn (Presenter / MC):**
   * Phím `A`, `B`, `C`, `D`: Chốt đáp án người chơi chọn.
   * Phím `1`: Kích hoạt trợ giúp **50:50**.
   * Phím `2`: Mở biểu đồ **Hỏi ý kiến cả lớp**.
   * Phím `3`: Kết nối **Chuyên gia Hóa học**.
   * Phím `Enter` hoặc `Space`: Bước lên nấc thang tiếp theo.

---

## 📜 Giấy Phép
Dự án được xây dựng phục vụ mục đích giáo dục phi thương mại (MIT License).
