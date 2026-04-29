/**
 * ╔══════════════════════════════════════════════════╗
 * ║         YOUR PERSONAL DATA FILE                 ║
 * ║  Edit this file to add your music & presets     ║
 * ╚══════════════════════════════════════════════════╝
 *
 * HOW TO ADD MUSIC:
 * - Add song objects to the MUSIC_TRACKS array below
 * - 'src' can be a relative path (e.g., "songs/mysong.mp3")
 *   or a full URL to an audio file
 * - Supported formats: mp3, ogg, wav, m4a
 *
 * HOW TO ADD DEFAULT TASKS:
 * - Add task strings to DEFAULT_TASKS
 * - These only appear on first launch (won't override saved data)
 *
 * HOW TO ADD REMINDERS:
 * - Add reminder objects to DEFAULT_REMINDERS
 * - These only appear on first launch
 */

window.MYDATA = {

  // ─── MUSIC TRACKS ────────────────────────────────
  // Add your songs here. 'src' = path or URL to audio file.
  MUSIC_TRACKS: [
    {
      title: "PAGAL",
      artist: "BADSHAH",
      src: "music/pagal_badshah.m4a",           // e.g. "music/morning.mp3" or full URL
      cover: "https://c.saavncdn.com/831/Paagal-Hindi-2019-20190709070816-500x500.jpg"          // optional: path/URL to cover art image
    },
    {
      title: "Ishare Tere",
      artist: "Guru Randhawa & Dhvani Bhanusali",
      src: "music/IshareTere_gururandhawa.m4a",
      cover: ""
    },
    {
      title: "Bom Digy Digy",
      artist: "Jasmin Walia and Zack Knight",
      src: "music/Bom_digydigy.m4a",
      cover: "https://i.scdn.co/image/ab67616d0000b27382f0b09ca518a1563175ed85"
    },
    {
      title: "Rap God",
      artist: "Yo Yo Honey Singh",
      src: "music/Rap God - Yo Yo Honey Singh.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "BONITA",
      artist: "Yo Yo Honey Singh & The Shams",
      src: "music/Bonita - Yo Yo Honey Singh.mp3",
      cover: "https://assets.telegraphindia.com/telegraph/2024/Sep/1725883332_listen.jpg"
    },
    {
      title: "Aashiqana",
      artist: "Chaar Diwaari, Gini, Indian Ocean",
      src: "music/Aashiqana.mp3",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7a/0d/a3/7a0da341-8769-4b81-b3d5-a85a5f630929/26UMGIM21264.rgb.jpg/600x600cc.webp"
    },
    {
      title: "Iss tarah",
      artist: "Sonu Nigam, Chaar Diwaari",
      src: "music/Iss Tarah.mp3",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7a/0d/a3/7a0da341-8769-4b81-b3d5-a85a5f630929/26UMGIM21264.rgb.jpg/600x600cc.webp"
    },
    {
      title: "Boom Shaka",
      artist: "Dhanda Nyoliwala, KRSNA",
      src: "music/Boom Shaka.mp3",
      cover: "https://i.scdn.co/image/ab67616d0000b27313dcb5da9470852eb67f1783"
    },
    {
      title: "Fubu",
      artist: "Ikka & Sez On The Beat",
      src: "music/Fubu.mp3",
      cover: "https://i.scdn.co/image/ab67616d0000b273e1eaa44280c38ffa982211ac"
    },
    {
      title: "Ambulance",
      artist: "Ikka & Sez On The Beat",
      src: "music/Ambulance.mp3",
      cover: "https://i.scdn.co/image/ab67616d0000b273e1eaa44280c38ffa982211ac"
    },
    {
      title: "Art Samajh Aata Nahi",
      artist: "Ikka & Sez On The Beat",
      src: "music/Art Samajh Aata Nahi.mp3",
      cover: "https://i.scdn.co/image/ab67616d0000b273e1eaa44280c38ffa982211ac"
    },
    {
      title: "Dogs & Snakes",
      artist: "Ikka & Sez On The Beat",
      src: "music/Dogs N Snakes.mp3",
      cover: "https://i.scdn.co/image/ab67616d0000b273e1eaa44280c38ffa982211ac"
    },
    {
      title: "Sunta Hoon Rawal",
      artist: "Ikka & Sez On The Beat",
      src: "music/Sunta Hoon Rawal.mp3",
      cover: "https://i.scdn.co/image/ab67616d0000b273e1eaa44280c38ffa982211ac"
    },
    {
      title: "Nishu",
      artist: "Ikka",
      src: "music/Nishu Ikka 320 Kbps.mp3",
      cover: "https://c.saavncdn.com/309/Nishu-Hindi-2022-20220718190901-500x500.jpg"
    },
    {
      title: "Trap Praa",
      artist: "Raftaar & Prabh Deep",
      src: "music/Trap Praa.mp3",
      cover: "https://c.saavncdn.com/201/PRAA-Hindi-2023-20230222112849-500x500.jpg"
    },
    {
      title: "6 Am",
      artist: "Yo Yo Honey Singh",
      src: "music/6 Am.mp3",
      cover: "https://i.ytimg.com/vi/I5iCw4CIpAU/maxresdefault.jpg"
    },
    {
      title: "Beeba",
      artist: "Yo Yo Honey Singh",
      src: "music/Beeba.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "Caliente",
      artist: "Yo Yo Honey Singh",
      src: "music/Caliente.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "Chhori",
      artist: "Yo Yo Honey Singh",
      src: "music/Chhori.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "Fuck Them",
      artist: "Yo Yo Honey Singh",
      src: "music/Fuck Them.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "Hide It",
      artist: "Yo Yo Honey Singh",
      src: "music/Hide It.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "High On Me",
      artist: "Yo Yo Honey Singh",
      src: "music/High On Me.mp3",
      cover: "https://i1.sndcdn.com/artworks-kaib2D7pPXAXXTFq-QX1OPQ-t500x500.jpg"
    },
    {
      title: "Jatt Mehkma",
      artist: "Yo Yo Honey Singh",
      src: "music/Jatt Mehkma.mp3",
      cover: "https://i1.sndcdn.com/artworks-SMIFjYvlhy3jA1bM-UwIzsg-t1080x1080.jpg"
    },
    {
      title: "Lapata",
      artist: "Yo Yo Honey Singh",
      src: "music/Lapata.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "Majnoonh",
      artist: "Yo Yo Honey Singh",
      src: "music/Majnoonh.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "Malamaal",
      artist: "Yo Yo Honey Singh",
      src: "music/Malamaal.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "Millionaire",
      artist: "Yo Yo Honey Singh",
      src: "music/Millionaire.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "Payal",
      artist: "Yo Yo Honey Singh",
      src: "music/Payal.mp3",
      cover: "https://i.ytimg.com/vi/z7DspJtP958/maxresdefault.jpg"
    },
    {
      title: "Rounds N Ring",
      artist: "Yo Yo Honey Singh",
      src: "music/Rounds N Ring.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "Shamaan De Vele",
      artist: "Yo Yo Honey Singh",
      src: "music/Shamaan De Vele.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    {
      title: "Sheeshe Wali Chunni",
      artist: "Yo Yo Honey Singh",
      src: "music/Sheeshe Wali Chunni.mp3",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsc1XQM4haSJd7HMUEoOAFxBBfkwslmLmAQ&s"
    },
    // Add more tracks below:
    // { title: "Song Name", artist: "Artist", src: "path/to/file.mp3", cover: "" },
  ],

  // ─── DEFAULT TASKS (first launch only) ──────────
  DEFAULT_TASKS: [
    "Plan your day",
    "Review goals",
    "Take a break"
  ],

  // ─── DEFAULT REMINDERS (first launch only) ───────
  DEFAULT_REMINDERS: [
    { text: "Drink water", time: "09:00" },
    { text: "Stretch break", time: "12:00" },
    { text: "End of workday review", time: "18:00" }
  ],

  // ─── APP SETTINGS ────────────────────────────────
  SETTINGS: {
    appName: "Focus",             // Shown in the header
    accentColor: "#6C63FF",       // Main accent color (hex)
    theme: "auto"                 // "light", "dark", or "auto"
  }

};
