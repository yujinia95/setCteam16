function addStory() {
    // Reference to Firestore database
    var db = firebase.firestore();

    // If user adds a story, add it to Firestore
    let addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", function (e) {
        let addTxt = document.getElementById("addTxt");
        let stars = document.querySelector('input[name="star":checked')

        // Get the current date and time
        let currentDate = new Date();

        // Add the story to Firestore
        db.collection("diaries").add({
            content: addTxt.value,
            rating: stars ? stars.value : null, // Assign rating if a star is selected

            timestamp: firebase.firestore.Timestamp.fromDate(currentDate)
        })
            .then(function (docRef) {
                addTxt.value = ""; // Clear input field after adding
                if (stars) {
                    stars.checked = false; // Clear the selected star
                }
                window.location.href = "./diarythanks.html"; // Redirect to diarythanks.html
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    });
}

// function addStory() {
//     const diaryText = document.getElementById('addTxt').value;
  
//     // Check if diaryText is not empty
//     if (diaryText.trim() !== '') {
//       db.collection("diary").add({
//           story: diaryText,
//           rating: getRating() // Assuming getRating() function retrieves the rating
//         })
//         .then(function(docRef) {
//           console.log("Document written with ID: ", docRef.id);
//           // Redirect to the next page after saving the story
//           window.location.href = "./diarythanks.html";
//         })
//         .catch(function(error) {
//           console.error("Error adding document: ", error);
//         });
//     } else {
//       alert("Diary text cannot be empty!");
//     }
//   }


//     // Function to display stories from Firestore
//     function showStories() {
//         // Reference to Firestore database
//         var db = firebase.firestore();

//         // Reference to the collection "diaries"
//         var diariesRef = db.collection("diaries");

//         // Reference to the div where you display stories
//         var storiesDiv = document.getElementById("addTxt");

//         // Clear previous entries before adding new ones
//         while (storiesDiv.firstChild) {
//             storiesDiv.removeChild(storiesDiv.firstChild);
//         }
//         // Get all documents from the "diaries" collection
//         diariesRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 // For each document, retrieve data and display it
//                 let diaryData = doc.data();
//                 console.log("Diary ID: ", doc.id);
//                 console.log("Content: ", addTxt.value.content);
//                 console.log("Timestamp: ", diaryData.timestamp.toDate());
//                 // Assuming you have a field named "rating" in your document
//                 console.log("Rating: ", diaryData.rating);

//                 // Here you can display the retrieved data on your webpage
//             });
//         }).catch((error) => {
//             console.error("Error getting documents: ", error);
//         });
//     }
// }

// Function to get the selected rating
// function getRating() {
//     var rating = 0;
//     var stars = document.getElementsByName('star');

//     // Loop through all the stars to find the selected one
//     for (var i = 0; i < stars.length; i++) {
//         if (stars[i].checked) {
//             rating = parseInt(stars[i].id.split('-')[1]); // Get the numeric value of the selected star
//             break; // Exit the loop once a star is found
//         }
//     }

//     return rating;
// }

// // Function to add a story
// function addStory() {
//     var storyText = document.getElementById("addTxt").value;
//     var rating = getRating(); // Get the selected rating

//     // Add the story to Firebase Firestore
//     db.collection("diaryEntries").add({
//         text: storyText,
//         rating: rating
//     })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//         document.getElementById("addTxt").value = ""; // Clear the text area after adding the story
//         // Optionally, you can show a success message or perform other actions here
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//         // Handle errors here
//     });
// }




// // Handle form submission
// document.getElementById('addbtn').addEventListener('click', function (event) {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Get the diary entry content
//     const entryContent = document.getElementById('addtext').value;

//     // Store the entry in Firebase
//     db.collection("diary").add({
//         content: entryContent,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp()
//     })

// .then(function(docRef) {
//   console.log("Diary entry written with ID: ", docRef.id);
//   // Optionally, display a success message or clear the form
// })
// .catch(function(error) {
//   console.error("Error adding diary entry: ", error);
// });
// });