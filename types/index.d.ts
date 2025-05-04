interface Item {
  name: string;
  uri: string;
  price: string;
}

declare interface itemContainerProps {
  title: string;
  data: Item[];
}
