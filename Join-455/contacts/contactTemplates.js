
/**
 * Returns a template for a contact list grouped by letters.
 *
 * @param {*} letter - The first letter to group contacts by.
 * @param {*} groupedContacts - An object containing contacts grouped by their first letter.
 * @return {*} - A string containing the HTML structure for the contact list grouped by letters.
 */
function getContactListTemplate(letter, groupedContacts) {
  return `
      <div class="letter_group" id="letter_group_${letter}">
          <div class="letter_index" id="letter_index_container_${letter}">
              ${letter}
          </div>
          <div class="letter_separator_horizontal">
              <hr class="separator_horizontal" />
          </div>
          <div class="contacts_container" >
              ${groupedContacts[letter]
                .map(
                  (contact, index) => `
                  <div class="contact_side" data-email="${
                    contact.email
                  }" id="${index}" onclick="handleContactClick(event, ${contactsArray.indexOf(
                    contact
                  )})">                        
                  <div class="profile_icon_mini" style="background-color: ${
                    contact.color
                  }">
                          <span>${contact.name.charAt(0).toUpperCase()}${
                    contact.surname.charAt(0).toUpperCase()
                      ? `${contact.surname.charAt(0).toUpperCase()}`
                      : ""
                  }</span>
                      </div>
                      <div class="contact_side_info">
                          <div class="contact_side_name">
                              <span>${contact.name} ${contact.surname}</span>
                          </div>
                          <div class="contact_side_mail">
                              <span>${contact.email}</span>
                          </div>
                      </div>
                  </div>
              `
                )
                .join("")}
          </div>
      </div>`;
}


/**
 * Returns a template for the current user in the contact list.
 *
 * @param {*} currentUser - The current user object containing user details.
 * @param {*} currentUserInitials - The initials of the current user, used for display.
 * @return {*} - A string containing the HTML structure for the current user in the contact list.
 */
function getCurrentUserTemplate(currentUser, currentUserInitials) {
  return `<div class="letter_index"">
                              User
                              </div>
                              <div class="letter_separator_horizontal">
                                  <hr class="separator_horizontal" />
                              </div>
                          <div class="contact_side" id="current_user" onclick="showCurrentUserDetails()">
                              <div class="profile_icon_mini" style="background-color: ${
                                currentUser.profileColor
                              }">
                                  <span>${currentUserInitials}</span>
                              </div>
                              <div class="contact_side_info">
                                  <div class="contact_side_name">
                                      <span>${currentUser.name} ${
    currentUser.surname ? `${currentUser.surname}` : ""
  } (You)</span>
                                  </div>
                                  <div class="contact_side_mail">
                                      <span>${currentUser.email}</span>
                                  </div>
                              </div>
                          `;
}


/**
 * Returns a template for the current user details in the contact view.
 *
 * @param {*} currentUser - The current user object containing user details.
 * @param {*} currentUserInitials - The initials of the current user, used for display.
 * @return {*} - A string containing the HTML structure for the current user details in the contact view.
 */
function getCurrentUserDetailsTemplate(currentUser, currentUserInitials) {
  return `
<div class="contact_header">
          <div class="profile_icon_large" style="background-color: ${
            currentUser.profileColor
          }">
                          <span>${currentUserInitials}</span>
                      </div>

          <div class="contact_head">
            <div class="contact_name">
              <span>${currentUser.name}</span>
            </div>

            <div class="contact_buttons">
              <button onclick="editCurrentUserOverlay()" class="contact_btn">
                <img src="../assets/imgs/contactIcons/edit.svg" alt="" /> Edit
              </button>

            </div>
          </div>
        </div>

        <div class="contact_information_text">
          <span>Contact Information</span>
        </div>

        <div class="contact_details">
          <div class="contact_mail">
            <span class="contact_category">Email</span>
            <a href="mailto:${currentUser.email}">${currentUser.email}</a>
          </div>

            <div class="contact_phone">
              <span class="contact_category">Phone</span>
              <span>${currentUser.phone ? currentUser.phone : "+49"}</span>
            </div>
          <div class="contact_options_btn" onclick="toggleContactOptions(event);">
            <img src="../assets/imgs/contactIcons/contactMenuButton.svg" alt="contact_options_btn" />
            </div>
            <div id="contact_options_dropdown" onclick="eventBubbling(event)" class="closed">
                <button onclick="editCurrentUserOverlay()" id="edit_btn"><img src="../assets/imgs/contactIcons/edit.svg" alt="" />Edit</button>
              </div>
          </div>`;
}


/**
 * Returns a template for the contact details view.
 *
 * @param {*} contact - The contact object containing contact details.
 * @return {*} - A string containing the HTML structure for the contact details view.
 */
function getContactDetailsTemplate(contact) {
  return `
                <div class="contact_header">
                      
            <div class="profile_icon_large" style="background-color: ${contact.color}">
                            <span>${contact.name.charAt(0).toUpperCase()}${
    contact.surname.charAt(0).toUpperCase()
      ? `${contact.surname.charAt(0).toUpperCase()}`
      : ""}</span></div>

            <div class="contact_head">
              <div class="contact_name">
                <span>${contact.name} ${contact.surname}</span>
              </div>

              <div class="contact_buttons">
                <button onclick="editContactOverlay(${contactsArray.indexOf(contact)})" class="contact_btn">
                  <img src="../assets/imgs/contactIcons/edit.svg" alt="" /> Edit
                </button>
                <button onclick="deleteContactAndUpdateTasks('${contact.id}')" class="contact_btn">
                  <img src="../assets/imgs/contactIcons/delete.svg" alt="" />
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div class="contact_information_text">
            <span>Contact Information</span>
          </div>

          <div class="contact_details">
            <div class="contact_mail">
              <span class="contact_category">Email</span>
              <a href="mailto:"${contact.email}">${contact.email}</a>
            </div>

            <div class="contact_phone">
              <span class="contact_category">Phone</span>
              <span>${contact.phone}</span>
            </div>
          </div>
          <div class="contact_options_btn" onclick="toggleContactOptions(event)">
          <img src="../assets/imgs/contactIcons/contactMenuButton.svg" alt="contact_options_btn" />
          </div>
          
          <div id="contact_options_dropdown" onclick="eventBubbling(event)" class="closed">
                <button onclick="editContactOverlay(${contactsArray.indexOf(contact)})" id="edit_btn"><img src="../assets/imgs/contactIcons/edit.svg" alt="" />Edit</button>
                <button onclick="deleteContactAndUpdateTasks('${contact.id}')" id="delete_btn"><img src="../assets/imgs/contactIcons/delete.svg" alt="" />Delete</button>
              </div>
        </div>`;
}


/**
 * Returns a template for the new contact overlay.
 *
 * @return {*} - A string containing the HTML structure for the new contact overlay.
 */
function getNewContactOverlay() {
  return  `
  <div class="overlay_side_img">
  <img src="../assets/imgs/contactIcons/Capa_1.svg" alt="Join Logo" />
  <div class="overlay_text_container">
    <span class="overlay_text_left">Add Contact</span>
    <span class="overlay_phrase_left">
      Tasks are better with a Team!
    </span>
    <hr class="overlay_separator_horizontal" />
  </div>
</div>

<div class="new_contact_overlay_right">
  <div onclick="toggleOverlay()" class="contact_close_btn">
    <img src="../assets/imgs/contactIcons/close.svg" alt="">
  </div>
  
  <div class="contact_content_row">
    <!-- Profilbild links -->
    <div class="contact_overlay_img">
      <img
        src="../assets/imgs/contactIcons/defaultProfileImg.svg"
        alt=""
      />
    </div>

    <!-- Formular rechts -->
    <form id="new_contact_form" class="contact_form_fields">
      <div class="contact_input_fields">
        <input
          class="overlay_input name_input_icon"
          id="new_contact_name"
          name="new_contact_name"
          type="text"
          placeholder="Name"
          required
        />
        <p class="alert" id="name_alert">*Please enter first-and surname.</p>

        <input
          class="overlay_input mail_input_icon"
          id="new_contact_email"
          name="new_contact_email"
          type="email"
          placeholder="Email"
          required
        />
        <p class="alert" id="mail_alert">*Please enter a valid email address.</p>

        <input
          class="overlay_input phone_input_icon"
          id="new_contact_phone"
          name="new_contact_phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Phone"
          required
        />
        <p class="alert" id="phone_alert">*Please enter a valid phone number.</p>
      </div>

      <div class="overlay_buttons">
        <button onclick="toggleOverlay()" class="cancel_btn">
          Cancel
          <img
            src="../assets/imgs/contactIcons/iconoir_cancel.svg"
            alt="cancel button"
          />
        </button>
        <button onclick="createNewContact(event)" type="submit" form="add_contact_form" class="create_contact_btn">
          Create Contact
          <img
            src="../assets/imgs/contactIcons/check.svg"
            alt="create contact button"
          />
        </button>
      </div>
    </form>
  </div>
</div>
`
}


/**
 * Returns a template for the edit contact overlay.
 *
 * @param {*} contact - The contact object containing contact details to be edited.
 * @param {*} index - The index of the contact in the contacts array, used for identifying which contact to edit.
 * @return {*} - A string containing the HTML structure for the edit contact overlay.
 */
function getEditContactOverlay(contact, index) {
  return  `
    <div class="overlay_side_img">
      <img src="../assets/imgs/contactIcons/Capa_1.svg" alt="Join Logo" />
      <div class="overlay_text_container">
        <span class="overlay_text_left">Edit Contact</span>
        <hr class="overlay_separator_horizontal" />
      </div>
    </div>

    <div class="new_contact_overlay_right">
      <div onclick="toggleOverlay()" class="contact_close_btn">
        <img src="../assets/imgs/contactIcons/close.svg" alt="">
      </div>

      <div class="contact_content_row">
        <!-- Profilbild links -->
        <div class="profile_icon_overlay contact_overlay_img" style="background-color: ${contact.color}">
          <span>
            ${contact.name?.charAt(0).toUpperCase() || ""}${contact.surname ? contact.surname.charAt(0).toUpperCase() : ""}
          </span>
        </div>

        <!-- Formular rechts -->
        <form id="edit_contact_form" class="contact_form_fields" data-index="${index}" onsubmit="saveEditContact(event)">
          <div class="contact_input_fields">
            <input
              class="overlay_input name_input_icon"
              type="text"
              placeholder="Name"
              id="edit_name"
              name="edit_contact_name"
              required
            />
            <p class="alert" id="edit_name_alert">*Please enter first-and surname.</p>

            <input
              class="overlay_input mail_input_icon"
              type="text"
              placeholder="Email"
              id="edit_mail"
              name="edit_contact_mail"
              required
            />
            <p class="alert" id="edit_mail_alert">*Please enter a valid email address.</p>

            <input
              class="overlay_input phone_input_icon"
              type="text"
              placeholder="Phone"
              id="edit_phone"
              name="edit_contact_phone"
              required
            />
            <p class="alert" id="edit_phone_alert">*Please enter a valid phone number.</p>
          </div>

          <div class="overlay_edit_buttons">
            <button type="button" onclick="deleteContactAndUpdateTasks('${contact.id}')" class="delete_contact_btn">Delete</button>
            <button type="submit" class="save_contact_btn">
              Save
              <img src="../assets/imgs/contactIcons/check.svg" alt="create contact button" />
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}



/**
 * Returns a template for the current user edit overlay.
 *
 * @param {*} currentUserInitials - The initials of the current user, used for display.
 * @param {*} currentUser - The current user object containing user details. 
 * @return {*} - A string containing the HTML structure for the current user edit overlay.
 */
function getCurrentUserEditOverlay(currentUserInitials) {
  return `
    <div class="overlay_side_img">
      <img src="../assets/imgs/contactIcons/Capa_1.svg" alt="Join Logo" />
      <div class="overlay_text_container">
        <span class="overlay_text_left">Edit Contact</span>
        <hr class="overlay_separator_horizontal" />
      </div>
    </div>

    <div class="new_contact_overlay_right">
      <div onclick="toggleOverlay()" class="contact_close_btn">
        <img src="../assets/imgs/contactIcons/close.svg" alt="close button" />
      </div>

      <div class="contact_content_row">
        <div class="profile_icon_overlay contact_overlay_img" style="background-color:${currentUser.profileColor}">
          <span>${currentUserInitials}</span>
        </div>

        <form class="contact_form_fields" onsubmit="saveCurrentUserInfo(event);">
          <div class="contact_input_fields">
            <input
              class="overlay_input name_input_icon"
              type="text"
              placeholder="Name"
              id="edit_name"
              name="edit_contact_name"
              required
            />
            <p class="alert" id="edit_name_alert">*Please enter first-and surname.</p>

            <input
              class="overlay_input mail_input_icon"
              type="text"
              placeholder="Email"
              id="edit_mail"
              name="edit_contact_mail"
              required
            />
            <p class="alert" id="edit_mail_alert">*Please enter a valid email address.</p>

            <input
              class="overlay_input phone_input_icon"
              type="text"
              placeholder="Phone"
              id="edit_phone"
              name="edit_contact_phone"
              required
            />
            <p class="alert" id="edit_phone_alert">*Please enter a valid phone number.</p>
          </div>

          <div class="overlay_edit_buttons">
            <button type="button" onclick="toggleOverlay()" class="cancel_btn">
              Cancel
              <img src="../assets/imgs/contactIcons/iconoir_cancel.svg" alt="cancel button" />
            </button>
            <button type="submit" class="save_contact_btn">
              Save
              <img src="../assets/imgs/contactIcons/check.svg" alt="save button" />
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
