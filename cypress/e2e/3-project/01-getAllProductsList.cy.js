/*
Given
    API URL: https://automationexercise.com/api/productsList
When
    Request Method: GET
Then    
    Response Code: 200
And    
    Response JSON: All products list
*/

describe("Get Method Testing", () => {
  it("should verify all products list", function () {
    // set the endpoint
    const pathParam = "/productsList";
    // set the expected data
    cy.fixture("getAllProductsListTestData").as("expectedData");
    // send the request
    cy.request({
      method: "GET",
      url: `${pathParam}`,
    }).then((response) => {
      const responseBodyJson = JSON.parse(response.body);
      // do assertions
      // 1) Assert that status code is 200
      expect(response.status).to.eq(200);
      // 2) Assert that Response Code is 200
      expect(responseBodyJson.responseCode).to.eq(this.expectedData.responseCode);
      // 3) Assert that Response JSON: All products list
      expect(responseBodyJson).to.have.property("products");
    });
  });
});
