import React, { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data';
import Card from './components/Card';
import './Index.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItem = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  //------Radio filter-----
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //------Buttons filter-------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering input items
    if (query) {
      filteredProducts = filteredItem;
    }

    // Filtering by selected category, color, company, etc.
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice.toString() === selected || // convert price to string if needed
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, newPrice, reviews, prevPrice }, index) => (
        <Card
          key={index} // better than Math.random() (still not ideal; use unique id if available)
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default App;
