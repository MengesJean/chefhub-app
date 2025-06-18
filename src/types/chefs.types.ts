export interface Chef {
  id: string;
  firstname: string;
  lastname: string;
  slug: string;
  profile_image_url: string;
}

export interface ChefProfile extends Chef {
  locations: ChefLocation[];
  food_types: FoodType[];
  average_rating: number;
  reviews_count: number;
}

export interface FoodType {
  id: string;
  name: string;
}

export interface ChefLocation {
  city_name: string;
  latitude: number;
  longitude: number;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface ChefResponse {
  current_page: number;
  data: ChefProfile[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
