const validateCategory = (categoryData) => {
    const errors ={}

    if(!categoryData.name || categoryData.name.trim() ===" "){
        errors.name = "category name is required ";
    }
    
    if(!categoryData.slug || categoryData.slug.trim() === " "){
         errors.slug = "category slug is required ";
    }

    if(!categoryData.image || categoryData.image.trim() ===" "){
        errors.image = " category image is required ";
    }
    return errors;
};

module.exports = validateCategory