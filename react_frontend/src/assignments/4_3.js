// Assignment 4.3

import React, { useState, useEffect } from "react"

export const Assignment4_3 = () => {
    const [meals, setMeals] = useState(undefined);
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"

    const fetchUrl = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setMeals(json.meals);

        } catch (error) {
            setMeals("Error fetching data!");
        }
    }

    useEffect(() => { fetchUrl() }, [])

    if (meals) {
        return (
            <div style={{ padding: "4px", margin: "4px", borderStyle: "solid", borderBlockColor: "#999"}}>
                {
                    meals.map((meal) => {
                        return (
                            <p key={ meal.idMeal } style={{margin: "0px"}}>
                                { meal.strMeal }
                            </p>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div></div>
    )
}