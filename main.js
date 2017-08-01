// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let inputField = document.getElementById("fields");
// did not work with .getElementsByClassName
for (var i = 0; i < formData.length; i++) {
  // let label = document.createElement

  if (formData[i].type === "select") {

    let select = document.createElement("select");
    inputField.appendChild(select);

    select.setAttribute("ID", formData[i].id);
    // select.setAttribute("placeholder", formData[i].label);
    select.setAttribute("icon", formData[i].icon);
    let langOptions = document.createElement("option");
    select.appendChild(langOptions);
    langOptions.setAttribute("label", formData[i].label + "...");
    
    for (var j = 0; j < formData[i].options.length; j++) {
    let langOptions = document.createElement("option");
    select.appendChild(langOptions);
    langOptions.setAttribute("label", formData[i].options[j].label);
    langOptions.setAttribute("value", formData[i].options[j].value);
    // input.setAttribute("options", langOptions);
    }
  }

  else if (formData[i].type === "textarea") {
    let textarea = document.createElement("textarea");
    inputField.appendChild(textarea);

    textarea.setAttribute("ID", formData[i].id);
    textarea.setAttribute("placeholder", formData[i].label);
    textarea.setAttribute("icon", formData[i].icon);
  }
  else {
  let input = document.createElement("input");
  inputField.appendChild(input);
  input.setAttribute("type", formData[i].type);
  input.setAttribute("ID", formData[i].id);
  input.setAttribute("placeholder", formData[i].label);
  let icon = document.createElement("i");
  input.appendChild(icon);
  icon.setAttribute("class", "fa " + formData[i].icon);
  icon.setAttribute("aria-hidden", "true");
  }
}
