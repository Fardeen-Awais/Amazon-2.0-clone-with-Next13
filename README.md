# **Live preview of the website** :

This is my first project on NextJs13.

In next 13, Start by editing the app/page.js to see any changes. There is no index.js as we can see in previous version of next 12

# **Technology used** :

Next 13, tailwindcss, fakestore api

# **Reference point in the code:**

Further explaination of the comment will be show there with reference number 📃

### 1️⃣ **#0001**:

I'm personally stuck here for two days.

Context of my problem :

I am using next 13, i'm trying to fetch data in the page.js with the help of getServerSideProps.

But the problems is that i'm stuck on it without reading the docs of next 13. In the docs, this is clearly mention in the bold :

|" Good to know: Previous Next.js data fetching methods such as getServerSideProps, getStaticProps, and getInitialProps are not supported in the new app directory "|

I personally don't understand the real problem is but now i can simply solve it by using fetch inside my component.

For more informaiton read data-fetchinng in next js 13 : https://beta.nextjs.org/docs/data-fetching/fundamentals

### 2️⃣ **#0002**:

I solve this problem of fetching. **The above comment will be removed in future commit.** As i mention above getServerSideProps is not available in next13. You need to make an async function that fetch some data from an api convert it into the json and console it.

In this comment you can see we fetch and convert the data into json with in product variable.

So, function getProducts() return product

<!-- //? So how we can Access the data of product in our component: Answer in #0003  -->

### 3️⃣ **#0003**:

For accessing the api data, we can declare a variable and call the api function in it. So, we can access all the data.

### **#0004**

1. We are slicing the amount of product from 0 to 4 and render it. You can see the products component detail in #0005.

After we add a banner.

2. Then we add one product which is different from other products

3. After at the end we render all the rest of the products.

# **#0005**

In this stage, we style each individual product item. Before styling it we props our products data to this particular component

# **#0006**

We are apply grid. Here we use a little trick : grid-flow-row-dense is used to use full of the width without wasting any further space.

Try to remove it and check your special product item which is different from rest of the products. You can clearly see what is the purpose of grid-flex-row.
