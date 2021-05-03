# Frontend, React Image Upload Client

---

## Overview

This is a frontend client built in React which renders an image input, uploads the image to the backend, and displays the prediction from the convnet. 

## Setup

In the Terminal, run the following:

1. Setup the `backend` for MobiScan before you run this project. 
2. `yarn install` 
3. `yarn start` 
4. Open `https://localhost:3000` 

To use the app:

1. Click "Browse..." on the file input
2. In the file upload modal, select an image file
3. Click Predict and wait until the backend responds
4. You will see the result of the prediction and the confidence level at the top banner, when the convnet has made a response.

In the `test-examples` folder, you will find some example images which you can upload through the client and have the convnet classify the image. 

## Skills Demonstrated

For recruiters, the project demonstrates the following skills:

- React
  - React Hooks - `.useState`, `.useRef`, `.useMemo`, `.useCallback` 
  - React controlled component
- Styling - Responsive breakpoints, flexbox, various other techniques. 
- HTTP Calls - See `uploadFile` 
- General software engineering principles
  - Separating the UI into reusable components - See `<Button>`, `<Flex>`, `<ImageUpload>`
  - Creating resuable utilities for common tasks - See `unit()`, `lighten()`, `breakpoints()`, and `transitionAll()` helpers 
  - Standard good coding practices - See `REGEX_RGB_HEXSTRING`, `CHANNEL_STRLEN`, `NUM_CHANNELS` which are used avoid magic numbers and maintainability issues. 
  - Functional programming - `lighten()` uses some mapping 
- Creative problem solving 
  - `lighten(color, percent)` - A CSS utility that computes the `color` lightened by the given `percent`. This is useful for enforcing consistency in the color styling across the app.
    - Inspired by linear algebra. An RGB value can be viewed as a point in 3D space, `(r, g, b)`, and the operation of "lightening" a color value is essentially equivalent to translating the point `(r, g, b)` closer to `(255, 255, 255)` along the line which passes through `(r, g, b)` and `(255, 255, 255)`. 
- Misc. frontend technologies
  - `FileReader()` 
  - `FormData()`