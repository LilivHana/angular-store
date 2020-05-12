interface ShopLink {
  path: string;
  description: string;
}

export default interface ShopHomeCarouselI {
  img: string;
  title: string;
  subtitle?: string;
  description?: string;
  link: ShopLink;
  template?: string;
}
