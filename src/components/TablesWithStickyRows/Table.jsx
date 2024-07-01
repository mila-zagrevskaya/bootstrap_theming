import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';

export const Tables = observer(() => {
  const {
    photoGalleryStore: { photos },
  } = useStore();

  return (
    <div className="tables-with-sticky-rows" id="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Category</th>
            <th>Has alcohol</th>
            <th>Glass</th>
            <th>Instruction</th>
          </tr>
        </thead>

        <tbody>
          {photos &&
            photos.map((item) => {
              const { idDrink, strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions } = item;
              return (
                <tr key={idDrink}>
                  <td>{strDrink}</td>
                  <td>
                    <img src={strDrinkThumb} className="table-item-img" alt={strDrink} />
                  </td>
                  <td>{strCategory}</td>
                  <td>{strAlcoholic}</td>
                  <td>{strGlass}</td>
                  <td className="large-td">{strInstructions}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
});
