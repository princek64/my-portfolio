export type PexelsPhoto = {
  id: number;
  url: string;
  alt: string;
  width: number;
  height: number;
  pexelsUrl: string;
};

const PHOTOGRAPHER_NAME = "prince kukreja";

/**
 * Pexels' API has no endpoint to list a photographer's photos — only free-text
 * search (which doesn't reliably surface these, since it ranks by content
 * relevance, not photographer identity) or lookup by known photo ID. These IDs
 * were collected from https://www.pexels.com/@prince-kukreja-166602331/ and
 * should be updated here whenever new photos are published there.
 */
const PHOTO_IDS = [
  35319454, 35319453, 35319452, 35319451, 35319449, 35134043, 35134042,
  35134041, 34945531, 34945449, 34945448, 34945446, 34945445, 34945444,
  34945443, 34945442, 34945441, 34945440, 18575617, 18575556, 18575366,
  18575325, 10971130, 10971127, 10971126, 10971124, 10971123, 10971122,
  10971121, 10971120, 10971119, 10971118, 10918302, 10918251,
];

async function fetchPhoto(id: number, apiKey: string) {
  try {
    const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
      headers: { Authorization: apiKey },
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function getPexelsPhotos(): Promise<PexelsPhoto[]> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) return [];

  const photos = await Promise.all(PHOTO_IDS.map((id) => fetchPhoto(id, apiKey)));

  return photos
    .filter(
      (photo: any) =>
        photo &&
        typeof photo.photographer === "string" &&
        photo.photographer.trim().toLowerCase() === PHOTOGRAPHER_NAME
    )
    .map((photo: any) => ({
      id: photo.id,
      url: photo.src?.large || photo.src?.original,
      alt: photo.alt || "",
      width: photo.width,
      height: photo.height,
      pexelsUrl: photo.url,
    }));
}
