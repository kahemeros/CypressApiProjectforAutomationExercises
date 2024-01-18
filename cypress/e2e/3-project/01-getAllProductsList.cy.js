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
    // 1) set the endpoint
    const pathParam = "/productsList";
    // 2) set the expected data
    cy.fixture("getAllProductsListTestData").as("expectedData");
    // 3) send the request
    cy.request({
      method: "GET",
      url: `${pathParam}`,
    }).then((response) => {
      const responseBodyJson = JSON.parse(response.body);
      // 4) do assertions
      // i) Assert that status code is 200
      expect(response.status).to.eq(200);
      // ii) Assert that Response Code is 200
      expect(responseBodyJson.responseCode).to.eq(this.expectedData.responseCode);
      // iii) Assert that Response JSON: All products list
      expect(responseBodyJson).to.have.property("products");
    });
  });
});
