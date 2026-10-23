
import { useState } from "react";

function ShoppingList(props) {
    const [rows, setRows] = useState(props.groceries);
    const [newItem, setNewItem] = useState("");
    const [purchased, setPurchased] = useState(false);

    const handleAdd = () => {
        if (newItem.trim() === "") return;

        const newRow = {
            id: Date.now(),
            name: newItem.trim(),
            purchased: purchased,
        };

        setRows(prevRows => [...prevRows, newRow]);

        setNewItem("");
        setPurchased(false);
    };

    const handleDelete = (id) => {
        setRows(prevRows =>
            prevRows.filter((grocery) => grocery.id !== id)
        );
    };

    const handleToggle = (id) => {
        setRows(prevRows =>
            prevRows.map((grocery) =>
                grocery.id === id
                    ? {
                        ...grocery,
                        purchased: !grocery.purchased
                    }
                    : grocery
            )
        );
    };

    const listItems = rows.map((grocery) => (
        <li key={grocery.id}>
            <input
                type="checkbox"
                className="checkbox"
                checked={grocery.purchased}
                onChange={() => handleToggle(grocery.id)}
            />

            {grocery.name} -
            {grocery.purchased ? " Purchased" : " Not Purchased"}

            <button
                className="deleteBtn"
                onClick={() => handleDelete(grocery.id)}
            >
                Delete
            </button>
        </li>
    ));

    return (
        <>
            <h1>Grocery Checker</h1>

            <hr />

            <div className="layout">
                <button
                    className="addBtn"
                    onClick={handleAdd}
                >
                    Add Item
                </button>

                <input
                    className="inputItm"
                    type="text"
                    placeholder="Add Item..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />

                <p className="yes">Purchased</p>

                <input
                    type="radio"
                    name="purchaseStatus"
                    className="radio"
                    checked={purchased === true}
                    onChange={() => setPurchased(true)}
                />

                <p className="no">Not Purchased</p>

                <input
                    type="radio"
                    name="purchaseStatus"
                    className="radio"
                    checked={purchased === false}
                    onChange={() => setPurchased(false)}
                />
            </div>

            <div className="list">
                <ul>{listItems}</ul>
            </div>
        </>
    );
}

export default ShoppingList;
