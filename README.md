# uDonate

[![YouTube](https://img.shields.io/badge/Watch%20on%20YouTube-red?style=for-the-badge&logo=youtube)](https://youtu.be/cDAJtu400oM) [![Website](https://img.shields.io/badge/Visit%20our%20Platform-blue?style=for-the-badge&logo=vercel)](https://udonategsc.vercel.app)


Many people worldwide lack access to basic necessities like health, clothes, and education, due to various socio-economic factors, including poverty, geographical isolation, and inadequate healthcare systems, and some of the time financial support is not what they want. Instead having a resource be it books to read, day-to-day medicines, or clothes is all they seek. Most of the time we have some of these things in our household that can be donated to the ones in need Our Solution - uDonate addresses this challenge by providing a platform to connect us to NGOs, and donate such items to them and help those in need and have equitable access to essential items such as clothes, books, and medicines. 

uDonate aims to bridge the gap between unused household resources - books, clothes, medicines, and those who lack these resources by providing a convenient and efficient way for individuals to donate these items to those in need around them, thereby improving their quality of life and contributing to sustainable development.

![uDonate home page](https://github.com/Apx-Monstr/gsc/assets/106424104/782c6ef9-cff3-41e2-a2e3-928c2ac388f2)


## Running Code Base

### Prerequisites
Before you run the code base, ensure that you have the following prerequisites installed:
- [Node.js](https://nodejs.org/) (>=18.17.1) - JavaScript runtime
- [NPM (Node Package Manager)](https://www.npmjs.com/) (>=10.2.1) - Package manager for JavaScript

To run the code base locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Apx-Monstr/gsc.git
   ```
2. **Navigate to Project Directory:**
    ```bash
    cd gsc
    ```
3. **Install Node Modules:**
    ```bash
    npm install
    ```
4. **Run Development Server:**
    ```bash
    npm run dev
    ```
5. **Good to GO**
    Now, you should be able to access the application locally by visiting `localhost:3000` in your web browser.

Once The Server is up and Running you can Follow any of the below user flows to access the platform to list and accept donations.

## User Flow

### User Login

![user login](https://github.com/Apx-Monstr/gsc/assets/106424104/3e424349-eff8-4aaf-9fbc-4b5442815cad)

Users can access the platform by following these steps:

1. Open the platform website.
2. Click on the "Login" button.
3. Choose User Tab to login/register as user
4. Enter your credentials (email and password) or Continue with Google.
5. Click the "Login" button to access your account.

### Donating to the Platform

Once logged in, users can view all the NGO`s within their local region based upon their location. 
Uses can list their donations as follow:

1. Navigate to the "Donate" Button.
2. Provide necessary details (if required).
3. Upload images of items being donated.

## NGO Flow

### NGO Login

![ngo login](https://github.com/Apx-Monstr/gsc/assets/106424104/f4bbc890-30a5-4691-b25e-66668652ae20)

NGOs can log in to the platform using the following steps:

1. Access the platform website.
2. Click on the "Login" button.
3. Choose "NGO" Tab.
4. Enter the NGO's credentials (email and password) or Continue with Google.

### Accepting Donations

![NGO Accept](https://github.com/Apx-Monstr/gsc/assets/106424104/9208b2be-7da8-489e-a2ca-e31bc27eeb34)

Once Logged in NGO can view all the available (listed) donations within their region based upon their location.
NGOs can accept donations from users:

1. In the NGO dashboard, View all the Donations nearby within map and navigate to the right section to accept donation.
2. Click on Description of any donation to view the donation details.
3. As per requirement accept donations by confirming the details and clicking "Accept".
4. Review the Accepted Donation in your Recents Section.
5. Send a Volunteer to receive the physical package from user

### Marking Donation as Complete

To complete the donation cycle, NGOs need to mark received donations as complete:

1. In the NGO dashboard, navigate to the "Recents" section.
2. Locate the donation that is required to be marked as complete.
3. Mark the donation as complete once the package is received.


# Architecture
##### Backend Services:
Firebase Authentication: Validates users and NGOs, managing secure access.
Google Maps Platform: Integrates mapping services for location-based features like Listing Donations and NGOs on Google Map.

##### Storage Layer:
Firebase RTDB: Enables real-time updates for donation statuses, ensuring consistency.
Firebase Firestore: Stores donation images for scalability and efficient retrieval.

##### Presentation Layer
ReactJS: Manages UI components and interactions for the whole platform, reducing code complexity.
NextJS: Extends ReactJS, providing SSR, handling authentication, data operations, and routing.

![Architecture](https://github.com/Apx-Monstr/gsc/assets/106424104/07d69279-4340-4629-8863-747d377ff818)

## Contributors

- [Neelesh Ranjan](https://github.com/Apx-Monstr)
- [Tanesha Gahtori](https://github.com/taneshagahtori)
- [Kartik Mishra](https://github.com/hacker-KM)

## Notice
Firebase API is included within the project, for the sole purpose of testing the platform on the development side by GSC team. 
