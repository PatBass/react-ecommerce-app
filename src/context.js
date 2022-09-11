import React, {Component} from 'react';
import {storeProducts} from "./data"
import {detailProduct} from "./data"

const ProductContext = React.createContext()

export class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart: storeProducts,
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    }

    handleDetail = (id) => {
        //let tempProducts = [...this.state.products];
        const product = this.state.products.find(item => item.id === id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }

    addToCart = (id) => {
        const productExpected = this.state.products.find(item => item.id === id);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(productExpected);
        const product = tempProducts[index]
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(
            () => {
            return {products: tempProducts, cart: [...this.state.cart, product] }
        },
            () => {
                console.log(this.state)
            }    )
    }

    openModal = (id) => {
        console.log("this is openModal")
        const product = this.state.products.find(item => item.id === id)
        this.setState(()=>{
            return {modalProduct: product, modalOpen: true}
        })
    }

    closeModal = () => {
        console.log("this is closeModal")
        this.setState(()=>{
            return {modalOpen: false}
        })
    }

    increment = () => {
        console.log("This is increment function")
    }

    decrement = () => {
        console.log("This is decrement function")
    }

    removeItem = (id) => {
        console.log("This is removeItem function")
    }

    render() {
        return (
            <ProductContext.Provider
                value={
                    {
                        ...this.state,
                        handleDetail: this.handleDetail,
                        addToCart: this.addToCart,
                        openModal: this.openModal,
                        closeModal: this.closeModal,
                        increment: this.increment,
                        decrement: this.decrement,
                        removeItem: this.removeItem
                    }
                }
            >
                {this.props.children}

            </ProductContext.Provider>
        );
    }
}

export const ProductConsumer = ProductContext.Consumer;

