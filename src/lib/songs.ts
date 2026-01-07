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
    id: 'libre-por-la-ciudad',
    title: 'Libre por la Ciudad',
    album: 'Liberación',
    year: '2018',
    duration: '4:00',
    spotifyTrackId: '', // Agregar trackId aquí
    spotifyUrl: 'https://open.spotify.com/track/...',
    image: 'https://i.scdn.co/image/...'
  }
];

// Función para extraer trackId de una URL de Spotify
export function extractTrackId(url: string): string {
  const regex = /track\/([a-zA-Z0-9]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}

