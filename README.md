# Capstone Project: Enjoy the Outdoors
In this project, you will build an application that helps a user find things to do to enjoy the great outdoors. Our app specializes in finding national parks to enjoy and mountains to climb. You will use what you know about React to complete this project. You will also need to flex your research skills to solve any blockers you run into.

**Live Demo**  
- https://enjoy-the-outdoors.netlify.app/

**Relevant Class Resources:**  
- [Tourist Bureau with tables](https://github.com/erics273/tourist_bureau_workshop_with_tables)
- [Instructor Demos](https://github.com/erics273/wb5_exercises/tree/main/eric_demos)

**Relevant Bootstrap Links:**
 - [Select Boxes (Dropdowns)](https://getbootstrap.com/docs/5.3/forms/select/)
 - [Radio Buttons](https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios)
 - [Tables](https://getbootstrap.com/docs/5.3/content/tables/)
 - [Cards](https://getbootstrap.com/docs/5.3/components/card/#kitchen-sink)
 - [Navbar](https://getbootstrap.com/docs/5.3/components/navbar/)

## Basic Requirements
The website should include the following in order to be considered complete:

- **A National Parks Search Page** - The National Parks search page provides a user interface that allows the user to search for the park that is just right for them.

- **Mountains Information Page** - The mountains information page provides a user interface that allows the user to explore the details of 48 different mountains.

> **NOTE** There are ample opportunities in this project to keep you busy and stretch your skills.  Just make sure the basic requirements above are met before you decide to tackle any optional features!!

## Implementation Details
Below you will find implementation requirements and details about the **National Parks search page**, **Mountains Information page**, **stretch goals**, and general implementation hints.

### National Parks Search Page 
This page will allow the user to search for national parks that they might be interested in.  The data for this page is provided to you in `/scripts/data/nationalParkData.js`, `/scripts/data/locationData.js`, and `/scripts/data/parkTypeData.js`. Spend some time examining these files.

Ultimately, the user would like to have two ways to search for a national park:
 - **By location** 
 - **By park type**

**Search by Location** - This option allows users to select the state/territory from a [dropdown](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).  

**You will know a park matches the location by comparing it to the park's `State` property**. 

> **NOTE:** Search by Location is the most important search option and should be the completed first.

**Search by Park Type** - This option allows users to select a description from a [dropdown](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).  

**You will know a park matches the description by checking to see if the park's `LocationName` property ***includes*** the description**. 

One of the challenges will be how the user is presented with two search options populated with the appropriate values. Do you use [radio buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) to select the search type?  Do you use a [dropdown](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) with the search types as [options](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)?

#### National Parks Search Page Stretch Goals
Challenge yourself with some of the stretch goals below. **These stretch goals should be treated as the lowest priority tasks**

- Provide a View All National Parks option.
- Some, but not all National Parks, contain a **"Visit"** property that contains a URL to a page about the park. You can display the URL in a hyperlink (ex: [<a>](https://mdn.io/a) tag) along with park details so the user can click on it and visit the park's page from your list.  Make sure to open the visited page in a different tab/window!

#### IMPLEMENTATION HINTS

- Get the two search options to load their respective options before getting the actual search working.
- **Suggestion:** Get the "Search by Location" feature working first.
- When you are working on the "Search by Park Type", you need to make sure the two strings have the same casing when you search.  The easiest way to do this is to use the `String` objects [`.toLowerCase()`](https://mdn.io/toLowerCase)  (or [`.toUpperCase()`](https://mdn.io/toUpperCase) ) to make the strings the same case.

### Mountains Information Page
This page will provide a drop-down list of the 48 mountains listed in `scripts/data/mountainData.js.` Make sure to spend time examining this file.

When the user selects a mountain, your page will display information about that mountain, including:

- Mountain Name
- Description
- Elevation
- Any other information you find interesting about the Mountain. 

> **NOTE:** This page will NOT allow the user to search mountains using any type of filter.

#### Mountain Information Page Stretch Goals
Challenge yourself with some of the stretch goals below. **These stretch goals should be treated as the lowest priority tasks**

- Display an image of the mountain along with the mountain information. 
- Impress the user by displaying the sunrise and sunset time "today" for any mountain along with the other mountain data.
  ```js

  //function that can "fetch" the sunset/sunrise times
  async function getSunsetForMountain(lat, lng){
      let response = await fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`)
      let data = await response.json()
      return data
  }

  //Using the function to fetch the sunset/sunrise times for a specific mountain 
  getSunsetForMountain("44.320686", "-71.291742").then(sunsetData => {
      console.log(sunsetData.results)
  });
  ```

> NOTE(S): the lat and lng values are included in the mountain data. The times returned are in UTC are not adjusted for local summer variations. Label the output as UTC time when you display them or try to convert them to local time for the user.

## What Makes A Good Capstone Project?

**You Should:**  
- Build a consistent look-and-feel throughout the site with a working navigation
- Implement at least the required pages 
- Have a responsive user interface 
- Build a public repo for your code, use an appropriate branching strategy, and have a commit history with meaningful commit messages

**Implement best practices:**  
- Have a good directory structures (ex: css, images and scripts folders) 
- Use good file naming conventions (ex: lowercase file names with no spaces)
- Have well-formatted HTML, CSS and JavaScript (indentions, blank lines, etc.)
- Use good names for your HTML elements and JavaScript variables/functions
- Use HTML, CSS and JavaScript comments effectively
- Make sure there are no JavaScript errors at run time (check the Console tab in the browser frequently)

**Class Demonstrations**  
Each student will be given 10 minutes to demonstrate their site to the class on "project demonstration day". During this time, you will:  

- Show off your website and the pages within it 
- Describe/show one interesting piece of HTML/CSS Bootstrap you wrote
- Answer questions from the audience if time permits
