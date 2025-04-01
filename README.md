# Dining Philosophers Problem

This project demonstrates the **Dining Philosophers Problem**, a classic synchronization problem in concurrent programming. It includes an interactive simulation and code implementations in **C** and **Python**.

## Features

- **Interactive Simulation**: Visualize how philosophers transition between thinking, hungry, and eating states.
- **Code Implementations**: View and switch between C and Python implementations of the Dining Philosophers Problem.
- **Responsive Design**: Works seamlessly on different screen sizes.

## Project Structure

```
\diningphil\
│
├── index.html       # Main HTML file for the project
├── style.css        # CSS file for styling
├── script.js        # JavaScript file for interactivity
├── dining_philosophers_diagram.png  # Diagram illustrating the problem
└── README.md        # Project documentation
```

## How to Use

1. Navigate through the sections:
   - **Home**: Introduction to the Dining Philosophers Problem.
   - **Problem Statement**: Explanation of the problem with a diagram.
   - **Solutions & Strategies**: Overview of strategies to prevent deadlock.
   - **Interactive Simulation**: Click the "Start Simulation" button to observe the philosophers' behavior.
   - **Implementation Code**: Use the dropdown to switch between C and Python code.

## Code Implementations

### C Implementation
The C code uses `pthread` and `semaphore` libraries to simulate the philosophers' behavior and manage synchronization.

### Python Implementation
The Python code uses `threading` and `Semaphore` to achieve the same functionality.

### Interactive Simulation
![Interactive Simulation](dining_philosophers_diagram.png)


