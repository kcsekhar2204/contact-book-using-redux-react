export const text = {
    header: "React Redux Contact Book",
    addContacts: "Add Contact",
    id: "ID",
    name: "Name",
    email: "Email",
    phoneNo: "Phone",
    edit: "Edit",
    delete: "Delete",
    addPost: "Add Post",
    addStudent: "Add Student",
    goBack: "Go Back",
    update: "Update Contact",
    cancel: "Cancel",
    addSuccess: "Contact added successfully!!",
    updateSuccess: "Contact updated successfully!!",
    duplicateEmail: "This email already exists!!",
    duplicatePhone: "This phone number already exists!!",
}

export const checkDuplicates = (allConatcts, contact) => {
    for (const id in Object.keys(allConatcts)) {
        console.clear()
        if(id !== contact.id) {
            if(allConatcts[id]?.email === contact.email) return text.duplicateEmail
            if(allConatcts[id]?.phone === contact.phone) return text.duplicatePhone
        } 
    };
    return false
}