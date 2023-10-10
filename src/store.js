import { reactive } from 'vue'

export const store = reactive({

    apiUrl: "https://localhost:7011/api",
    allPizza: "/PizzaApi/GetPizzas",
    pizzaByNameOrId: "/PizzaApi/GetPizza",
    createPizza: "/PizzaApi/Create",
    editPizza: "/PizzaApi/Edit"

});