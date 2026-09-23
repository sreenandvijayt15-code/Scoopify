require("dotenv").config();
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe("Category API", () => {

    test("GET /categories should return all categories", async () => {
        const response = await request(app).get("/api/categories");
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe(
            "Categories retrieved successfully"
        );
        expect(response.body.data).toHaveProperty("categories");
        expect(Array.isArray(response.body.data.categories)).toBe(true);
    });


    test("GET /api/categories/:categoryId should return a category", async () => {
    const categoryId = "6ab38a69ad85d2ac184f5f84";

    const response = await request(app).get(
        `/api/categories/${categoryId}`
    );

    expect(response.statusCode).toBe(200);

    expect(response.body.message).toBe(
        "Category retrieved successfully"
    );

    expect(response.body.data).toHaveProperty("category");

    expect(response.body.data.category._id).toBe(categoryId);
});

   test("PUT /categories/:categoryId should update a category", async () => {
    const categoryId = "6ab16bb9c1f18b44c64c5e86";

    const response = await request(app)
        .put(`/api/categories/${categoryId}`)
        .send({
            name: "Premium Cakes",
            slug: "premium-cakes-test",
            image: "https://example.com/images/premium-cakes.jpg"
        });

    expect(response.statusCode).toBe(200);

    expect(response.body.message).toBe(
        "Category Updated Successfully"
    );

    expect(response.body.data).toHaveProperty("category");

    expect(response.body.data.category.name).toBe(
        "Premium Cakes"
    );

    expect(response.body.data.category.slug).toBe(
        "premium-cakes-test"
    );
});

});

