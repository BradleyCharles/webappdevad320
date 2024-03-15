/* 
State Initialization with useImmer:

    Import useImmer from Immer in your component.
    Initialize the shoppingList state using useImmer. The state should be an array of item objects, 
    where each item has id, name, quantity, and a nested details object with properties like category and notes.

Implementing State Updates with useImmer:

    Create a function addItem that adds a new item to the shoppingList. Use the draft state provided by useImmer 
    to push the new item to the list.

    Create a function updateItem that modifies an existing item's attributes. Locate the item by id in the draft 
    state and update its properties directly.

    Create a function removeItem that removes an item from the shoppingList by id. Use the draft state to filter 
    out the item or splice it from the array.

Building the UI:

    Render the shopping list items and provide interface elements (e.g., buttons, inputs) to test adding, updating, 
    and removing items.
    Ensure the UI reflects the current state, demonstrating the list updates in real-time.
 */

import { useImmer } from "use-immer";

function ShoppingList() {
  const [list, setList] = useImmer([]);
  const [nameInput, setNameInput] = useImmer("");
  const [quantityInput, setQuantityInput] = useImmer("");
  const [categoryInput, setCategoryInput] = useImmer("");
  const [notesInput, setNotesInput] = useImmer("");

  const addItem = () => {
    setList((draft) => {
      draft.push({
        id: list.length + 1,
        name: nameInput,
        quantity: parseInt(quantityInput),
        details: {
          category: categoryInput,
          notes: notesInput,
        },
      });
    });
  };

  const updateItem = (id) => {
    setList((draft) => {
      const itemIndex = draft.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        draft[itemIndex].name = nameInput;
        draft[itemIndex].quantity = parseInt(quantityInput);
        draft[itemIndex].details.category = categoryInput;
        draft[itemIndex].details.notes = notesInput;
      }
    });
  };

  const removeItem = (id) => {
    setList((draft) => {
      return draft.filter((item) => item.id !== id);
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* Left Div containing information */}
      <div style={{ marginRight: "20px" }}>
        <h2>Shopping List</h2>
        {list.map((item) => (
          <div key={item.id}>
            <ul style={{ textAlign: "left" }}>
              <li>
                <strong>
                  #{item.id} {item.name}
                </strong>
              </li>
              <li>
                <strong>Quantity:</strong> {item.quantity || 1}
              </li>
              <li>
                <strong>Details:</strong>
                <ul>
                  <li>
                    <strong>Category:</strong> {item.details.category}
                  </li>
                  <li>
                    <strong>Notes:</strong> {item.details.notes}
                  </li>
                </ul>
              </li>
              <li>
                <button onClick={() => removeItem(item.id)}>Remove</button>
                <button onClick={() => updateItem(item.id)}>Update</button>
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* Right Div containing input boxes */}
      <div>
        <h2>Add an item to your</h2>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Enter Name"
        />
        <br />
        <input
          type="number"
          value={quantityInput}
          onChange={(e) => setQuantityInput(e.target.value)}
          placeholder="Enter Quantity"
        />
        <br />
        <input
          type="text"
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          placeholder="Enter Category"
        />
        <br />
        <input
          type="text"
          value={notesInput}
          onChange={(e) => setNotesInput(e.target.value)}
          placeholder="Enter Notes"
        />
        <br />
        <br />
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

export default ShoppingList;
