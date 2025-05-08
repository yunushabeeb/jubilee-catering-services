declare interface Item {
  id: number;
  name: string;
  uri: string | any;
  price: number;
  category: string;
  department: 'drink' | 'food';
}

declare interface itemContainerProps {
  title: string;
  data: Item[];
}
