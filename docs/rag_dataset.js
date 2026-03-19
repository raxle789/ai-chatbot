export const documents = [
  // ── PRODUK ──────────────────────────────────────────────────

  {
    id: "prod-001",
    document:
      "Laptop Axiom Pro 15 adalah laptop bisnis premium dengan layar IPS 15.6 inci resolusi 2560x1440. " +
      "Ditenagai prosesor Intel Core i7-13700H dengan RAM 32GB DDR5 dan SSD NVMe 1TB. " +
      "Baterai 80Wh mampu bertahan hingga 12 jam penggunaan normal. " +
      "Bobot hanya 1.7kg dengan bodi aluminium CNC. Dilengkapi port Thunderbolt 4, HDMI 2.1, dan USB-A 3.2. " +
      "Cocok untuk profesional yang membutuhkan performa tinggi dengan mobilitas.",
    metadata: {
      category: "laptop",
      brand: "Axiom",
      price: 22500000,
      stock: 15,
      rating: 4.7,
      warranty_years: 2,
      tags: "bisnis,premium,i7,tipis",
      added_date: "2024-01-15",
    },
  },
  {
    id: "prod-002",
    document:
      "Axiom Budget 14 adalah laptop entry-level ideal untuk pelajar dan mahasiswa. " +
      "Layar 14 inci HD dengan prosesor AMD Ryzen 5 5500U, RAM 8GB, dan SSD 512GB. " +
      "Harga terjangkau dengan performa cukup untuk browsing, mengetik, dan tugas kuliah ringan. " +
      "Baterai tahan 8 jam. Tersedia warna Silver dan Space Gray.",
    metadata: {
      category: "laptop",
      brand: "Axiom",
      price: 7800000,
      stock: 42,
      rating: 4.2,
      warranty_years: 1,
      tags: "pelajar,entry-level,ryzen,terjangkau",
      added_date: "2024-02-01",
    },
  },
  {
    id: "prod-003",
    document:
      "Headphone Studio X7 adalah headphone over-ear audiophile dengan driver 50mm bermagnet neodymium. " +
      "Respons frekuensi 20Hz–40kHz, impedansi 32 Ohm. Dilengkapi kabel detachable 1.5m dan adaptor 6.35mm. " +
      "Bantalan telinga dari kulit sintetis premium dengan memory foam. Cocok untuk mixing, mastering, dan mendengarkan musik hifi. " +
      "Tidak memiliki noise cancelling — dirancang untuk monitoring akurat.",
    metadata: {
      category: "audio",
      brand: "StudioX",
      price: 1850000,
      stock: 28,
      rating: 4.8,
      warranty_years: 1,
      tags: "audiophile,wired,studio,monitoring",
      added_date: "2024-01-20",
    },
  },
  {
    id: "prod-004",
    document:
      "Earphone TWS ZenBuds Pro memiliki fitur Active Noise Cancellation (ANC) dengan chip Qualcomm QCC5141. " +
      "Latensi ultra rendah 45ms untuk gaming. Baterai earphone 8 jam, dengan case charging total 32 jam. " +
      "Tahan air IPX5. Mendukung codec aptX Adaptive dan LDAC untuk kualitas audio hi-res wireless. " +
      "Tersedia fitur transparansi mode untuk mendengar suara lingkungan tanpa melepas earphone.",
    metadata: {
      category: "audio",
      brand: "ZenBuds",
      price: 1250000,
      stock: 61,
      rating: 4.5,
      warranty_years: 1,
      tags: "TWS,ANC,wireless,gaming,IPX5",
      added_date: "2024-03-10",
    },
  },
  {
    id: "prod-005",
    document:
      "Smartphone NovaPix 12 Ultra hadir dengan kamera utama 200MP OIS, kamera ultrawide 50MP, dan telephoto periskop 5x. " +
      "Layar AMOLED 6.8 inci 120Hz dengan kecerahan puncak 2600 nit. " +
      "Chipset Snapdragon 8 Gen 3, RAM 16GB, penyimpanan 512GB UFS 4.0. " +
      "Baterai 5500mAh dengan pengisian cepat 100W dan wireless charging 50W. " +
      "Dilindungi Gorilla Glass Victus 2 dan rating IP68.",
    metadata: {
      category: "smartphone",
      brand: "NovaPix",
      price: 18900000,
      stock: 8,
      rating: 4.9,
      warranty_years: 1,
      tags: "flagship,kamera,AMOLED,5G,IP68",
      added_date: "2024-03-01",
    },
  },
  {
    id: "prod-006",
    document:
      "Smartwatch FitPro Series 5 cocok untuk tracking kesehatan harian. " +
      "Memantau detak jantung 24/7, SpO2, tingkat stres, dan kualitas tidur secara otomatis. " +
      "GPS bawaan untuk tracking olahraga outdoor. Baterai tahan 14 hari mode normal atau 3 hari mode GPS aktif. " +
      "Layar AMOLED 1.4 inci always-on, tahan air ATM5. Kompatibel Android dan iOS.",
    metadata: {
      category: "wearable",
      brand: "FitPro",
      price: 2100000,
      stock: 35,
      rating: 4.4,
      warranty_years: 1,
      tags: "smartwatch,kesehatan,GPS,ATM5,olahraga",
      added_date: "2024-02-14",
    },
  },
  {
    id: "prod-007",
    document:
      "Monitor UltraView 27 adalah monitor 4K UHD 27 inci dengan panel IPS dan refresh rate 144Hz. " +
      "Mendukung HDR600, color gamut 99% DCI-P3, dan Delta-E kurang dari 2 sehingga akurat untuk desain grafis. " +
      "Dilengkapi USB-C PD 90W untuk charging laptop sekaligus display. " +
      "Adjustable stand dengan pivot, tilt, dan swivel. Tersertifikasi VESA 100x100.",
    metadata: {
      category: "monitor",
      brand: "UltraView",
      price: 9500000,
      stock: 20,
      rating: 4.6,
      warranty_years: 3,
      tags: "4K,IPS,144Hz,HDR,desain,USB-C",
      added_date: "2024-01-08",
    },
  },
  {
    id: "prod-008",
    document:
      "Keyboard mekanikal CompactK75 hadir dengan layout 75% yang hemat ruang meja. " +
      "Menggunakan switch Gateron Yellow pre-lubed dengan actuation force 35g — sangat ringan untuk mengetik cepat. " +
      "Backlit RGB per-key dengan controller QMK/VIA untuk kustomisasi penuh. " +
      "Plate aluminium memberikan suara 'thocky'. Hot-swappable socket, kompatibel switch MX. " +
      "Koneksi USB-C dengan kabel braided.",
    metadata: {
      category: "keyboard",
      brand: "CompactK",
      price: 1650000,
      stock: 19,
      rating: 4.7,
      warranty_years: 1,
      tags: "mekanikal,75%,RGB,QMK,hot-swap",
      added_date: "2024-02-20",
    },
  },

  // ── KEBIJAKAN TOKO ──────────────────────────────────────────

  {
    id: "policy-001",
    document:
      "Kebijakan pengembalian barang: Pelanggan dapat mengajukan pengembalian dalam 30 hari sejak tanggal pembelian. " +
      "Barang harus dalam kondisi asli, belum digunakan, dan dilengkapi semua aksesori serta kemasan original. " +
      "Untuk produk elektronik, pengembalian hanya diterima jika terdapat cacat produksi (DOA). " +
      "Refund diproses dalam 5–7 hari kerja ke metode pembayaran asal. " +
      "Biaya pengiriman pengembalian ditanggung pelanggan kecuali produk cacat.",
    metadata: {
      type: "policy",
      category: "returns",
      applies_to: "semua_produk",
      last_updated: "2024-01-01",
    },
  },
  {
    id: "policy-002",
    document:
      "Garansi produk: Semua produk elektronik dilengkapi garansi resmi dari distributor. " +
      "Garansi mencakup kerusakan akibat cacat produksi, bukan kerusakan akibat kelalaian pengguna, benturan, atau cairan. " +
      "Klaim garansi dilakukan di service center resmi brand terkait atau melalui platform kami dengan bukti pembelian. " +
      "Produk laptop mendapat garansi 1–2 tahun tergantung brand. Smartphone dan audio 1 tahun. Monitor 3 tahun. " +
      "Garansi tidak berlaku jika label segel garansi rusak atau tidak ada.",
    metadata: {
      type: "policy",
      category: "warranty",
      applies_to: "elektronik",
      last_updated: "2024-01-01",
    },
  },
  {
    id: "policy-003",
    document:
      "Kebijakan pengiriman: Pengiriman tersedia ke seluruh Indonesia. " +
      "Estimasi pengiriman: Jabodetabek 1–2 hari kerja, Jawa–Bali 2–3 hari kerja, luar Jawa 3–7 hari kerja. " +
      "Gratis ongkir untuk pembelian di atas Rp500.000 ke Jabodetabek. " +
      "Untuk pembelian di atas Rp2.000.000 gratis ongkir ke seluruh Jawa–Bali. " +
      "Tersedia pengiriman same-day untuk Jabodetabek jika order sebelum pukul 12.00 WIB. " +
      "Produk di atas Rp5.000.000 dilengkapi asuransi pengiriman otomatis.",
    metadata: {
      type: "policy",
      category: "shipping",
      applies_to: "semua_produk",
      last_updated: "2024-03-01",
    },
  },
  {
    id: "policy-004",
    document:
      "Program loyalitas TechPoints: Setiap pembelian memberikan poin reward sebesar 1% dari nilai transaksi. " +
      "100 poin = Rp1.000 diskon. Poin berlaku selama 12 bulan sejak didapat. " +
      "Member Gold (total belanja Rp10 juta/tahun) mendapat multiplier 1.5x poin dan akses early sale. " +
      "Member Platinum (Rp25 juta/tahun) mendapat multiplier 2x poin, free ongkir semua, dan dedicated customer service.",
    metadata: {
      type: "policy",
      category: "loyalty",
      applies_to: "member_terdaftar",
      last_updated: "2024-02-01",
    },
  },

  // ── PANDUAN / ARTIKEL ────────────────────────────────────────

  {
    id: "guide-001",
    document:
      "Panduan memilih laptop untuk mahasiswa: " +
      "Mahasiswa disarankan memilih laptop dengan RAM minimal 8GB untuk multitasking lancar. " +
      "SSD lebih direkomendasikan daripada HDD karena kecepatan booting dan buka aplikasi yang jauh lebih cepat. " +
      "Untuk jurusan teknik dan desain, pertimbangkan laptop dengan dedicated GPU minimal GTX 1650. " +
      "Jurusan non-teknis cukup dengan integrated graphics. " +
      "Baterai minimal 8 jam penting untuk mobilitas kampus. " +
      "Budget Rp6–10 juta sudah cukup untuk kebutuhan akademis standar.",
    metadata: {
      type: "guide",
      category: "buying_guide",
      topic: "laptop",
      audience: "mahasiswa",
      published: "2024-02-10",
    },
  },
  {
    id: "guide-002",
    document:
      "Perbedaan earphone TWS biasa vs yang support ANC: " +
      "TWS tanpa ANC cocok untuk penggunaan di lingkungan tenang atau mendengarkan musik santai. " +
      "ANC (Active Noise Cancellation) menggunakan mikrofon untuk mendeteksi dan menetralisir suara lingkungan. " +
      "ANC sangat berguna di transportasi umum, kafe ramai, atau open office. " +
      "Kelemahan ANC: konsumsi baterai lebih boros dan harga lebih mahal. " +
      "Transparansi mode adalah fitur tambahan yang memungkinkan suara luar masuk tanpa melepas earphone — ideal saat berkendara.",
    metadata: {
      type: "guide",
      category: "comparison",
      topic: "audio",
      audience: "umum",
      published: "2024-01-25",
    },
  },
  {
    id: "guide-003",
    document:
      "Tips merawat baterai laptop agar awet: " +
      "Hindari pengisian penuh 100% terus-menerus — idealnya jaga di rentang 20–80%. " +
      "Jangan biarkan baterai habis total (0%) secara rutin karena merusak siklus baterai. " +
      "Beberapa laptop modern punya fitur battery health limiter di BIOS — aktifkan jika tersedia. " +
      "Hindari penggunaan laptop di atas kasur atau bantal yang menghalangi ventilasi saat charging. " +
      "Suhu ideal baterai adalah 20–35 derajat Celsius. " +
      "Jika laptop jarang dipakai lebih dari sebulan, simpan dengan baterai di sekitar 50%.",
    metadata: {
      type: "guide",
      category: "tips",
      topic: "laptop",
      audience: "umum",
      published: "2024-03-05",
    },
  },
  {
    id: "guide-004",
    document:
      "Cara kalibrasi monitor untuk desain grafis: " +
      "Gunakan software kalibrasi seperti DisplayCAL bersama colorimeter hardware (misalnya Datacolor Spyder). " +
      "Set white point ke D65 (6500K) untuk standar web dan cetak umum. " +
      "Target gamma 2.2 untuk Windows, 2.0–2.2 untuk macOS. " +
      "Pastikan ruangan tidak terlalu terang saat kalibrasi. " +
      "Brightness sekitar 120 cd/m² cukup untuk indoor. " +
      "Lakukan kalibrasi ulang setiap 1–3 bulan karena panel LCD mengalami drift warna seiring waktu.",
    metadata: {
      type: "guide",
      category: "tutorial",
      topic: "monitor",
      audience: "profesional",
      published: "2024-02-28",
    },
  },

  // ── FAQ CUSTOMER SERVICE ─────────────────────────────────────

  {
    id: "faq-001",
    document:
      "Q: Berapa lama pengiriman ke luar Jawa? " +
      "A: Estimasi pengiriman ke luar Jawa adalah 3–7 hari kerja tergantung daerah tujuan. " +
      "Kalimantan dan Sulawesi biasanya 3–5 hari. Papua dan Maluku bisa mencapai 7–10 hari kerja. " +
      "Semua pengiriman dilengkapi nomor resi yang dapat dilacak real-time.",
    metadata: {
      type: "faq",
      category: "shipping",
      topic: "delivery_time",
    },
  },
  {
    id: "faq-002",
    document:
      "Q: Apakah bisa cicilan 0%? " +
      "A: Ya, tersedia cicilan 0% untuk pembelian di atas Rp1.500.000 menggunakan kartu kredit " +
      "BCA, Mandiri, BNI, dan CIMB Niaga dengan tenor 3, 6, dan 12 bulan. " +
      "Untuk GoPay Paylater dan Kredivo tersedia cicilan 3 bulan untuk pembelian di atas Rp500.000. " +
      "Cicilan 24 bulan tersedia khusus untuk produk laptop di atas Rp10.000.000.",
    metadata: {
      type: "faq",
      category: "payment",
      topic: "installment",
    },
  },
  {
    id: "faq-003",
    document:
      "Q: Produk yang saya terima rusak, apa yang harus dilakukan? " +
      "A: Segera dokumentasikan kondisi produk dengan foto/video saat unboxing. " +
      "Hubungi customer service kami dalam 2x24 jam setelah produk diterima melalui chat atau email cs@toko.id. " +
      "Lampirkan nomor order, foto kemasan, dan foto/video kerusakan. " +
      "Kami akan memproses penggantian atau refund dalam 1–3 hari kerja setelah verifikasi. " +
      "Jangan membuang kemasan original karena diperlukan untuk proses klaim.",
    metadata: {
      type: "faq",
      category: "returns",
      topic: "damaged_product",
    },
  },
  {
    id: "faq-004",
    document:
      "Q: Apakah semua produk bergaransi resmi? " +
      "A: Semua produk yang kami jual adalah 100% original dan bergaransi resmi distributor Indonesia. " +
      "Kami bukan reseller produk paralel (grey market). " +
      "Faktur pembelian yang kami keluarkan dapat digunakan sebagai bukti garansi di service center resmi. " +
      "Untuk produk laptop Axiom, garansi dapat dicek dan didaftarkan di website axiom.id menggunakan nomor seri.",
    metadata: {
      type: "faq",
      category: "warranty",
      topic: "official_warranty",
    },
  },

  // ── REVIEW PENGGUNA ──────────────────────────────────────────

  {
    id: "review-001",
    document:
      "Review Axiom Pro 15 dari pengguna: Sudah 3 bulan pemakaian untuk kerja sebagai video editor. " +
      "Performa render di DaVinci Resolve sangat memuaskan, jauh lebih cepat dari laptop lama saya. " +
      "Baterai memang tidak mencapai 12 jam seperti yang dijanjikan saat dipakai berat, sekitar 6–7 jam. " +
      "Tapi untuk kerja ringan bisa 10 jam lebih. Layarnya tajam dan akurat warnanya. " +
      "Satu kekurangan: speaker kurang keras untuk ukuran laptop premium.",
    metadata: {
      type: "review",
      product_id: "prod-001",
      rating: 4,
      verified_purchase: true,
      date: "2024-02-20",
    },
  },
  {
    id: "review-002",
    document:
      "Review ZenBuds Pro dari pengguna: ANC-nya luar biasa untuk harga segini. " +
      "Saya pakai di commuter line dan suara kereta nyaris hilang. " +
      "Kualitas suara bass-nya mantap tapi mid agak recessed. " +
      "Fitting di telinga saya (kecil) sempurna dengan ear tip S yang disediakan. " +
      "Latency saat nonton YouTube di Android tidak terasa, tapi di game FPS masih ada sedikit delay. " +
      "Aplikasi companion-nya agak berat dan interface kurang intuitif.",
    metadata: {
      type: "review",
      product_id: "prod-004",
      rating: 4,
      verified_purchase: true,
      date: "2024-03-15",
    },
  },
  {
    id: "review-003",
    document:
      "Review Monitor UltraView 27 dari profesional desainer: " +
      "Akurasi warna out-of-the-box sudah sangat baik, Delta-E rata-rata 1.2 berdasarkan pengukuran saya dengan Spyder X Pro. " +
      "Coverage DCI-P3 99% terkonfirmasi. HDR terasa nyata untuk panel edge-lit. " +
      "USB-C PD 90W benar-benar berguna — satu kabel untuk display, charging, dan data ke laptop. " +
      "Stand sangat kokoh dan ergonomis. Satu catatan: ada sedikit backlight bleed di sudut kiri bawah.",
    metadata: {
      type: "review",
      product_id: "prod-007",
      rating: 5,
      verified_purchase: true,
      date: "2024-02-05",
    },
  },
]
