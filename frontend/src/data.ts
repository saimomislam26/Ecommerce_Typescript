import { Product } from "./types/Product"
export const sampleProducts:Product[] = [
    {
        name: "Nike Slim Shirt",
        slug: "Nike-slim-shirt",
        category: 'Shirts',
        image:'../images/p1.jpg',
        price:1120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "High Quality Shirt"
    },
    {
        name: "Addidas Fit Shirt",
        slug: "Addidas Fit Shirt",
        category: 'Shirts',
        image:'../images/p2.jpg',
        price:1000,
        countInStock: 0,
        brand: "Addidas",
        rating: 4.8,
        numReviews: 17,
        description: "High Quality Shirt"
    },
    {
        name: "Nike Shoe",
        slug: "Nike-Shoe",
        category: 'Shoe',
        image:'../images/p3.jpg',
        price:10000,
        countInStock: 19,
        brand: "Nike",
        rating: 4.9,
        numReviews: 170,
        description: "Leather Shoe"
    },
    {
        name: "H&M Pant",
        slug: "H&M Pant",
        category: 'Pants',
        image:'../images/p4.jpg',
        price:2500,
        countInStock: 30,
        brand: "H&M",
        rating: 3.8,
        numReviews: 10,
        description: "High Quality Pant"
    }
]