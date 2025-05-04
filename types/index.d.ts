declare interface Item {
  id: number;
  name: string;
  uri: string;
  price: number;
}

declare interface itemContainerProps {
  title: string;
  data: Item[];
}
