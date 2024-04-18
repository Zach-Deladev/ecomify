# ecomify
The Ecomify website is a project for Web Development, Advanced Specialised Project - WE002, and it is dedicated to selling a diverse array of t-shirts online. We have integrated the Stripe API payment system to improve the site’s professionalism. On the development, we employ HTML, CSS, BOOTSTRAP, JAVASCRIPT and REACT technologies to deliver an engaging and user-centric experience. Each component of the website is designed to support different functionalities and user interactions, prioritising not just user experience but also maintenance and scalability. All elements are developed to ensure a smooth shopping experience for users and efficient operations for administrators, making it an ideal blend of functionality, user-interface and practicality.



                            <!-- Resume of the Features: -->



**User Interface**
CustomNavbar.jsx: Manages login, signup, and user role-based navigation.
Footer.jsx: Provides essential links, social media icons, and subscription options.
Hero.jsx: Grabs attention with promotions and a "Shop Now" button.

    
**Shopping Experience**
Categories.jsx: Showcases t-shirt categories in a responsive layout.
BestSellers.jsx: Highlights top-selling items with visuals and reviews.

  
**Dashboards**
AdminDashboard.jsx and CustomerDashboard.jsx: Manage user-specific content.

    
**Customer Interaction**
ContactForm.jsx and Help.jsx: Facilitate communication and support.

    
**Technical Highlights**
Context Management: AuthContext.jsx and ProductContext.jsx: Streamline user session and product data.
Custom Hooks: useGetProducts.jsx and useCreateCheckoutSession.jsx: Ensure efficient data fetching and transactions.





                    <!-- Full list of components and its functionalities -->

                    

**Components**
Announcement-bar.jsx - defines a responsive top banner with contact information, a promotional message, and interactive elements for language and currency selection.

AboutUs.jsx - renders information about our webpage.

AdminDashboard.jsx - render a div element containing the text "AdminDashboard”. It is a placeholder for the main content of an administrative dashboard section.


BestSellers.jsx - displays a list of best-selling products fetched via a custom hook, showing product images, prices, discounts, and reviews, and allows navigation to product details when clicked, using React Router.

Cart.jsx - renders a header element displaying the text "Cart yes".

Categories.jsx - displays a responsive grid of cards for different clothing categories (Graphic Tees, Plain Tees, Vintage Tees). Each card includes an image, a title, a description, and a "Shop Now" button.

Collections.jsx - displays a three-column grid of clickable collection boxes using React-Bootstrap, each containing an image and a link for shopping different styles of shirts (T-Shirts, Polos, V-Necks).

ContactForm.jsx - render a contact form. It's structured within a container that includes fields for a user's name, email address, and a message, with a submit button. It is designed for users to reach out to our support team.

CustomerOrders.jsx - renders a heading element displaying the text "CustomerOrders".

CustomerDashboard.jsx - render a simple div element containing the text "CustomerDashboard." It represents the placeholder or the initial basic structure for a customer-specific section of the website.

CustomNavbar.jsx - define a customizable navigation bar with login, signup, and logout functionality, dynamically adjusted links based on user roles, and modals for authentication forms.

EmailPopup.jsx - implements a email popup. It has 3 stages: an initial prompt to accept a discount, an email submission form, and a confirmation screen, allowing users to close the popup at each stage or after submitting their email.


Footer.jsx - creates a footer featuring a subscription input for updates, navigation links, social media icons, a copyright notice, and a currency selection dropdown.

Help.jsx - this component creates a detailed and interactive help section for the website, where it is present as a series of collapsible items. It provides users with easy access to frequently asked questions and information about the products.

Hero.jsx - create a promotional hero section with an overlay, featuring text announcing a discount, a headline about the product, and a "Shop Now" button.

Products.jsx - display a grid of products, which should conditionally render based on a selected product category.

Privacy.jsx - renders information about the webpage's privacy policy.

Refund.jsx - renders information about the webpage's refund methods.

Reviews.jsx - displays customer reviews in a responsive grid format.

Testimonials.jsx - displays a three-column layout of customer testimonials, each with an image, review text, and a link to shop the collection.

Ticker.jsx - displays a scrolling ticker with various promotional messages.

Tos.jsx - renders information about the webpage's Terms-of-Service.

WhyChooseUs.jsx - displays three key selling points (quality products, unique designs, and exceptional customer service). 


**Context components**
AuthContext.jsx - creates an authentication context to manage user sessions with sign-in, sign-up, and log-out capabilities, and fetches user data on initialization.

ProductContent.jsx - creates a product management context, providing functionalities to fetch, create, update, and delete products, and integrates a custom hook for accessing these functions within components.


**Hooks**
useCreateCheckoutSession.jsx - it creates Stripe checkout sessions and handling payment initiation, complete with loading and error states to track and communicate the process status.

useGetProduct.jsx - fetches a specific product by its ID from a backend API, managing the loading state, error handling, and the fetched product data, to facilitate data management and UI rendering in React components.

useGetProducts.jsx - fetches a list of products from a backend API and manages the loading state, error handling, and the fetched products data. It is designed to be used in React components that need to display or interact with a list of products.

useGetProductsByCategory.jsx - fetches products from an API by category, managing loading state, error handling, and data storage with state hooks, and updates the fetched products whenever the category changes.


**Page**
AdminDashboard.jsx - renders a div element containing the text "AdminDashboard". It represents a basic placeholder or a starting point for an administrative dashboard in a web application.

CustomerDashboard.jsx - renders a div with the text "CustomerDashboard". It serves as a straightforward placeholder or initial framework for a customer dashboard section.

Home.jsx - assembles various page sections (hero banner, product categories, best sellers, reviews, value propositions, and footer) into a homepage layout.

Login.jsx - renders a div containing the text "Login".

PaymentSuccess.jsx - displays a “celebratory confetti” animation and a message confirming successful payment, along with a button that redirects users back to the homepage.

ProductPage.jsx - displays a product's details and enables users to initiate a purchase using Stripe integration through custom hooks for fetching product data and handling checkout sessions.

Shop.jsx - serves as a shop listings page, currently displaying products and a footer, with a commented option to include a filtering sidebar in the future.

App.jsx - sets up routing for a web application with authentication, featuring a navigation bar, several pages including Home, Shop, and Login, and protected routes for user accounts and admin dashboards, ensuring access only when authenticated.

main.jsx - initialises and renders the main application with authentication and product management contexts, ensuring the entire app has access to these functionalities.