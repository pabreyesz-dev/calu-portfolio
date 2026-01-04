// Endpoint para obtener álbumes de Spotify
// Nota: En producción, deberías usar un token de acceso de Spotify
// Por ahora, usaremos datos estáticos basados en la información pública

export interface Album {
  id: string;
  name: string;
  image: string;
  releaseDate: string;
  spotifyUrl: string;
  type: 'album' | 'single';
}

// Datos de álbumes basados en la información de Spotify
export const albums: Album[] = [
  {
    id: 'no-hay-compe',
    name: 'No Hay Compe',
    image: 'https://i.scdn.co/image/ab67616d0000b273...', // URL de la imagen de Spotify
    releaseDate: '2025',
    spotifyUrl: 'https://open.spotify.com/album/...',
    type: 'single'
  },
  {
    id: 'tu-nombre',
    name: 'Tu nombre',
    image: 'https://i.scdn.co/image/ab67616d0000b273...',
    releaseDate: '2025',
    spotifyUrl: 'https://open.spotify.com/album/...',
    type: 'single'
  },
  {
    id: 'la-ultima-vez',
    name: 'La Última Vez',
    image: 'https://i.scdn.co/image/ab67616d0000b273...',
    releaseDate: '2024',
    spotifyUrl: 'https://open.spotify.com/album/...',
    type: 'single'
  },
  {
    id: 'sie7e-oros',
    name: 'Sie7e Oros',
    image: 'https://i.scdn.co/image/ab67616d0000b273...',
    releaseDate: '2024',
    spotifyUrl: 'https://open.spotify.com/album/...',
    type: 'album'
  },
  {
    id: 'la-jugadora',
    name: 'La Jugadora',
    image: 'https://i.scdn.co/image/ab67616d0000b273...',
    releaseDate: '2023',
    spotifyUrl: 'https://open.spotify.com/album/...',
    type: 'album'
  },
  {
    id: 'la-emperatriz',
    name: 'La Emperatriz',
    image: 'https://i.scdn.co/image/ab67616d0000b273...',
    releaseDate: '2022',
    spotifyUrl: 'https://open.spotify.com/album/...',
    type: 'album'
  },
  {
    id: 'liberacion',
    name: 'Liberación',
    image: 'https://i.scdn.co/image/ab67616d0000b273...',
    releaseDate: '2018',
    spotifyUrl: 'https://open.spotify.com/album/...',
    type: 'album'
  }
];

export async function GET() {
  // En producción, aquí harías una llamada a la API de Spotify
  // Por ahora, retornamos los datos estáticos
  return new Response(JSON.stringify(albums), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

