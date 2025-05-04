declare interface Item {
  id: number;
  name: string;
  uri: string | any;
  price: number;
}

declare interface itemContainerProps {
  title: string;
  data: Item[];
}
