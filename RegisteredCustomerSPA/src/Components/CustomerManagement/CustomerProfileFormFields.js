export const formFields = [
  {
    name: "name",
    label: "Name",
    rules: [{ required: true }],
    placeholder: "Please input your name!",
  },
  {
    name: "address",
    label: "Address",
    rules: [{ required: true }],
    placeholder: "Please input your address!",
  },
  {
    name: "town",
    label: "Town",
    rules: [{ required: true }],
    placeholder: "Please input your town!",
  },
  {
    name: "county",
    label: "County",
    rules: [{ required: true }],
    placeholder: "Please input your county!",
  },
  {
    name: "postcode",
    label: "Postcode",
    rules: [
      { required: true, message: "Please input your postcode!" },
      {
        pattern: new RegExp(
          /^[A-Z]{1,2}[0-9R][0-9A-Z]? ?[0-9][ABD-HJLNP-UW-Z]{2}$/i
        ),
        message: "Please enter a valid UK postcode!",
      },
    ],
    placeholder: "Please input your postcode!",
  },
  {
    name: "phone",
    label: "Phone",
    rules: [
      { required: true, message: "Please input your phone number!" },
      {
        pattern: new RegExp(
          /^(?:(?:\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3,4})|(?:(?:\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3})$/
        ),
        message: "Please enter a valid UK phone number!",
      },
    ],
    placeholder: "Please input your phone number!",
  },
  {
    name: "email",
    label: "Email",
    rules: [
      { type: "email", message: "The input is not a valid email address!" },
      { required: true, message: "Please input your email address!" },
    ],
    placeholder: "Please input your email address!",
  },
];
