// Configuración de canciones
export interface Song {
  id: string;
  title: string;
  album: string;
  year: string;
  duration: string;
  spotifyTrackId?: string; // ID del track de Spotify (de la URL: spotify.com/track/TRACK_ID)
  spotifyUrl?: string; // URL completa del track
  image?: string; // URL de la portada del álbum
}

// Canciones de Calú
// Para obtener el trackId: ve a la canción en Spotify, copia la URL
// Ejemplo: https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC
// El trackId es: 4uLU6hMCjMI75M1A2tKUQC
export const songs: Song[] = [
  {
    id: 'no-hay-compe',
    title: 'No Hay Compe',
    album: 'No Hay Compe',
    year: '2025',
    duration: '3:47',
    spotifyTrackId: '74mBMRipJwTEFw1F25HhOI',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/74mBMRipJwTEFw1F25HhOI',
    image: 'https://i.scdn.co/image/ab67616d00001e02c790411be379aa9b09243e48'
  },
  {
    id: 'tu-nombre',
    title: 'Tu nombre',
    album: 'Tu nombre',
    year: '2025',
    duration: '3:05',
    spotifyTrackId: '0meX9z4yBcgcHc41oVzoVH',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/0meX9z4yBcgcHc41oVzoVH',
    image: 'https://i.scdn.co/image/ab67616d00001e023da21025624f662928071ad6'
  },
  {
    id: 'la-ultima-vez',
    title: 'La Última Vez',
    album: 'La Última Vez',
    year: '2024',
    duration: '3:08',
    spotifyTrackId: '5LrpIXuQrVzRJtSaHUNa8n',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/5LrpIXuQrVzRJtSaHUNa8n',
    image: 'https://i.scdn.co/image/ab67616d00001e02e7166368691a662ece62a489'
  },
  {
    id: 'tu-gata',
    title: 'Tu Gata',
    album: 'Tu Gata',
    year: '2024',
    duration: '2:41',
    spotifyTrackId: '7IieYCEirGMEVvl2B6Ts3X',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/7IieYCEirGMEVvl2B6Ts3X',
    image: 'https://i.scdn.co/image/ab67616d00001e0200a5519cb10fdba52f18bc2f'
  },
  {
    id: 'n4lgaje',
    title: 'N4lgaje',
    album: 'N4lgaje',
    year: '2024',
    duration: '2:29',
    spotifyTrackId: '0BDuDa2z9MVuXOPv3utWO6',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/0BDuDa2z9MVuXOPv3utWO6',
    image: 'https://i.scdn.co/image/ab67616d00001e021df521e5047b3a1f2856c04c'
  },
  {
    id: 'haciendo-oro',
    title: 'Haciendo Oro',
    album: 'Haciendo Oro',
    year: '2023',
    duration: '3:04',
    spotifyTrackId: '5cdTl3FrzFrPaO9lORc7IG',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/5cdTl3FrzFrPaO9lORc7IG',
    image: 'https://i.scdn.co/image/ab67616d00001e02e411e7883312990333e56d5e'
  },
  {
    id: 'sere-tu-abrigo',
    title: 'Seré Tu Abrigo',
    album: 'Seré Tu Abrigo',
    year: '2023',
    duration: '3:19',
    spotifyTrackId: '4awf8WjFJzJVmXdNU54T1m',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/4awf8WjFJzJVmXdNU54T1m',
    image: 'https://i.scdn.co/image/ab67616d00001e027cda3481263694c797eae3df'
  },
  {
    id: 'la-jugadora',
    title: 'La Jugadora',
    album: 'La Jugadora',
    year: '2023',
    duration: '3:26',
    spotifyTrackId: '2L6rUsJjuYsa8oSwtEVTAN',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/2L6rUsJjuYsa8oSwtEVTAN',
    image: 'https://i.scdn.co/image/ab67616d00001e02e8d8e451b738b3d586f2f216'
  },
  {
    id: 'turn-off-the-lights',
    title: 'Turn off The Lights',
    album: 'Turn off The Lights',
    year: '2023',
    duration: '4:13',
    spotifyTrackId: '7wP3v4C9ORKbR8YW2niKQ1',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/7wP3v4C9ORKbR8YW2niKQ1',
    image: 'https://i.scdn.co/image/ab67616d00001e0208220551594969d1cde173e6'
  },
  {
    id: 'sin-freno',
    title: 'Sin Freno',
    album: 'Sin Freno',
    year: '2023',
    duration: '3:03',
    spotifyTrackId: '5KRNjsXj8LIEn8d5dqdWk5',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/5KRNjsXj8LIEn8d5dqdWk5',
    image: 'https://i.scdn.co/image/ab67616d00001e025bee207d9da5ad6af1214921'
  },
  {
    id: 'gane-el-juego',
    title: 'Gané el Juego',
    album: 'Gané el Juego',
    year: '2023',
    duration: '3:13',
    spotifyTrackId: '1uGj3rDsNbwg2U38tIAUaJ',
    spotifyUrl: 'https://open.spotify.com/intl-es/track/1uGj3rDsNbwg2U38tIAUaJ',
    image: 'https://i.scdn.co/image/ab67616d00001e020a719ec2ecbb1df98613d6e3'
  },
  {
    id: 'vas-a-ser-mio',
    title: 'Vas a Ser Mío',
    album: 'Vas a Ser Mío',
    year: '2023',
    duration: '3:46',
    spotifyTrackId: '1rrHZ1iqCJSmY60SNE9goe', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/1rrHZ1iqCJSmY60SNE9goe',
    image: 'https://i.scdn.co/image/ab67616d00001e0271a8d48a7e022b3bcde5ce6b'
  },
  {
    id: 'dependencia',
    title: 'Dependencia',
    album: 'Dependencia',
    year: '2022',
    duration: '2:43',
    spotifyTrackId: '70aK3BaJAgOB5Gh3fK05q4', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/70aK3BaJAgOB5Gh3fK05q4',
    image: 'https://i.scdn.co/image/ab67616d00001e02e0d8d1ee5522dedc95e8e408'
  },
  {
    id: 'no-puedo-obligarte',
    title: 'No Puedo Obligarte',
    album: 'No Puedo Obligarte',
    year: '2022',
    duration: '3:04',
    spotifyTrackId: '38B35yHz8XlBAwNmuauV7w', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/38B35yHz8XlBAwNmuauV7w',
    image: 'https://i.scdn.co/image/ab67616d00001e02ff779aa4d27caaeeee498a5c'
  },
  {
    id: 'ritual',
    title: 'Ritual',
    album: 'Ritual',
    year: '2022',
    duration: '3:11',
    spotifyTrackId: '2JGb5vImRtuUAZWTzGb968', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/2JGb5vImRtuUAZWTzGb968',
    image: 'https://i.scdn.co/image/ab67616d00001e028b2ff438abf76268be4f1ce4'
  },
  {
    id: 'irma',
    title: 'Irma',
    album: 'Irma',
    year: '2021',
    duration: '2:41',
    spotifyTrackId: '2FjJuqmIrQLdMxbaCR6ssC', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/2FjJuqmIrQLdMxbaCR6ssC',
    image: 'https://i.scdn.co/image/ab67616d00001e0256f04264119f715e4ba3aa08'
  },
  {
    id: 'castillo',
    title: 'Castillo',
    album: 'Castillo',
    year: '2021',
    duration: '3:15',
    spotifyTrackId: '0zUjsqsdz1Cu5CD2IJLUL2', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/0zUjsqsdz1Cu5CD2IJLUL2',
    image: 'https://i.scdn.co/image/ab67616d00001e021feb50f1411f1e2f3c7cd2b2'
  },
  {
    id: 'one-kiss',
    title: 'One Kiss',
    album: 'One Kiss',
    year: '2021',
    duration: '2:50',
    spotifyTrackId: '0Gqe9XLNaURwfe0VIFZnN2', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/0Gqe9XLNaURwfe0VIFZnN2',
    image: 'https://i.scdn.co/image/ab67616d00001e027e149ca4ed2cc20a5473fa91'
  },
  {
    id: 'ilusion',
    title: 'Ilusión',
    album: 'Ilusión',
    year: '2021',
    duration: '3:49',
    spotifyTrackId: '3VBM2BgIqHKal5XwgT1pKy', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/3VBM2BgIqHKal5XwgT1pKy',
    image: 'https://i.scdn.co/image/ab67616d00001e02fd02f1c29243bbecdfcb6f23'
  },
  {
    id: 'naufraga',
    title: 'Naufraga',
    album: 'Naufraga',
    year: '2020',
    duration: '3:39',
    spotifyTrackId: '2nccvhfWV87SWX4Zfj2cmJ', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/2nccvhfWV87SWX4Zfj2cmJ',
    image: 'https://i.scdn.co/image/ab67616d00001e0255d2311865506a646672e3c9'
  },
  {
    id: 'instagram',
    title: 'Instagram',
    album: 'Instagram',
    year: '2020',
    duration: '3:30',
    spotifyTrackId: '2Ju8DwOjWtxtny9xUEjcOJ', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/2Ju8DwOjWtxtny9xUEjcOJ',
    image: 'https://i.scdn.co/image/ab67616d00001e0282a16243c4afdb60db21a0ed'
  },
  {
    id: 'incontrolable',
    title: 'Incontrolable',
    album: 'Incontrolable',
    year: '2019',
    duration: '3:14',
    spotifyTrackId: '0vWpO0xOJZliE3ekN5umgA', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/0vWpO0xOJZliE3ekN5umgA',
    image: 'https://i.scdn.co/image/ab67616d00001e028c1de04c6c526fbf2ba2f3f0'
  },
  {
    id: 'leon',
    title: 'León',
    album: 'León',
    year: '2019',
    duration: '3:11',
    spotifyTrackId: '1duebUEwksxhgEvgridnYG', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/1duebUEwksxhgEvgridnYG',
    image: 'https://i.scdn.co/image/ab67616d00001e02da93e33a2327103e750afa1d'
  },
  {
    id: 'retornar',
    title: 'Retornar',
    album: 'Retornar',
    year: '2019',
    duration: '3:38',
    spotifyTrackId: '3hj4Nqh7LwpvCgfv7lI3Sw', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/3hj4Nqh7LwpvCgfv7lI3Sw',
    image: 'https://i.scdn.co/image/ab67616d00001e02ff3a3fdc4f6f842497b31f8b'
  }
];

// Función para extraer trackId de una URL de Spotify
export function extractTrackId(url: string): string {
  const regex = /track\/([a-zA-Z0-9]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}

