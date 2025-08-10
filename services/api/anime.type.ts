export interface AnimeListApiResponse {
  pagination: ApiPagination;
  data: Anime[];
}

export interface ApiPagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface Anime {
  mal_id: number;
  url: string;
  images: AnimeImages;
  trailer?: Trailer | null;
  approved: boolean;

  titles: Title[];
  title: string;
  title_english?: string | null;
  title_japanese?: string | null;
  title_synonyms: string[];

  type: "TV" | "Movie" | "OVA" | "Special" | "ONA" | "Music" | (string & {});
  source?: string | null;
  episodes?: number | null;
  status:
    | "Finished Airing"
    | "Currently Airing"
    | "Not yet aired"
    | (string & {});
  airing: boolean;

  aired: Aired;

  duration?: string | null;
  rating?: string | null;
  score?: number | null;
  scored_by?: number | null;
  rank?: number | null;
  popularity?: number | null;
  members?: number | null;
  favorites?: number | null;

  synopsis?: string | null;
  background?: string | null;

  season?: "spring" | "summer" | "fall" | "winter" | (string & {}) | null;
  year?: number | null;
  broadcast?: Broadcast | null;

  producers: Entity[];
  licensors: Entity[];
  studios: Entity[];

  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
}

// Images
export interface AnimeImages {
  jpg: ImageVariant;
  webp: ImageVariant;
}

export interface ImageVariant {
  image_url: string;
  small_image_url?: string;
  large_image_url?: string;
}

export interface Trailer {
  youtube_id?: string | null;
  url?: string | null;
  embed_url?: string | null;
  images?: {
    image_url?: string | null;
    small_image_url?: string | null;
    medium_image_url?: string | null;
    large_image_url?: string | null;
    maximum_image_url?: string | null;
  };
}

export interface Title {
  type: "Default" | "English" | "Japanese" | (string & {});
  title: string;
}

export interface Aired {
  from: string | null;
  to: string | null;
  prop: {
    from: DateProp;
    to: DateProp;
  };
  string: string;
}

export interface DateProp {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface Broadcast {
  day?: string | null; // e.g., "Saturdays"
  time?: string | null; // e.g., "01:00"
  timezone?: string | null; // e.g., "Asia/Tokyo"
  string?: string | null; // e.g., "Saturdays at 01:00 (JST)"
}

export interface Entity {
  mal_id: number;
  type: "anime" | (string & {});
  name: string;
  url: string;
}

export interface Genre {
  mal_id: number;
  type: "anime" | (string & {});
  name: string;
  url: string;
  count?: number;
}

export interface GenreListApiResponse {
  data?: Genre[];
}
