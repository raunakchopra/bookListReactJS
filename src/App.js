import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "./components/Heading";
import Input from "./components/Input";
function App() {
  const { register, handleSubmit } = useForm();

  const [books, setBooks] = useState([]);
  const onSubmit = (data) => {
    setBooks((prev) => [...prev, data]);
  };

  const InputLabels = [
    {
      labelName: "Title",
    },
    {
      labelName: "Author",
    },
    {
      labelName: "ISBN",
    },
  ];

  const deleteBook = (bookNum) => {
    setBooks(books.filter((book) => books[bookNum] !== book));
  };

  return (
    <div className="container mt-4">
      <Heading />
      <form onSubmit={handleSubmit(onSubmit)}>
        {InputLabels.map((InpLab) => (
          <Input Ref={register} name={InpLab.labelName} />
        ))}
        <input
          type="submit"
          className="btn btn-primary btn-block"
          placeholder="AddBook"
        />
      </form>
      <table class="table table-striped mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN#</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr>
              <td>{book.Title}</td>
              <td>{book.Author}</td>
              <td>{book.ISBN}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm delete"
                  onClick={() => deleteBook(index)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
