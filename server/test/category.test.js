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


    test("POST /api/categories should return 400 for invalid category data", async () => {
    const response = await request(app)
        .post("/api/categories")
        .send({
            name: "",
            slug: `invalid-test-${Date.now()}`,
            image: "https://example.com/images/test.jpg"
        });

    expect(response.statusCode).toBe(400);

    expect(response.body.message).toBe(
        "Invalid category data"
    );

    expect(response.body).toHaveProperty("errors");
});

test("POST /api/categories should return 409 when slug already exists", async () => {
    const slug = `duplicate-test-${Date.now()}`;

    // Create the first category
    const firstResponse = await request(app)
        .post("/api/categories")
        .send({
            name: "Duplicate Test Category",
            slug: slug,
            image: "https://example.com/images/duplicate-test.jpg"
        });

    expect(firstResponse.statusCode).toBe(201);

    // Try to create another category with the same slug
    const secondResponse = await request(app)
        .post("/api/categories")
        .send({
            name: "Another Duplicate Category",
            slug: slug,
            image: "https://example.com/images/duplicate-test-2.jpg"
        });

    expect(secondResponse.statusCode).toBe(409);

    expect(secondResponse.body.message).toBe(
        "Category with this slug already exists"
    );
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

test("DELETE /api/categories/:categoryId should delete a category", async () => {
    // Create a temporary category
    const createResponse = await request(app)
        .post("/api/categories")
        .send({
            name: "Delete Test Category",
            slug: `delete-test-${Date.now()}`,
            image: "https://example.com/images/delete-test.jpg"
        });

    expect(createResponse.statusCode).toBe(201);

    const categoryId = createResponse.body.data.category._id;

    // Delete the category
    const deleteResponse = await request(app)
        .delete(`/api/categories/${categoryId}`);

    expect(deleteResponse.statusCode).toBe(200);

    expect(deleteResponse.body.message).toBe(
        "Category  deleted successfully"
    );

    expect(deleteResponse.body.data).toHaveProperty("category");

    expect(deleteResponse.body.data.category._id).toBe(categoryId);

    // Verify the category was actually deleted
const getResponse = await request(app)
    .get(`/api/categories/${categoryId}`);

expect(getResponse.statusCode).toBe(404);

expect(getResponse.body.message).toBe(
    "Category not found"
);
});

test("GET /api/categories/:categoryId should return 404 when category is not found", async () => {
    const fakeCategoryId = "507f1f77bcf86cd799439011";

    const response = await request(app)
        .get(`/api/categories/${fakeCategoryId}`);

    expect(response.statusCode).toBe(404);

    expect(response.body.message).toBe(
        "Category not found"
    );
});

});

