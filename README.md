# Pizza Ordering System Frontend Project

## Statement
- This is my submission for the Sparrow frontend take-home test. This project represents a 20-hour time-boxed effort, and I am pleased with the progress achieved within that time.

Currently, the customer view enables users to select a pizza and customize toppings. The price is calculated accurately based on the selected options. To continue work on the customer-facing side of the app, I would focus on completing the ordering flow while applying a high degree of UI polish.

The employee-facing side of the app has been skeletoned out but does not render data yet, as the customer flow is incomplete. This groundwork lays a foundation for future development.

- The app is deployed via GitHub Pages. You can view the live application [here](https://14amoore.github.io/sparrow-takehome/).

- Below is the original prompt.

## Overview
Build a type-safe React application for a pizza ordering system with both customer-facing and employee-facing views. This project is designed to showcase your skills in understanding product requirements, working with TypeScript and React, and demonstrating an intuition for good UX design.

You're encouraged to take this project in a direction of your choice while meeting the minimum requirements listed below. Feel free to use any frontend frameworks or libraries, and be prepared to explain your technical decisions during the review. Note that the `locationId` provided to you will be unique to your test.

## Minimum App Requirements

### 1. Customer Ordering Flow
   #### Menu View
      Pizza Selection
         - Customers can choose from "Specialty Pizzas" or create a custom pizza.
         - For specialty pizzas, allow customers to select the size, add extra toppings, or exclude default toppings.
         - Custom pizzas should support full topping selection with size-based pricing.
      Quantity Selection
         - Allow customers to select quantities for each item.
   #### Checkout Cart
      Cart Display
         - Display all selected items, each with its total price.
         - Allow order edits, such as updating quantities or removing items.
      Checkout Action
         - Provide an option to proceed to checkout with the selected items.
   #### Checkout
      Customer Information
         - Collect necessary customer details for delivery or pickup.
      Order Summary
         - Display an itemized summary of the order, including prices and the total amount.
      Payment
         - Support payment methods of "credit card" and "cash."
      Order Submission
         - Confirm and submit the order.

### 2. Employee Orders Dashboard
   #### Order Table
      - Display all orders for a specific location, including details such as order ID, status, and total amount.
   #### Order Status Updates
      - Allow employees to update the status of each order.

### 3. Order Status Check for Customers
   #### Order Lookup
      - Customers can enter an order ID to check the status of their order.
      - If the order status is "pending," customers should have the option to cancel the order.

## Submission Requirements
- Deploy your React app in a hosted environment of your choice.
- Share the link to your GitHub repository with the source code for the project.