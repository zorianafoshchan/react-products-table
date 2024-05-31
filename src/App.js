import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import CounterClass from './CounterClass';
import CountFn from './CountFn';
// import { useState } from 'react';

function App() {
 let [products, setProducts] = useState(productsItem());
 console.log(products);
 let total = products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);

 let setCnt = (id, cnt) => {
  setProducts(products.map(pr => pr.id != id ? pr : ({ ...pr, cnt})))

  // let newProducts = [...products];
  // let productInd = products.findIndex(pr => pr.id == id);
  // let newProduct ={...products[productInd]}
  // newProduct[id].cnt = cnt;
  // newProducts[productInd] = newProduct;
  // setProducts(newProducts);
  // console.log(products);
 }

 let removeProduct =(id) => {
  setProducts(products.filter(el => el.id !==  id))
 }
 console.log(products);

 // let setCnt = (id, cnt) => {
 //  console.log(id, cnt);
 // }
  return (
    <div className="App">

     
     
      <header className="App-header">
     {/* <form className="form">
      <label className="label1">
       Your Name
       <input type="text" className="name" />
      </label>
      <input type="submit" value="Submit" />
     </form> */}
       <h2>Class max = 5</h2>
       <CounterClass max={5}/>
       <h2>Class max = 10</h2>
       <CounterClass max={10} />
       <h2>Function max = 10</h2>
       <CountFn min={1} max={7} />

      </header>
      <hr/>
      <br/>
      <hr/>
      <main>
       <section className='product'>
        <h1>Products list</h1>
        <table border="1">
         <tbody>
          <tr>
           <th>#</th>
           <th>Title</th>
           <th>Price</th>
           <th>Cnt</th>
           <th>Total</th>
          </tr>
          {products.map((pr,i) =>(
            <tr key={pr.id}>
             <td>{i + 1}</td>
             <td>{pr.title}</td>
             <td>{pr.price}</td>
             <td>
              <CountFn min={1} max={pr.rest} current={pr.cnt} onChange={cnt => setCnt (pr.id, cnt)}/>
             </td>
             <td>
              {pr.price * pr.cnt}
             </td>
             <td>
              <button type='button' onClick={() => removeProduct(pr.id)}>X</button>
             </td>
            </tr>
          ))}

          
         </tbody>
         <hr/>
         <p>
          Total all products  {total}
         </p>
        </table>
       </section>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;

function productsItem() {
 return [
  {
   id: 1,
   title: "iphone",
   price: 35000,
   rest: 5,
   cnt: 1,
  },
  {
   id: 2,
   title: "samsung",
   price: 6000,
   rest: 10,
   cnt: 1,
  },
  {
   id: 3,
   title: "huawei",
   price: 4000,
   rest: 3,
   cnt: 1,
  },
  {
   id: 4,
   title: "xiaomi",
   price: 8000,
   rest: 8,
   cnt: 1,
  },
 ]
}
