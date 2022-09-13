import React from 'react'
import Landing from '../components/Landing'
import Products from '../components/Products'
import Search from '../components/Search';
export const getStaticProps = async () => {
  const res = await fetch("https://63189f2cf6b281877c71eab0.mockapi.io/products");
  const data = await res.json();
  return {
    props: { products: data },
  };
};


Products
const index = ({products}) => {
  return (
    <div>
      <Landing/>
      <Products data={products}>
      <h1 className="text-4xl font-bold text-center">Explore Products</h1>
      </Products>
      <Search/>
    </div>
  )
}

export default index
