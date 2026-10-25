/* ========================================================
   AI LÀ BẬC THẦY HÓA HỌC? - 10-QUESTION MASTER LADDER
   Game Show Data & Mechanics with 100% Chemistry Accuracy
   ======================================================== */
const QUESTIONS_DATA = [
  {
    id: 1,
    prize: "1.000.000 Đ",
    question: "Khi săm xe đạp bị thủng đinh xì hết hơi, bác thợ sửa xe dùng 'Nhựa vá săm' để dán miếng cao su vào săm. Bản chất quá trình đóng rắn của loại keo này sau khi phết lên săm là gì?",
    options: [
      { key: "A", text: "Đun nóng chảy săm xe để dính chặt" },
      { key: "B", text: "Dung môi bay hơi, để lại màng polymer mềm dẻo co giãn kín khí" },
      { key: "C", text: "Hóa cứng thành khối sắt thép bất động" },
      { key: "D", text: "Làm vị trí thủng tự tan biến mất" }
    ],
    correct: "B",
    poll: { A: 4, B: 86, C: 6, D: 4 },
    expert: "Chào bạn! Săm xe làm bằng cao su nên cần màng keo dẻo dai đàn hồi theo săm khi bơm căng. Nhựa vá săm đóng rắn bằng cơ chế vật lý: dung môi hữu cơ bay hơi nhanh để lại màng polymer bám chắc vào cao su. Hãy tự tin chọn **phương án B** nhé!",
    explanation: "<strong>Chính xác!</strong> Nhựa vá săm chứa polymer tương thích với cao su và dung môi dễ bay hơi. Khi bôi lên săm, dung môi bay hơi nhanh để lại lớp màng polymer mềm dẻo, co giãn đàn hồi theo săm xe khi bơm căng mà không bị nứt toác, bịt kín khí 100%."
  },
  {
    id: 2,
    prize: "2.000.000 Đ",
    question: "Bác thợ vá săm dặn khách: 'Khi đang phết keo vá săm tuyệt đối không được hút thuốc hay để gần bếp lửa!'. Cơ sở hóa học an toàn của lời dặn này là gì?",
    options: [
      { key: "A", text: "Khói thuốc lá làm keo bị biến thành màu tím" },
      { key: "B", text: "Dung môi hữu cơ trong keo rất dễ bay hơi và dễ bắt lửa gây cháy" },
      { key: "C", text: "Mùi cao su sợ tiếng bật lửa ga" },
      { key: "D", text: "Lửa sẽ biến màng cao su thành thanh kim loại" }
    ],
    correct: "B",
    poll: { A: 2, B: 92, C: 3, D: 3 },
    expert: "Dung môi hữu cơ dùng để hòa tan polymer trong nhựa vá săm có nhiệt độ sôi thấp, bốc hơi rất nhanh trong không khí và có tính bắt cháy cực kỳ cao. Do đó **phương án B** là đáp án hoàn toàn chuẩn xác!",
    explanation: "<strong>Tuyệt vời!</strong> Nhựa vá săm dùng dung môi hữu cơ để hòa tan cao su. Dung môi này rất dễ bay hơi và dễ bắt lửa. Do đó, cần thi công ở nơi thông thoáng, tránh xa nguồn nhiệt/ngọn lửa và luôn đậy kín nắp sau khi dùng."
  },
  {
    id: 3,
    prize: "5.000.000 Đ",
    isMilestone: true,
    question: "Gia đình muốn hàn gắn một thanh giằng cổng sắt bị gãy và trám vá vết nứt bê tông chịu lực lớn. Loại keo tổng hợp nào sau đây được mệnh danh là 'vua chịu lực', bám dính cực mạnh trên kim loại và bê tông?",
    options: [
      { key: "A", text: "Hồ dán tinh bột gạo nếp" },
      { key: "B", text: "Keo Epoxy (thường gọi là keo AB)" },
      { key: "C", text: "Nước đường mía cô đặc" },
      { key: "D", text: "Nhựa vá săm cao su" }
    ],
    correct: "B",
    poll: { A: 3, B: 88, C: 2, D: 7 },
    expert: "Để dán kim loại sắt thép và bê tông chịu lực va đập khủng khiếp thì chỉ có dòng keo gốc nhựa Epoxy (keo AB) với cấu trúc mạng lưới 3D siêu bền mới làm được. Bạn hãy chọn **phương án B** để vượt qua mốc an toàn này!",
    explanation: "<strong>Xuất sắc! Bạn đã vượt qua mốc 5.000.000 Đ!</strong> Keo Epoxy (keo AB) là chất kết dính gốc nhựa tổng hợp bám dính siêu mạnh trên kim loại, bê tông, gốm sứ và kính. Sau khi đóng rắn, keo có độ bền cơ học phi thường, chịu lực nén kéo lớn và kháng nước/hóa chất tuyệt vời."
  },
  {
    id: 4,
    prize: "10.000.000 Đ",
    question: "Vì sao người thợ khi sử dụng keo Epoxy (keo AB) thông thường bắt buộc phải trộn đều cả 2 tuýp A và B với nhau thì keo mới đông cứng được?",
    options: [
      { key: "A", text: "Để keo có mùi thơm hoa hồng dễ chịu" },
      { key: "B", text: "Tuýp A (Nhựa Resin) cần Tuýp B (Chất đóng rắn) để phản ứng tạo mạng 3D" },
      { key: "C", text: "Chỉ để làm đổi màu keo từ xanh sang đỏ cho đẹp" },
      { key: "D", text: "Tuýp B thực chất chỉ là nước lọc chống khô keo" }
    ],
    correct: "B",
    poll: { A: 1, B: 91, C: 4, D: 4 },
    expert: "Keo epoxy phổ biến là hệ 2 thành phần: Phần A chứa nhựa có vòng oxirane (epoxide), Phần B là chất đóng rắn chứa nhóm amine (-NH2). Khi trộn, amine sẽ mở vòng oxirane để kích hoạt phản ứng hóa học tạo mạng 3D. Đáp án chắc chắn là **phương án B**!",
    explanation: "<strong>Chính xác!</strong> Phần A (Nhựa Resin DGEBA) chứa vòng oxirane ở hai đầu mạch, Phần B (Hardener) chứa amine đa chức (-NH2). Khi trộn đúng tỷ lệ (thường là 1:1 hoặc 2:1), nhóm epoxide mở vòng tạo mạng không gian 3D nhiệt rắn không nóng chảy lại."
  },
  {
    id: 5,
    prize: "20.000.000 Đ",
    question: "Những chiếc mặt bàn gỗ nghệ thuật với khe rãnh lấp lánh như sóng biển pha lê trong suốt được tạo nên từ loại vật liệu keo dán cao cấp nào?",
    options: [
      { key: "A", text: "Keo nến đun nóng chảy" },
      { key: "B", text: "Nhựa vá săm xe máy" },
      { key: "C", text: "Dòng Epoxy Resin trong suốt đóng rắn không co ngót" },
      { key: "D", text: "Hồ dán tinh bột pha loãng" }
    ],
    correct: "C",
    poll: { A: 5, B: 4, C: 88, D: 3 },
    expert: "Trong ngành thủ công mỹ nghệ, dòng keo Epoxy Resin trong suốt là vật liệu vàng. Keo đóng rắn tạo thành khối nhựa nhiệt rắn trong suốt như pha lê, độ cứng cao, không co ngót và có thể mài nhẵn, phủ bóng nghệ thuật. Hãy chọn **phương án C** nhé!",
    explanation: "<strong>Rất chuẩn!</strong> Dòng keo Epoxy Resin trong suốt được ứng dụng rực rỡ trong thủ công mỹ nghệ. Nhựa đóng rắn tạo khối đặc trong veo, chịu lực va đập tốt, không thấm nước và cho phép khoan cắt, mài bóng như pha lê."
  },
  {
    id: 6,
    prize: "40.000.000 Đ",
    question: "Trong công nghiệp chế biến gỗ, để tận dụng dăm gỗ và sợi mùn cưa ép thành các tấm ván dăm và ván sợi MDF làm đồ nội thất giá rẻ, loại keo dán chủ lực được dùng là gì?",
    options: [
      { key: "A", text: "Keo Poly(urea-formaldehyde) (viết tắt là keo UF)" },
      { key: "B", text: "Xi măng xây dựng" },
      { key: "C", text: "Keo dán săm xe đạp" },
      { key: "D", text: "Sơn dầu vẽ móng tay" }
    ],
    correct: "A",
    poll: { A: 85, B: 6, C: 5, D: 4 },
    expert: "Keo Poly(urea-formaldehyde) (keo UF) là chất kết dính số 1 của ngành gỗ công nghiệp nhờ độ bám dính cellulose tuyệt vời, đường keo sáng màu không làm ố gỗ và giá thành nguyên liệu rẻ nhất. Đáp án chuẩn là **phương án A**!",
    explanation: "<strong>Chính xác!</strong> Keo Poly(urea-formaldehyde) (keo UF) thuộc nhóm aminoplast, được sử dụng phổ biến nhất trong sản xuất ván dăm, ván sợi MDF và ván ép nội thất trong nhà nhờ bám dính gỗ tốt, đường keo sáng màu và giá thành rẻ."
  },
  {
    id: 7,
    prize: "60.000.000 Đ",
    question: "Về mặt nguyên liệu hóa học, keo dán Poly(urea-formaldehyde) (keo UF) được tổng hợp từ 2 tiền chất hữu cơ chính nào?",
    options: [
      { key: "A", text: "Cồn ethanol và Giấm ăn" },
      { key: "B", text: "Urê CO(NH₂)₂ và Formaldehyde HCHO (dung dịch formalin)" },
      { key: "C", text: "Muối ăn và Nước khoáng" },
      { key: "D", text: "Cao su thiên nhiên và Lưu huỳnh" }
    ],
    correct: "B",
    poll: { A: 4, B: 89, C: 3, D: 4 },
    expert: "Ngay từ tên gọi Poly(urea-formaldehyde) đã chỉ rõ 2 nguyên liệu: Urea là Urê CO(NH2)2 và Formaldehyde là HCHO. Các đơn vị urê được nối với nhau qua cầu methylene (-CH2-). Hãy tự tin chọn **phương án B**!",
    explanation: "<strong>Quá đỉnh!</strong> Keo UF tổng hợp từ Urê CO(NH2)2 (chứa nhóm amino -NH2) và Formaldehyde HCHO (dung dịch formalin). Các nhóm này phản ứng trùng ngưng tạo cầu nối methylene (-CH2-) hoặc methylene ether (-CH2-O-CH2-)."
  },
  {
    id: 8,
    prize: "85.000.000 Đ",
    question: "Bàn học làm từ ván dăm dùng keo UF nếu để quên ngoài sân mưa bão lâu ngày sẽ bị phồng rộp, ngấm nước và mục rã. Nguyên nhân hóa học là gì?",
    options: [
      { key: "A", text: "Keo UF bị nước mưa hòa tan thành khí bay lên trời" },
      { key: "B", text: "Keo UF kém chịu nước, liên kết dễ bị phản ứng thủy phân phân cắt" },
      { key: "C", text: "Dăm gỗ tự biến thành hạt cát" },
      { key: "D", text: "Keo UF bị ánh nắng biến thành vàng nguyên chất" }
    ],
    correct: "B",
    poll: { A: 3, B: 91, C: 3, D: 3 },
    expert: "Nhược điểm lớn nhất của keo UF là khả năng chịu nước kém. Khi tiếp xúc với độ ẩm cao hoặc ngâm nước kéo dài, các liên kết trong mạng polymer bị phản ứng thủy phân phân cắt làm mủn rã mối dán. Đáp án chuẩn là **phương án B**!",
    explanation: "<strong>Rất chính xác!</strong> Keo Poly(urea-formaldehyde) có độ bền kéo cao nhưng khả năng kháng nước và thời tiết rất kém. Trong môi trường ẩm ướt kéo dài, keo dễ bị phản ứng thủy phân ngược làm rã liên kết và giải phóng formaldehyde."
  },
  {
    id: 9,
    prize: "120.000.000 Đ",
    isMilestone: true,
    question: "Khi bước vào căn phòng kín mới lắp đặt tủ ván ép dùng keo UF, ta thường ngửi thấy mùi hắc cay nồng làm cay mắt, rát mũi họng. Khí độc hại phát thải tự do ở đây là gì?",
    options: [
      { key: "A", text: "Khí Oxy O₂" },
      { key: "B", text: "Khí Ni-tơ N₂" },
      { key: "C", text: "Khí Formaldehyde (HCHO)" },
      { key: "D", text: "Khí Heli gây cười" }
    ],
    correct: "C",
    poll: { A: 2, B: 3, C: 93, D: 2 },
    expert: "Do quá trình trùng ngưng không hoàn toàn hoặc do thủy phân cầu methylene ether trong điều kiện nóng ẩm, keo UF liên tục phát thải khí Formaldehyde (HCHO). Khí này kích ứng mắt, mũi họng và gây hại hô hấp. Chắc chắn là **phương án C**!",
    explanation: "<strong>Xuất sắc! Bạn đã vượt qua mốc an toàn 120.000.000 Đ!</strong> Khí Formaldehyde (HCHO) phát thải từ các sản phẩm gỗ dùng keo UF gây kích ứng niêm mạc mắt, mũi, họng và tiềm ẩn nguy cơ sức khỏe đường hô hấp nếu tiếp xúc lâu dài."
  },
  {
    id: 10,
    prize: "250.000.000 Đ",
    isMilestone: true,
    question: "Để khắc phục nhược điểm kém chịu nước và giảm lượng khí độc Formaldehyde phát thải từ ván ép keo UF, các nhà khoa học đã pha trộn thêm hợp chất nào để tạo thành keo cải tiến MUF?",
    options: [
      { key: "A", text: "Melamine" },
      { key: "B", text: "Bột baking soda làm bánh" },
      { key: "C", text: "Cát thạch anh mịn" },
      { key: "D", text: "Dầu hỏa thắp đèn" }
    ],
    correct: "A",
    poll: { A: 94, B: 2, C: 2, D: 2 },
    expert: "Đây là câu hỏi quyết định ngai vàng! Ký hiệu MUF chính là viết tắt của Melamine-Urea-Formaldehyde. Hợp chất Melamine chứa vòng s-triazine bền vững giúp khóa chặt formaldehyde và tăng vọt độ kháng nước. Đáp án vô địch là **phương án A: Melamine**!",
    explanation: "<strong>CHÚC MỪNG BẬC THẦY HÓA HỌC POLYMER ĐOẠT GIẢI THƯỞNG 250.000.000 Đ!</strong> Pha trộn thêm Melamine để tạo thành keo MUF (Melamine-Urea-Formaldehyde) là giải pháp công nghệ tiên tiến nhất nhằm tăng khả năng chịu nước và giảm thiểu phát thải formaldehyde ra môi trường sống."
  }
];

/* ========================================================
   GAME SHOW STATE
   ======================================================== */
let currentQIndex = 0;
let userScore = {
  correct: 0,
  total: 10
};
let usedLifelines = {
  "5050": false,
  "poll": false,
  "expert": false
};
let isAnswerLocked = false;
let soundEnabled = true;

/* ========================================================
   WEB AUDIO API: PRIME-TIME GAME SHOW ORCHESTRA
   Heartbeat, suspense ambient drone, lock-in chord, win fanfare!
   ======================================================== */
let audioCtx = null;
let ambientDroneOsc = null;
let ambientGain = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function startAmbientDrone() {
  if (!soundEnabled || ambientDroneOsc) return;
  initAudio();
  if (!audioCtx) return;

  try {
    ambientDroneOsc = audioCtx.createOscillator();
    ambientGain = audioCtx.createGain();

    // Low mysterious suspense drone (F2 = ~87Hz)
    ambientDroneOsc.type = 'sine';
    ambientDroneOsc.frequency.setValueAtTime(87.31, audioCtx.currentTime);

    ambientGain.gain.setValueAtTime(0.04, audioCtx.currentTime);

    ambientDroneOsc.connect(ambientGain);
    ambientGain.connect(audioCtx.destination);

    ambientDroneOsc.start();
  } catch (e) {}
}

function stopAmbientDrone() {
  if (ambientDroneOsc) {
    try {
      ambientGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
      setTimeout(() => {
        ambientDroneOsc.stop();
        ambientDroneOsc = null;
      }, 350);
    } catch (e) {
      ambientDroneOsc = null;
    }
  }
}

function playTone(freq, type, duration, gainLevel = 0.12) {
  if (!soundEnabled) return;
  initAudio();
  if (!audioCtx) return;

  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(gainLevel, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

/* Suspense Heartbeat / Clock Tick */
function soundTick() {
  if (!soundEnabled) return;
  initAudio();
  playTone(95, 'triangle', 0.1, 0.08);
}

/* Dramatic Lock-in (Chốt đáp án!) */
function soundLockIn() {
  if (!soundEnabled) return;
  initAudio();
  playTone(261.63, 'sawtooth', 0.35, 0.1); // C4 tense
  playTone(329.63, 'sine', 0.35, 0.1);     // E4
}

/* Right Answer Triumph Chord */
function soundRightAnswer() {
  if (!soundEnabled) return;
  initAudio();
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    setTimeout(() => playTone(freq, 'triangle', 0.35, 0.15), idx * 80);
  });
}

/* Wrong Answer Drop */
function soundWrongAnswer() {
  if (!soundEnabled) return;
  initAudio();
  playTone(185, 'sawtooth', 0.35, 0.15);
  setTimeout(() => playTone(130, 'sawtooth', 0.5, 0.15), 120);
}

/* 50:50 Laser Elimination */
function sound5050() {
  if (!soundEnabled) return;
  initAudio();
  playTone(880, 'sine', 0.12, 0.1);
  setTimeout(() => playTone(440, 'triangle', 0.18, 0.1), 100);
}

/* Victory Fanfare for Grand Prize */
function soundGrandVictory() {
  if (!soundEnabled) return;
  initAudio();
  const fanfare = [
    { f: 523.25, t: 0.2, d: 0 },
    { f: 523.25, t: 0.2, d: 150 },
    { f: 523.25, t: 0.2, d: 300 },
    { f: 659.25, t: 0.4, d: 450 },
    { f: 783.99, t: 0.4, d: 650 },
    { f: 1046.50, t: 0.8, d: 900 }
  ];
  fanfare.forEach(item => {
    setTimeout(() => playTone(item.f, 'triangle', item.t, 0.25), item.d);
  });
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  document.getElementById('btn-sound').textContent = soundEnabled ? '🔊' : '🔇';
  if (!soundEnabled) stopAmbientDrone();
  else if (document.getElementById('screen-game').classList.contains('active')) {
    startAmbientDrone();
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => console.warn(err));
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

/* ========================================================
   CONTROLLER & RENDER
   ======================================================== */
function startGame() {
  initAudio();
  currentQIndex = 0;
  userScore.correct = 0;
  usedLifelines = { "5050": false, "poll": false, "expert": false };
  isAnswerLocked = false;

  // Reset Lifeline buttons
  document.querySelectorAll('.lifeline-btn').forEach(btn => btn.classList.remove('used'));

  document.getElementById('screen-start').classList.remove('active');
  document.getElementById('screen-end').classList.remove('active');
  document.getElementById('screen-game').classList.add('active');

  buildMoneyLadder();
  loadQuestion(currentQIndex);
  startAmbientDrone();
}

function buildMoneyLadder() {
  const ladder = document.getElementById('money-ladder');
  ladder.innerHTML = '';

  QUESTIONS_DATA.forEach((q, idx) => {
    const step = document.createElement('div');
    step.className = `ladder-step ${q.isMilestone ? 'milestone' : ''}`;
    step.id = `ladder-step-${idx}`;
    step.innerHTML = `
      <span class="step-idx">${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}</span>
      <span class="step-prize">${q.prize}</span>
    `;
    ladder.appendChild(step);
  });
}

function updateMoneyLadder(activeIdx) {
  QUESTIONS_DATA.forEach((q, idx) => {
    const step = document.getElementById(`ladder-step-${idx}`);
    if (!step) return;

    step.classList.remove('current');
    if (idx === activeIdx) {
      step.classList.add('current');
    }
  });
}

function loadQuestion(index) {
  isAnswerLocked = false;
  const qData = QUESTIONS_DATA[index];
  if (!qData) {
    showGrandVictoryScreen();
    return;
  }

  // Update HUD
  document.getElementById('hud-q-index').textContent = index + 1 < 10 ? `0${index + 1}` : index + 1;
  document.getElementById('hud-q-prize').textContent = qData.prize;

  // Question Text
  document.getElementById('arena-q-badge').textContent = `CÂU HỎI SỐ ${index + 1 < 10 ? '0' + (index + 1) : index + 1}`;
  document.getElementById('arena-q-text').textContent = qData.question;

  // Update Ladder Highlight
  updateMoneyLadder(index);

  // Render 4 Answer Lozenges
  const container = document.getElementById('answers-container');
  container.innerHTML = '';

  qData.options.forEach(opt => {
    const lozenge = document.createElement('div');
    lozenge.className = 'answer-lozenge';
    lozenge.id = `lozenge-${opt.key}`;
    lozenge.innerHTML = `
      <div class="answer-letter-badge">${opt.key}</div>
      <div class="answer-text-content">${opt.text}</div>
    `;
    lozenge.onclick = () => selectAnswer(opt.key);
    container.appendChild(lozenge);
  });

  soundTick();
}

/* ========================================================
   PLAYER LOCKS IN ANSWER (SUSPENSE & REVEAL)
   ======================================================== */
function selectAnswer(chosenKey) {
  if (isAnswerLocked) return;
  isAnswerLocked = true;

  soundLockIn();

  const chosenLozenge = document.getElementById(`lozenge-${chosenKey}`);
  if (chosenLozenge) {
    chosenLozenge.classList.add('locked');
  }

  // Dramatic Suspense Pause (1.4 seconds like on TV)
  setTimeout(() => {
    revealAnswerResult(chosenKey);
  }, 1400);
}

function revealAnswerResult(chosenKey) {
  const qData = QUESTIONS_DATA[currentQIndex];
  const isCorrect = (chosenKey === qData.correct);
  const chosenLozenge = document.getElementById(`lozenge-${chosenKey}`);
  const correctLozenge = document.getElementById(`lozenge-${qData.correct}`);

  if (chosenLozenge) chosenLozenge.classList.remove('locked');

  const currentStep = document.getElementById(`ladder-step-${currentQIndex}`);

  if (isCorrect) {
    // CORRECT!
    userScore.correct++;
    if (chosenLozenge) chosenLozenge.classList.add('correct');
    soundRightAnswer();
    launchConfetti(45);

    if (currentStep) {
      currentStep.classList.remove('current');
      currentStep.classList.add('passed-correct');
    }

    setTimeout(() => {
      showRevealExplanation(true, qData, chosenKey);
    }, 1200);

  } else {
    // NOT CORRECT, BUT SEAMLESS PRESENTATION FLOW (KHÔNG BỊ RESET/GAME OVER)
    if (chosenLozenge) chosenLozenge.classList.add('wrong');
    if (correctLozenge) correctLozenge.classList.add('correct');
    soundWrongAnswer();

    if (currentStep) {
      currentStep.classList.remove('current');
      currentStep.classList.add('passed-reviewed');
    }

    setTimeout(() => {
      showRevealExplanation(false, qData, chosenKey);
    }, 1400);
  }
}

function showRevealExplanation(isCorrect, qData, chosenKey) {
  const modal = document.getElementById('modal-reveal');
  const box = document.getElementById('reveal-box');
  const badge = document.getElementById('reveal-status-badge');
  const title = document.getElementById('reveal-title');
  const banner = document.getElementById('reveal-correction-banner');
  const expl = document.getElementById('reveal-explanation');
  const nextBtn = document.getElementById('btn-next-question');

  if (isCorrect) {
    box.classList.remove('review-mode');
    box.classList.add('correct-mode');
    badge.textContent = "✨ ĐÁP ÁN HOÀN TOÀN CHÍNH XÁC!";
    badge.className = "reveal-badge-tag badge-correct";
    title.textContent = `Xuất Sắc! Vượt Qua Câu Số ${currentQIndex + 1}`;
    banner.style.display = "none";
  } else {
    box.classList.remove('correct-mode');
    box.classList.add('review-mode');
    badge.textContent = "💡 KHÁM PHÁ & GHI NHỚ ĐÁP ÁN ĐÚNG";
    badge.className = "reveal-badge-tag badge-review";
    title.textContent = `Giải Mã Kiến Thức Câu Số ${currentQIndex + 1}`;

    const correctOpt = qData.options.find(o => o.key === qData.correct);
    banner.innerHTML = `
      <div class="correction-header">Phương án chính xác là:</div>
      <div class="correction-content">
        <span class="correction-letter">[${correctOpt.key}]</span>
        <span class="correction-text">${correctOpt.text}</span>
      </div>
    `;
    banner.style.display = "block";
  }

  expl.innerHTML = qData.explanation;

  if (currentQIndex === QUESTIONS_DATA.length - 1) {
    nextBtn.textContent = "XEM TỔNG KẾT & VINH DANH CHUNG CUỘC 🏆";
  } else {
    const nextPrize = QUESTIONS_DATA[currentQIndex + 1]?.prize || '';
    nextBtn.textContent = `TIẾP TỤC BẬC THANG ${currentQIndex + 2} (${nextPrize}) ➡️`;
  }

  modal.classList.add('active');
}

function advanceNextQuestion() {
  document.getElementById('modal-reveal').classList.remove('active');
  currentQIndex++;
  if (currentQIndex < QUESTIONS_DATA.length) {
    loadQuestion(currentQIndex);
  } else {
    showGrandVictoryScreen();
  }
}

/* ========================================================
   3 INTERACTIVE LIFELINES
   ======================================================== */
function use5050() {
  if (usedLifelines["5050"] || isAnswerLocked) return;
  usedLifelines["5050"] = true;
  document.getElementById('ll-5050').classList.add('used');

  sound5050();

  const qData = QUESTIONS_DATA[currentQIndex];
  const wrongOptions = qData.options.filter(opt => opt.key !== qData.correct);

  // Shuffle and pick 2 wrong options to eliminate
  wrongOptions.sort(() => Math.random() - 0.5);
  const eliminated = wrongOptions.slice(0, 2);

  eliminated.forEach(opt => {
    const el = document.getElementById(`lozenge-${opt.key}`);
    if (el) el.classList.add('eliminated');
  });
}

function useAudiencePoll() {
  if (usedLifelines["poll"] || isAnswerLocked) return;
  usedLifelines["poll"] = true;
  document.getElementById('ll-poll').classList.add('used');

  const qData = QUESTIONS_DATA[currentQIndex];
  const container = document.getElementById('poll-bars-container');
  container.innerHTML = '';

  ['A', 'B', 'C', 'D'].forEach(letter => {
    const pct = qData.poll[letter] || 10;
    const isWinner = letter === qData.correct;

    const col = document.createElement('div');
    col.className = `poll-bar-col ${isWinner ? 'winner' : ''}`;
    col.innerHTML = `
      <div class="poll-bar-pct">${pct}%</div>
      <div class="poll-bar-fill" id="poll-fill-${letter}" style="height: 0%"></div>
      <div class="poll-bar-label">${letter}</div>
    `;
    container.appendChild(col);

    setTimeout(() => {
      const fillEl = document.getElementById(`poll-fill-${letter}`);
      if (fillEl) fillEl.style.height = `${pct}%`;
    }, 100);
  });

  document.getElementById('modal-poll').classList.add('active');
}
function closePollModal() {
  document.getElementById('modal-poll').classList.remove('active');
}

function useExpertCall() {
  if (usedLifelines["expert"] || isAnswerLocked) return;
  usedLifelines["expert"] = true;
  document.getElementById('ll-expert').classList.add('used');

  const qData = QUESTIONS_DATA[currentQIndex];
  document.getElementById('expert-speech-text').innerHTML = qData.expert;
  document.getElementById('modal-expert').classList.add('active');
}
function closeExpertModal() {
  document.getElementById('modal-expert').classList.remove('active');
}

/* ========================================================
   VICTORY & GRAND FINALE SCREEN
   ======================================================== */
function showGrandVictoryScreen() {
  stopAmbientDrone();
  soundGrandVictory();
  launchConfetti(90);

  document.getElementById('screen-game').classList.remove('active');
  document.getElementById('screen-end').classList.add('active');

  const trophyEl = document.getElementById('end-trophy-icon');
  const statusEl = document.getElementById('end-status-title');
  const prizeEl = document.getElementById('end-prize-title');
  const scorePillEl = document.getElementById('end-score-pill');
  const commentEl = document.getElementById('end-comment');

  const score = userScore.correct;
  if (scorePillEl) {
    scorePillEl.textContent = `KẾT QUẢ: ${score} / 10 CÂU CHÍNH XÁC (${score * 10}%)`;
  }

  if (score === 10) {
    if (trophyEl) trophyEl.textContent = "🏆";
    statusEl.textContent = "CHIẾN THẮNG TUYỆT ĐỐI • BẬC THẦY HÓA HỌC";
    prizeEl.textContent = "250.000.000 ĐIỂM THƯỞNG 🏆";
    commentEl.textContent = "Cả lớp đã xuất sắc trả lời đúng tuyệt đối cả 10 câu hỏi, làm chủ hoàn toàn kiến thức về Nhựa Vá Săm, Keo Epoxy AB và Keo Poly(UF)!";
  } else if (score >= 7) {
    if (trophyEl) trophyEl.textContent = "🥇";
    statusEl.textContent = "HOÀN THÀNH XUẤT SẮC BÀI THUYẾT TRÌNH";
    prizeEl.textContent = "CHUYÊN GIA VẬT LIỆU POLYMER 🌟";
    commentEl.textContent = `Buổi thuyết trình thành công rực rỡ! Cả lớp đã cùng nhau tương tác hào hứng và vượt qua ${score}/10 câu hỏi đầy thuyết phục!`;
  } else {
    if (trophyEl) trophyEl.textContent = "🎖️";
    statusEl.textContent = "HOÀN THÀNH TOÀN BỘ 10 CÂU HỎI THUYẾT TRÌNH";
    prizeEl.textContent = "CHỨNG NHẬN TRẢI NGHIỆM HÓA HỌC ⚗️";
    commentEl.textContent = `Chúc mừng cả lớp đã hoàn thành trọn vẹn 10 câu hỏi! Hãy cùng nhau ôn tập và ghi nhớ các kiến thức trọng tâm ở bảng tổng kết bên dưới nhé!`;
  }
}

function showDefeatScreen(lastQ) {
  // Hoàn toàn không ép chơi lại từ đầu: chuyển thẳng sang màn hình tổng kết vinh danh
  showGrandVictoryScreen();
}

function restartGame() {
  userScore.correct = 0;
  currentQIndex = 0;
  document.getElementById('screen-end').classList.remove('active');
  document.getElementById('screen-start').classList.add('active');
}

/* ========================================================
   KEYBOARD SHORTCUTS FOR PRESENTER (A, B, C, D, 1, 2, 3)
   ======================================================== */
document.addEventListener('keydown', (e) => {
  const gameActive = document.getElementById('screen-game').classList.contains('active');
  const revealModal = document.getElementById('modal-reveal');

  if (revealModal.classList.contains('active')) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
      e.preventDefault();
      advanceNextQuestion();
    }
    return;
  }

  if (gameActive && !isAnswerLocked) {
    const key = e.key.toUpperCase();
    if (['A', 'B', 'C', 'D'].includes(key)) {
      selectAnswer(key);
    } else if (e.key === '1') {
      use5050();
    } else if (e.key === '2') {
      useAudiencePoll();
    } else if (e.key === '3') {
      useExpertCall();
    }
  }
});

/* ========================================================
   CHEATSHEET MODAL
   ======================================================== */
function openCheatsheet() {
  document.getElementById('modal-cheatsheet').classList.add('active');
}
function closeCheatsheet() {
  document.getElementById('modal-cheatsheet').classList.remove('active');
}
function handleCheatsheetOverlay(e) {
  if (e.target.id === 'modal-cheatsheet') closeCheatsheet();
}

/* ========================================================
   STUDIO PARTICLES BACKGROUND
   Ambient floating chemistry dust and glowing energy motes
   ======================================================== */
const studioCanvas = document.getElementById('studio-particles');
const sCtx = studioCanvas.getContext('2d');
let sWidth, sHeight;
let sParticles = [];

function resizeStudio() {
  sWidth = studioCanvas.width = window.innerWidth;
  sHeight = studioCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeStudio);
resizeStudio();

class StudioMote {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * sWidth;
    this.y = Math.random() * sHeight;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = -Math.random() * 0.5 - 0.2; // Float upwards
    this.radius = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.4 + 0.15;
    this.color = Math.random() > 0.5 ? "56, 189, 248" : "245, 158, 11";
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y < -10) this.y = sHeight + 10;
    if (this.x < -10) this.x = sWidth + 10;
    if (this.x > sWidth + 10) this.x = -10;
  }
  draw() {
    sCtx.save();
    sCtx.beginPath();
    sCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    sCtx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
    sCtx.shadowBlur = 8;
    sCtx.shadowColor = `rgba(${this.color}, 0.8)`;
    sCtx.fill();
    sCtx.restore();
  }
}

for (let i = 0; i < 40; i++) sParticles.push(new StudioMote());

function animateStudio() {
  sCtx.clearRect(0, 0, sWidth, sHeight);
  sParticles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateStudio);
}
animateStudio();

/* ========================================================
   CANVAS CONFETTI
   ======================================================== */
const confettiCanvas = document.getElementById('confetti-canvas');
const confettiCtx = confettiCanvas.getContext('2d');
let confettiParticles = [];
let confettiAnimId = null;

function resizeConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeConfetti);
resizeConfetti();

function launchConfetti(count = 50) {
  const colors = ['#f59e0b', '#38bdf8', '#10b981', '#ec4899', '#ffffff', '#eab308'];
  for (let i = 0; i < count; i++) {
    confettiParticles.push({
      x: confettiCanvas.width * (0.2 + Math.random() * 0.6),
      y: confettiCanvas.height * 0.4,
      vx: (Math.random() - 0.5) * 14,
      vy: -Math.random() * 12 - 4,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }
  if (!confettiAnimId) animateConfetti();
}

function animateConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.35;
    p.vx *= 0.98;
    p.rotation += p.vRot;
    p.opacity -= 0.012;

    if (p.opacity <= 0 || p.y > confettiCanvas.height) {
      confettiParticles.splice(i, 1);
      continue;
    }

    confettiCtx.save();
    confettiCtx.globalAlpha = Math.max(0, p.opacity);
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rotation * Math.PI) / 180);
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    confettiCtx.restore();
  }

  if (confettiParticles.length > 0) {
    confettiAnimId = requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimId = null;
  }
}
