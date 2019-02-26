import React from 'react';
import './styles.css';
import { RecipeStorage } from './RecipeStorage';

export class EditPage extends React.Component {
   render() {
      return (
         <div className="recipeGrid">
            <div className="newRecipe recipeImg">Add Recipe</div>
            <RecipeStorage />
         </div>
      );
   }
}
