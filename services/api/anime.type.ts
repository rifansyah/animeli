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
  trailer?: Trailer;
  approved: boolean;

  titles: Title[];
  title: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms: string[];

  type: "TV" | "Movie" | "OVA" | "Special" | "ONA" | "Music" | (string & {});
  source?: string;
  episodes?: number;
  status:
    | "Finished Airing"
    | "Currently Airing"
    | "Not yet aired"
    | (string & {});
  airing: boolean;

  aired: Aired;

  duration?: string;
  rating?: string;
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: number;

  synopsis?: string;
  background?: string;

  season?: "spring" | "summer" | "fall" | "winter" | (string & {});
  year?: number;
  broadcast?: Broadcast;

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
  youtube_id?: string;
  url?: string;
  embed_url?: string;
  images?: {
    image_url?: string;
    small_image_url?: string;
    medium_image_url?: string;
    large_image_url?: string;
    maximum_image_url?: string;
  };
}

export interface Title {
  type: "Default" | "English" | "Japanese" | (string & {});
  title: string;
}

export interface Aired {
  from: string;
  to: string;
  prop: {
    from: DateProp;
    to: DateProp;
  };
  string: string;
}

export interface DateProp {
  day: number;
  month: number;
  year: number;
}

export interface Broadcast {
  day?: string; // e.g., "Saturdays"
  time?: string; // e.g., "01:00"
  timezone?: string; // e.g., "Asia/Tokyo"
  string?: string; // e.g., "Saturdays at 01:00 (JST)"
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

export interface AnimeByIDResponse {
  data: Anime;
}
