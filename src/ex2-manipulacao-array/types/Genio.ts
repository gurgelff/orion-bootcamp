export type InfoGenios = InfoGenio[];

export interface InfoGenio {
    id: number,
    name: string,
    bio: string    
}

export type GenioProp = "name" | "bio" | "id";
