## PetFetch

CS 3200 - Introduction to Databases Final Group Project

### Goal

Our goal was to centralize animal rescue data to expand the reach of animal rescues and streamline adoption processes. We wanted to provide stray, abandoned, and unwanted animals a home, and we wanted to reduce the amount of kill-shelters. Our intended users consist of employees of animal shelters, individuals looking to adopt or foster pets, individuals looking to put pets up for adoption, and researchers who want to use the data our application provides (i.e. government agency trying to figure out which states have high rates of animals being put down before successful adoption).
A sampling of the expected major functionality would consist of search and filtering functionality for animals, updating and creating data for animals, displaying animal health and medical condition/history, and rescue/adoption statistics for each agency.

### Personas

We had 3 personas that we wanted to design for: Clark, an adopter, Janet, an agency manager, and Alex, a researcher.

#### Clark's User Stories:

- As an adopter, I need to be able to search for a pet with specific requirements so that I can find a companion that fits my family’s needs (a labrador retriever under the age of 3).
- As an adopter, I need to be able to retrieve my adopted pet’s medical history so that I can provide proper care for my new pet.
- As an adopter, I need to be able to search for pets in my zip code (02284) so that I can arrange the pick up of my new pet with ease.

#### Janet's User Stories:

- As a rescue agency manager, I need to be able to update one of our pet’s medical history so that information about the pet’s health is up-to-date and easily accessible.
- As a rescue agency manager, I need to be able to put a new pet up for adoption by entering new pet information into my user dashboard so that all pets that we house are accurately represented on Petalytic’s website.
- As a rescue agency manager, I need to be able to track the status of pending adoptions for each pet so that I can efficiently manage adoption processes and keep potential adopters informed.
- As a rescue agency manager, I need to be able to update a pet that had the incorrect breed so that the information can be accurate for our customers.
- As a rescue agency manager, I need to be able to delete a pet that is no longer a part of any agencies we manage so that we can keep our agency pets accurate.

#### Alex's User Stories

- As a researcher, I need to be able to gather the names of the 5 rescue centers that have the least amount of adoptions so that my team can figure out how to increase the adoption rate at said agencies.
- As a researcher, I need to be able to gather information about pets who have been at rescues for greater than 2 years so that we can decrease the rate of pets who spend large periods of their lifetime without a home.
- As a researcher, I need to be able to gather data on the types of pets (species, breed, age) that are most commonly surrendered to animal rescues so that we can better understand the reasons behind these surrenders and implement strategies to prevent them.

### Project Components

- Streamlit App (in the ./app directory)
- Flask REST APIs (in the ./api directory)
- MySQL setup files (in the ./database-files directory)

### Reflection

Overall, I had a lot of fun with this project. There was a bit of a time crunch when it came to the project, but we were able to create a fully working app using mock data from [Mockaroo](mockaroo.com) tailored to our personas above.

### Repository

To explore more, check out the repo [here](https://github.com/carolinetpham/Petalytics-PetFetch).
