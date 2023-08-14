export interface IBook {
  author: string;
  cover: string;
  id: number;
  isbn: string;
  pages: number;
  published: number;
  title: string;
}

export interface ICreateBook {
  isBn: string;
}

export interface IUpdateBook {
  id: string;
  status: number;
}

export interface IBook {
  book: {
    author: string;
    cover: string;
    id: number;
    isbn: string;
    pages: number;
    published: number;
    title: string;
  };
  status: number;
}
