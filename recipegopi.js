document.addEventListener('DOMContentLoaded', function () {
    const recipeList = document.getElementById('recipe-list');
    const addRecipeBtn = document.getElementById('add-recipe-btn');
    const addRecipeModal = document.getElementById('add-recipe-modal');
    const addRecipeForm = document.getElementById('add-recipe-form');
    const closeBtn = document.querySelector('.close');

    addRecipeBtn.addEventListener('click', function () {
        addRecipeModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        addRecipeModal.style.display = 'none';
    });

    addRecipeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const recipeName = document.getElementById('recipe-name').value;
        const recipeIngredients = document.getElementById('recipe-ingredients').value;
        const recipeInstructions = document.getElementById('recipe-instructions').value;

        if (recipeName && recipeIngredients && recipeInstructions) {
            // Create recipe element
            const recipeElement = document.createElement('div');
            recipeElement.className = 'recipe';
            recipeElement.innerHTML = `
                <h3>${recipeName}</h3>
                <p><strong>Ingredients:</strong><br>${recipeIngredients}</p>
                <p><strong>Instructions:</strong><br>${recipeInstructions}</p>
                <button class="delete-btn">Delete Recipe</button>
                <button class="edit-btn">Edit Recipe</button>
            `;

            // Add delete event
            const deleteBtn = recipeElement.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function () {
                recipeList.removeChild(recipeElement);
            });

            // Add edit event
            const editBtn = recipeElement.querySelector('.edit-btn');
            editBtn.addEventListener('click', function () {
                // Implement your edit functionality here
                alert('Edit functionality coming soon!');
            });

            // Add recipe to the list
            recipeList.appendChild(recipeElement);

            // Clear form and close modal
            addRecipeForm.reset();
            addRecipeModal.style.display = 'none';
        }
    });
});
