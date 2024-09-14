function profile_edit(values: any) {
  let errors = {} as any

  // name
  if (!values.name) {
    errors.name = "name is required"
  } else if (values.name.length < 4) {
    errors.name = "name is too short"
  } else {
    errors.name = null
  }

  // date of birth
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "dob is required"
  } else {
    errors.dateOfBirth = null
  }

  // gender
  if (!values.gender) {
    errors.gender = "gender is required"
  } else {
    errors.gender = null
  }

  // profession
  if (!values.profession) {
    errors.profession = "profession is required"
  } else {
    errors.profession = null
  }

  // contact
  if (!values.contactNumber) {
    errors.contactNumber = "contact number is required"
  } else if (values.contactNumber.length < 6) {
    errors.contactNumber = "name is too short"
  } else {
    errors.contactNumber = null
  }

  // emergency contact
  if (!values.emergencyContact) {
    errors.emergencyContact = "emergency contact number is required"
  } else if (values.emergencyContact.length < 6) {
    errors.emergencyContact = "name is too short"
  } else {
    errors.emergencyContact = null
  }

  // email
  if (!values.emailAddress) {
    errors.emailAddress = "email address is required"
  } else {
    errors.emailAddress = null
  }

  // address
  if (!values.address) {
    errors.address = "address is required"
  } else {
    errors.address = null
  }

  // weight
  if (!values.weight) {
    errors.weight = "weight is required"
  } else {
    errors.weight = null
  }

  // height
  if (!values.height) {
    errors.height = "height is required"
  } else {
    errors.height = null
  }

  return errors
}

export const validations = {
  profile_edit,
}
