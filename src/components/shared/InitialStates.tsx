
import {
  IAuthor,
  IBookSelectedCuration,
  ICuration,
  IReview,
  IReviewBook,
  IReviewSearchWithBooks,
    IUserInfo
} from "./Types";


export const author: IAuthor = {
  _id: "",
  image: "",
  name: "",
  profile: ""
};

export const curations: ICuration[] = [
  {
    _id: "",
    author,
    contents: "",
    likes: [""],
    title: ""
  }
];

export const reviews: IReview[] = [
  {
    _id: "",
    author,
    contents: "",
    likes: [""],
    published: true,
    thumbnail: "",
    title: ""
  }
];

export const reviewsBooks: IReviewBook[][] = [
  [
    {
      _id: "",
      thumbnail: "",
      title: ""
    }
  ]
];


export const selectedBooksForCuration: IBookSelectedCuration[] = [
  {
    _id: "",
    authors: "",
    thumbnail: "",
    title: ""
  }
];

export const selectedReviewsForCuration: IReviewSearchWithBooks[] = [
  {
    _id: "",
    author: {
      _id: "",
      image: "",
      name: "",
      profile: ""
    },
    books: [{ _id: "", title: "" }],
    contents: "",
    likes: [""],
    published: true,
    thumbnail: "",
    title: ""
  }
];

export const user: IUserInfo = {
  _id: "",
  email: "",
  image: "",
  name: "",
  profile: "",
  to_read: [
    {
      book: {
        _id: "",
        authors: [],
        thumbnail: "",
        title: ""
      }
    }
  ],
  reading: [
    {
      book: {
        _id: "",
        authors: [],
        thumbnail: "",
        title: ""
      },
      start: "",
      goal: ""
    }
  ],
  finished: [
    {
      book: {
        _id: "",
        authors: [""],
        thumbnail: "",
        title: ""
      },
      start: "",
      end: ""
    }
  ],
  numBooksGoal: 0,
  numReviewsGoal: 0
};

