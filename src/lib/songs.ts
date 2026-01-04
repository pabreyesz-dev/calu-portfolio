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
    id: 'vas-a-ser-mio',
    title: 'Vas a Ser Mío',
    album: 'La Jugadora',
    year: '2023',
    duration: '3:45',
    spotifyTrackId: '', // Agregar trackId aquí
    spotifyUrl: 'https://open.spotify.com/track/...',
    image: 'https://i.scdn.co/image/...' // URL de la portada
  },
  {
    id: 'tu-gata',
    title: 'Tu Gata',
    album: 'Tu Gata',
    year: '2024',
    duration: '3:20',
    spotifyTrackId: '', // Agregar trackId aquí
    spotifyUrl: 'https://open.spotify.com/track/...',
    image: 'https://i.scdn.co/image/...'
  },
  {
    id: 'sin-freno',
    title: 'Sin Freno',
    album: 'Sin Freno',
    year: '2024',
    duration: '3:15',
    spotifyTrackId: '', // Agregar trackId aquí
    spotifyUrl: 'https://open.spotify.com/track/...',
    image: 'https://i.scdn.co/image/...'
  },
  {
    id: 'la-jugadora',
    title: 'La Jugadora',
    album: 'La Jugadora',
    year: '2023',
    duration: '3:30',
    spotifyTrackId: '', // Agregar trackId aquí
    spotifyUrl: 'https://open.spotify.com/track/...',
    image: 'https://i.scdn.co/image/...'
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

