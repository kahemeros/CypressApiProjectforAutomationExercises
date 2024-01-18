/*
    Given    
        API URL: https://automationexercise.com/api/productsList
    When    
        Request Method: POST
    Then    
        Response Code: 405
    And    
        Response Message: This request method is not supported.
*/

describe("Post Method Testing", () => {
  it("should reveal Post method is not working with this URL", function () {
    // 1) set the endpoint
    const pathParam = "/productsList";
    // 2) set the expected data
    cy.fixture("postToAllProductsList").as("expectedData");
    // 3) send the request
    cy.request({
      method: "POST",
      url: `${pathParam}`,
    }).then((response) => {
      const responseBodyJson = JSON.parse(response.body);
      // 4) do assertions
      // i) assert that status code is 200
      expect(response.status).to.eq(200);
      // ii) assert that response code is 405
      expect(responseBodyJson.responseCode).to.eq(this.expectedData.responseCode);
      // iii) assert that response message is "This request method is not supported."
      expect(responseBodyJson.message).to.eq(this.expectedData.message);
    });
  });
});
