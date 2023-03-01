# **Live preview of the website** : https://amazon-2-0-clone-with-next13.vercel.app/

This is my first project on NextJs13.

In next 13, Start by editing the app/page.js to see any changes. There is no index.js as we can see in previous version of next 12

# **Technology used** :

Next 13, tailwindcss, fakestore api

# **Reference point in the code:**

Further explaination of the comment will be show there with reference number 📃

### **#0001**:
### 1️⃣ #0001:

I'm personally stuck here for two days.

Context of my problem :

I am using next 13, i'm trying to fetch data in the page.js with the help of getServerSideProps.

But the problems is that i'm stuck on it without reading the docs of next 13. In the docs, this is clearly mention in the bold :

|" Good to know: Previous Next.js data fetching methods such as getServerSideProps, getStaticProps, and getInitialProps are not supported in the new app directory "|

I personally don't understand the real problem is but now i can simply solve it by using fetch inside my component.

For more informaiton read data-fetchinng in next js 13 : https://beta.nextjs.org/docs/data-fetching/fundamentals

### **#0002**:

I solve this problem of fetching. **The above comment will be removed in future commit.** As i mention above getServerSideProps is not available in next13. You need to make an async function that fetch some data from an api convert it into the json and console it.

In this comment you can see we fetch and convert the data into json with in product variable.

So, function getProducts() return product

<!-- //? So how we can Access the data of product in our component: Answer in #0003  -->

### 3️⃣ #0003

For accessing the api data, we can declare a variable and call the api function in it. So, we can access all the data.

### 4️⃣ #0004

1. We are slicing the amount of product from 0 to 4 and render it. You can see the products component detail in #0005.

After we add a banner.

2. Then we add one product which is different from other products

3. After at the end we render all the rest of the products.

### **#0005**

In this stage, we style each individual product item. Before styling it we props our products data to this particular component

### **#0006**

We are apply grid. Here we use a little trick : grid-flow-row-dense is used to use full of the width without wasting any further space.

Try to remove it and check your special product item which is different from rest of the products. You can clearly see what is the purpose of grid-flex-row.

### **#0007**

This code block imports the NextAuth module from the "next-auth" package, which is a library that provides an easy-to-use authentication solution for Next.js applications. The GoogleProvider and FacebookProvider modules are also imported from the "next-auth/****providers****" package.


```javaScript
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/****providers****/google";
import FacebookProvider from "next-auth/****providers****/facebook";
```

The authOptions object contains options to configure the authentication ****providers****. It defines an array of authentication ****providers****, which includes a GoogleProvider and a FacebookProvider.

```javaScript
export const authOptions = {
  ****providers****: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackUrl: "http://localhost:3000/api/auth/callback/google",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ]
}
```

The GoogleProvider and FacebookProvider functions take an object with properties that define the configuration for each provider. 

For example, the GoogleProvider object has a clientId, clientSecret, and callbackUrl property. The clientId and clientSecret properties are set using environment variables process.env.GOOGLE_CLIENT_ID and process.env.GOOGLE_CLIENT_SECRET, respectively. 

The callbackUrl property specifies the URL where the authentication provider will redirect the user after authentication.

The FacebookProvider object has similar properties, but it does not require a callbackUrl.

The authOptions object is then passed as an argument to the NextAuth function to create an authentication object that can be used to handle authentication requests in the application.


```javaScript
export default NextAuth(authOptions)
```

This code exports the NextAuth function, which creates a new authentication object with the specified configuration options. The authentication object can then be used to handle authentication requests in the application.

### **0008**

layout.js:

This file exports a component function called **RootLayout**, which is used as a layout wrapper for pages in the Next.js application. The ****Providers**** component is imported from a local file named "./****providers****". The globals.css file is also imported, which is a global stylesheet that can be used throughout the application.

The **RootLayout** function takes a single children prop, which represents the child components that will be wrapped by the layout.

The **RootLayout** function returns an HTML template that includes the ****Providers**** component and the children prop as its child. This ensures that all child components of the **RootLayout** component have access to the session object provided by the ****SessionProvider**** component.

By wrapping the ****Providers**** component around the **`children`** prop in the **RootLayout** function, we can ensure that the session object is available to all pages that use the **RootLayout** component as a layout.


### **#0009**:

**provider.js:**

This file exports a component function called **Providers**, which is used as a provider wrapper for the Next.js application. The **SessionProvider** component is imported from the **next-auth/react** package.

The **SessionProvider** component is a higher-order component that provides a session object to the child components. The session object contains information about the current user's authentication status and profile data.

The **Providers** component takes a single children prop, which represents the child components that will be wrapped by the **SessionProvider** component.

The **Providers** component returns the **SessionProvider** component, passing the children prop as its child. This ensures that all child components of the **Providers** component have access to the session object provided by the **SessionProvider** component.

### **0010**:

What is Redux?

Redux is like a treasure box. Inside the box, there are some things that everyone can use, like pencils and paper. But there are also some special things that only some people can use, like a crown or a magic wand.

In Redux, the treasure box is called the store, and the things inside are called state. The state is like the information or data that everyone can access.

But sometimes, there are special things that need to happen, like when someone wants to become a king or queen and wear the crown. In Redux, these special things are called actions. An action is like a request or command to change the state.

To change the state, there are special people called reducers. Reducers are like the guards of the treasure box. They decide if the action is allowed or not, and if it is allowed, they make the changes to the state.

So, let's say we have a game where we need to keep track of the player's score. The score is like a treasure inside the box. To change the score, we need to send an action to the reducers. The action might be called "ADD_POINTS" and it tells the reducers to add some points to the score. The reducers will check if the action is allowed and if it is, they will add the points to the score.

And that's Redux in a nutshell! It's a way to keep track of information (state) and make changes to it (actions and reducers). It's like a treasure box that everyone can use, but only certain people can change it in special ways.

### **0011**:

How to Add Redux in our app:

#### **Step1:** 

#### First you need to install react redux and reduxjs/toolkit

```javaScript
yarn add @reduxjs/toolkit react-redux
```

##### Then i create store.js outside the app so i can access store.js thorougout application:

```javaScript
import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './slices/basketSlice'

export default configureStore({
  reducer: {
    basket: basketSlice, // basketSlice is imported 
  }
})
```

##### Here is the basketSlice in the slices folder:

```javaScript
import { createSlice } from "@reduxjs/toolkit"; // we already install reduxjs/toolkit

const initialState = {
    items:[],
};

export const basketSlice = createSlice({
    name: "basket", 
    initialState,
    reducers:{
        // Actions
        addToBasket:(state,action)=>{
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state,action)=>{},
    }
});

export const {addToBasket,removeFromBasket} = basketSlice.actions;
export const selectItems = (state)=> state.basket.items;

export default basketSlice.reducer;

```

###### Explaintion of this code: 

This code sets up a Redux slice using the createSlice function from the @reduxjs/toolkit library, which makes it easier to write Redux code with less boilerplate. Here's what each part of the code does:

Import the createSlice function from the @reduxjs/toolkit library.

```javaScript
import { createSlice } from "@reduxjs/toolkit";
```

Define the initial state of the basket slice, which includes an empty items array.

```javaScript
const initialState = {
  items: [],
};
```

Use the createSlice function to define the basketSlice, which includes the name of the slice ("basket"), the initial state, and the reducers.

```javaScript
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {},
  },
});

```
Define the addToBasket and removeFromBasket actions as part of the basketSlice reducer. The addToBasket action adds an item to the items array by creating a new array that includes the existing items and the new item from the action.payload. The removeFromBasket action is currently empty, but could be implemented later.

```javaScript
reducers: {
  addToBasket: (state, action) => {
    state.items = [...state.items, action.payload];
  },
  removeFromBasket: (state, action) => {},
},
```

Export the addToBasket and removeFromBasket actions, as well as a selector function called selectItems that returns the items array from the basket slice.

```javascript
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;
```

Finally, export the basketSlice reducer as the default export.

```javascript
export default basketSlice.reducer;
```

By following this pattern, you can create Redux slices with minimal boilerplate and easily define actions and selectors for your state. This makes it easier to maintain and update your Redux store over time.

##### We use store in layout.js 

We use provider so we can access store throughout the application. Same as we do when we use auth.

```javaScript
import Providers from "./providers"
import './globals.css';
import Store from "./provider";

export default function RootLayout({ children }) { // #0008
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
        <Store> // We use store throughout our home page
          {children}
        </Store>
        </Providers>
        </body>
    </html>
  )
}

```

This is our store in provider.js:

```javascript
'use client'
import store from "@/store";
import { Provider } from 'react-redux'

export default function Store({children}){ //# 0009
    return <Provider store={store}>{children}</Provider>
}
```

### **0012**

Let's use the redux in out product.js
The explanation of product.js is given below:

1. This code imports required modules and components such as React, Image from next/legacy/image, addToBasket from basketSlice, and useDispatch from react-redux.

2. It defines a functional component called Product that accepts props such as id, title, rating, description, price, category, and image.

3. Within the Product component, it initializes a constant dispatch using the useDispatch hook from react-redux.

4. It defines a function addItemToBasket that creates a product object containing the id, title, description, category, and image of the product.

5. It dispatches an action to add the product object to the Redux store using the addToBasket action from the basketSlice.

6. The Product component returns a JSX element that renders the product information including an image, title, rating, description, price, and a button to add the product to the basket.

7. When the user clicks on the "Add to Cart" button, the addItemToBasket function is called and it dispatches an action to add the product to the Redux store.