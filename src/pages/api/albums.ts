// Endpoint para obtener álbumes de Spotify
// Nota: En producción, deberías usar un token de acceso de Spotify
// Por ahora, usaremos datos estáticos basados en la información pública

export interface Album {
  id: string;
  name: string;
  image: string;
  releaseDate: string;
  spotifyUrl: string;
  type: 'album' | 'single' | 'ep';
}

// Álbumes de Calú - Solo álbumes completos
export const albums: Album[] = [
  {
    id: 'sie7e-oros',
    name: 'Sie7e Oros',
    image: '', // Agregar URL de la portada de Spotify
    releaseDate: '2024',
    spotifyUrl: '', // Agregar URL del álbum en Spotify
    type: 'album'
  },
  {
    id: 'la-emperatriz',
    name: 'La Emperatriz',
    image: '', // Agregar URL de la portada de Spotify
    releaseDate: '2022',
    spotifyUrl: '', // Agregar URL del álbum en Spotify
    type: 'album'
  },
  {
    id: 'liberacion',
    name: 'Liberación',
    image: '', // Agregar URL de la portada de Spotify
    releaseDate: '2018',
    spotifyUrl: '', // Agregar URL del álbum en Spotify
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

