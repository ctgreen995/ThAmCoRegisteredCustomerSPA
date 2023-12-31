export const mockOrder = {
  ProductDtos: [
    {
      Name: "Product 1",
      Description: "Product 1 Description",
      Price: 1000,
    },
    {
      Name: "Product 2",
      Description: "Product 2 Description",
      Price: 200,
    },
    {
      Name: "Product 3",
      Description: "Product 3 Description",
      Price: 3000,
    },
  ],
  CustomerDto: {
    AuthId: "657430c34032e76a256fe12c",
    CustomerProfileDto: {
      Name: "Gary",
      Address: "3 Gary Street",
      Town: "Garyville",
      County: "Garyshire",
      Postcode: "GA1 1GA",
      Email: "gary@gary.com",
      Phone: "01234567890",
    },
    CustomerAccountDto: {
      Funds: 150.0,
    },
  },
  OrderTotal: 4200,
  OrderDate: "2021-01-01",
  Status: "Processing",
};
