// Import the CSS styles
import './style.css'

// Obtain a reference to the canvas element and its drawing context
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Set the frames per second (FPS) and calculate the time interval between frames
const fps = 60
const frameInterval = 1000 / fps

// Set initial canvas dimensions
canvas.width = 640
canvas.height = 360

// Initialize the x-coordinate for the square that will be animated
let x = 0

// Initialize a variable to hold the time of the last frame
let lastTime = Date.now()

// Define the main game loop function
const startGameLoop = () => {
    // 'step' function will be called recursively for animation
    const step = (timestamp) => {
        requestAnimationFrame(step) // Request the next animation frame

        const now = Date.now() // Get the current time
        const delta = now - lastTime // Calculate the time passed since the last frame

        // Check if enough time has passed to draw the next frame
        if (delta > frameInterval) {
            // Update the last frame time, taking into account any extra time from the last interval
            lastTime = now - (delta % frameInterval)

            ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear the entire canvas for the new frame

            // Fill the canvas with a black background
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            x = (x + 5) % canvas.width

            ctx.fillStyle = 'red'
            ctx.fillRect(x, 0, 50, 50)
        }
    }

    // Start the animation loop
    step(0)
}

// Initialize the game loop
startGameLoop()
