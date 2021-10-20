
import React from "react";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";

class App extends React.Component {

  constructor(){
    super();
    this.state={
        products:[
            {
                name:'Phone',
                price:69999,
                qty:1,
                url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPax2LmVwbbWTtd_HddxEv5DKrASG0Ylcw8w&usqp=CAU',
                id:1
            },
            {
                name:'Watch',
                price:6099,
                qty:1,
                url:'https://media.gq-magazine.co.uk/photos/5fca181eea319833403830dc/master/w_2121,h_1414,c_limit/04112020_Watches_14.jpg',
                id:2
            },
            {
                name:'Laptop',
                price:79999,
                qty:1,
                url:'https://m.media-amazon.com/images/I/61OvV27-44L._AC_SL1500_.jpg',
                id:3
            }
        ]
    }

}

handleIncreaseQty=(product)=>{
    console.log('increase qty of ',product);
    const {products}=this.state;
    let index=products.indexOf(product);
    products[index].qty+=1;

    this.setState({
        products:products
    })
}

handleDecreaseQty=(product)=>{
    console.log('decrease qty of ',product);
    const {products}=this.state;
    let index=products.indexOf(product);

    if(products[index].qty===0){
        return;
    }
    products[index].qty-=1;

    this.setState({
        products:products
    })
}

handleDelete=(id)=>{
    const {products}=this.state;

    const items=products.filter((items)=> items.id !== id);

    this.setState({
        products:items
    })
}

getCartCount=()=>{
  const {products}=this.state;
  let count=0;

  products.forEach((product)=>{
    count+=product.qty;
  })

  return count;
}

getTotal=()=>{
  const {products}=this.state;

  let total=0;

  products.forEach((product)=>{
    total+=((product.price)*(product.qty));
  })

  return total;
  
}

  render(){

    const {products}=this.state;
        return (
          <div className="App">
              <Navbar count={this.getCartCount()}/>
              <Cart products={products}
                  onIncreaseQuantity={this.handleIncreaseQty} 
                  onDecreaseQuantity={this.handleDecreaseQty}
                  onDelete={this.handleDelete}/>
              <div style={{padding:10, fontSize:20}}>Total : {this.getTotal()}</div>
          </div>
        );
  }
  }


export default App;
