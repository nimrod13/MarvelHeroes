export class Hero {
  id: number;
  name: string;
  series: { available?: number, items?: [{ resourceURI: string, name: string }] };
  thumbnail: { path?: string, extension?: string };
  nickname?: string;
}
