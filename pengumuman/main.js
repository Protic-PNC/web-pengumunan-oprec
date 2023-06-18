const users = [{
    "nim": "220302012",
    "nama": "Josefh Imanuel Cristian Rombot",
    "divisi": "Kominfo",
    "lolos": true
  },
  {
    "nim": "220102079",
    "nama": "Chinta Sejatining Fitriana",
    "divisi": "UI/UX",
    "lolos": true
  },
  {
    "nim": "220102065",
    "nama": "Nira Ihsani Hanifah",
    "divisi": "Humas",
    "lolos": false
  },
  {
    "nim": "220302045",
    "nama": "Safinka Nurin Sabrina",
    "divisi": "Sekertaris",
    "lolos": true
  },
  {
    "nim": "220202083",
    "nama": "FAJAR DWI JUNIANTO",
    "divisi": "UI/UX",
    "lolos": true
  },
  {
    "nim": "220302049",
    "nama": "Achmad Choerul Ramdhani",
    "divisi": "Web Developer",
    "lolos": true
  },
  {
    "nim": "220302022",
    "nama": "Rayhan Afrizal Fajri",
    "divisi": "UI/UX",
    "lolos": true
  },
  {
    "nim": "220102007",
    "nama": "Fardan Nurhidayat",
    "divisi": "Web Developer",
    "lolos": true
  },
  {
    "nim": "220102060",
    "nama": "LUTFIYA AINURRAHMAN PRASETYO",
    "divisi": "UI/UX",
    "lolos": true
  },
  {
    "nim": "220302093",
    "nama": "Satria Yudha Pangrangau",
    "divisi": "Kominfo",
    "lolos": true
  },
  {
    "nim": "220302008",
    "nama": "FARIANI VINITA TAMONOB",
    "divisi": "Humas",
    "lolos": true
  },
  {
    "nim": "220102010",
    "nama": "Gita Listiani Putri",
    "divisi": "Mobile Developer",
    "lolos": true
  },
  {
    "nim": "220303077",
    "nama": "Andika Bastian",
    "divisi": "Mobile Developer",
    "lolos": true
  },
  {
    "nim": "220302088",
    "nama": "Mas Dzuky Ar-Rouf",
    "divisi": "Web Developer",
    "lolos": true
  },
  {
    "nim": "220302082",
    "nama": "Evan Arlen Handy",
    "divisi": "Data",
    "lolos": true
  },
  {
    "nim": "220202095",
    "nama": "TRIKO NANDA PANGESTU",
    "divisi": "PSDA",
    "lolos": false
  },
  {
    "nim": "220302066",
    "nama": "Novita Dian Safitri",
    "divisi": "Data",
    "lolos": true
  },
  {
    "nim": "220102046",
    "nama": "Syam Chaidayatullah",
    "divisi": "Kominfo",
    "lolos": true
  },
  {
    "nim": "220102013",
    "nama": "Maria Ine Febrianti",
    "divisi": "Humas",
    "lolos": true
  },
  {
    "nim": "220102014",
    "nama": "Meisya Anggraeni",
    "divisi": "Bendahara",
    "lolos": true
  },
  {
    "nim": "220102001",
    "nama": "Adisa Laras Pertiwi",
    "divisi": "Kominfo",
    "lolos": true
  },
  {
    "nim": "220102023",
    "nama": "Sinthia Dwi Yolandasari",
    "divisi": "Kominfo",
    "lolos": false
  },
  {
    "nim": "220309035",
    "nama": "Misbahul Khoiri",
    "divisi": "Web Developer",
    "lolos": true
  },
  {
    "nim": "220302003",
    "nama": "Aulia Nabilah Zahwah",
    "divisi": "Bendahara",
    "lolos": false
  },
  {
    "nim": "220202004",
    "nama": "Azzahra Rikha Nur Aini",
    "divisi": "Data",
    "lolos": true
  },
  {
    "nim": "220102059",
    "nama": "Kaila Nazael Eka Melia",
    "divisi": "Humas",
    "lolos": true
  },
  {
    "nim": "220202076",
    "nama": "Alifia",
    "divisi": "Data",
    "lolos": true
  }
]


function cekHasil() {
  const nimInput = document.getElementById('nimInput').value;

  const user = users.find(user => user.nim === nimInput);

  localStorage.setItem('user', JSON.stringify(user));
  window.location.href = 'pengumuman.html';

}