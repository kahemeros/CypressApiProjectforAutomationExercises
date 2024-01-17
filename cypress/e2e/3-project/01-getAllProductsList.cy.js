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
    }).then((response)=>{     
      // do assertions
      // 1) Assert that status code is 200
        expect(response.status).to.eq(200);
        // cy.log(JSON.stringify(response.body));
        console.log(response.body);
        // 2) Assert that Response Code is 200
        // expect(response.body.responseCode).to.eq(this.expectedData.responseCode);
        // cy.log(JSON.stringify(response.body.responseCode));
        // console.log(this.expectedData.responseCode);
        // console.log(this.expectedData.products[0]);
        // console.log(response.body.products);
        // console.log(response.body.responseCode);
    
        //expect(response.body.responseCode).to.eq(this.expectedData.responseCode);
        // 3) Assert that Response JSON: All products list
        expect(response.body).to.include("products");
        
    });
  });
});
